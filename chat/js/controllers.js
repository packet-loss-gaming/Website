 "use strict"

var chatCraftWebApp = angular.module('chatCraftWebApp', ['ngSanitize']);

chatCraftWebApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

chatCraftWebApp.controller('ChatCraftController', function($scope) {

  $scope.user = { };
  $scope.chatResponses = [];
  $scope.targetUser = undefined;

  var refreshScope = function() {
    $scope.serverUsers = [];
    $scope.remoteUsers = [];
  }

  refreshScope();

  var chatSocket;
  var uuid;

  var genUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  if (typeof(Storage) !== "undefined") {
    uuid = localStorage.getItem("identifier");
    $scope.user.name = localStorage.getItem("username");
  }

  if (!uuid) {
    localStorage.setItem("identifier", uuid = genUUID());
  }

  window.addEventListener("resize", resizeThrottler, false);

  var actualResizeHandler = function() {
    $scope.$apply();
  }

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }

  $scope.chatHeight = function() {
    return window.innerHeight - 101;
  };

  $scope.isLoading = function() {
    return chatSocket;
  };

  $scope.isConnected = function() {
    return chatSocket && chatSocket.readyState === 1;
  };

  $scope.hasUsersListed = function() {
    return $scope.serverUsers.length + $scope.remoteUsers.length > 0;
  }

  $scope.hasPendingVerification = function() {
    return $scope.verificationCode;
  }

  $scope.getJoinMessage = function(response) {
    return response.params.name + ' joined ' + (response.params.remote ? 'chat' : 'the game');
  };

  $scope.getLeaveMessage = function(response) {
    return response.params.name + ' left ' + (response.params.remote ? 'chat' : 'the game');
  };

  $scope.getChatMessage = function(response) {
    return '<' + response.params.sender + '> ' + response.params.message;
  };

  $scope.getPrivateMessage = function(response) {
    var fromName = 'You';
    if (response.params.sender !== $scope.user.name) {
      fromName = response.params.sender;
    }

    var toName = 'You';
    if (response.params.target !== $scope.user.name) {
      toName = response.params.target;
    }

    return '[' + fromName + ' -> ' + toName + '] ' + response.params.message;
  };

  $scope.getSystemMessage = function(response) {
    return response.params.message;
  };

  $scope.scrollChatToEnd = function() {
    var element = document.getElementById('chat-feed');
    element.scrollTop = element.scrollHeight;
  };

  var tries = 0;

  $scope.authenticate = function() {
    if (chatSocket) {
      return;
    }
    tries += 1;

    chatSocket = new WebSocket("ws://server.skelril.com:8080");
    localStorage.setItem("username", $scope.user.name);

    chatSocket.onopen = function(event) {
      tries = 0;
      chatSocket.send(JSON.stringify({
        user: uuid,
        method: 'join',
        params: {
          name: $scope.user.name
        }
      }));
      $scope.$apply();

      notify("You're connected to the chat server");
    };

    chatSocket.onclose = function(event) {
      chatSocket = undefined;
      if (tries < 3) {
        $scope.authenticate();
      }

      if (tries <= 1) {
        refreshScope();
        notify("You've been disconnected from the chat server");
      }

      $scope.$apply();
    };

    var updateChatResponses = function(response) {
      $scope.chatResponses.push(response);
      if ($scope.chatResponses.length > 50) {
        $scope.chatResponses = $scope.chatResponses.slice(1);
      }
    };

    var handleVerify = function(recieved) {
      $scope.verificationCode = recieved.params.code;
      $scope.verificationText = "/vrc " + $scope.verificationCode;
    };

    var handleJoin = function(recieved) {
      updateChatResponses(recieved);
      notify($scope.getJoinMessage(recieved));

      if (recieved.params.remote) {
        $scope.remoteUsers.push({ name: recieved.params.name });
      } else {
        $scope.serverUsers.push({ name: recieved.params.name });
      }
    };

    var handleLeave = function(recieved) {
      updateChatResponses(recieved);
      notify($scope.getLeaveMessage(recieved));

      var findUser = function(user) {
        return user.name === recieved.params.name;
      }

      var users = recieved.params.remote ? $scope.remoteUsers : $scope.serverUsers;
      var index = users.findIndex(findUser);

      if (index > -1) {
          users.splice(index, 1);
      }
    };

    var handleSend = function(recieved) {
      updateChatResponses(recieved);
      notify($scope.getChatMessage(recieved));
    };

    var handlePSend = function(recieved) {
      updateChatResponses(recieved);
      notify($scope.getPrivateMessage(recieved));
    };

    var handleSSend = function(recieved) {
      updateChatResponses(recieved);
      notify($scope.getSystemMessage(recieved));
    };

    var handleList = function(recieved) {
      $scope.serverUsers = recieved.params.server;
      $scope.remoteUsers = recieved.params.remote;
    };

    var notify = function(message) {
      if (!("Notification" in window)) {
      } else if (Notification.permission === "granted") {
        if (document.hidden) {
          new Notification(message);
        }
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            notify(message);
          }
        })
      }
    };

    chatSocket.onmessage = function(event) {
      var recieved = JSON.parse(event.data);
      var method = recieved.method;

      switch (method) {
        case 'verify':
          handleVerify(recieved);
          break;
        case 'join':
          handleJoin(recieved);
          break;
        case 'leave':
          handleLeave(recieved);
          break;
        case 'send':
          handleSend(recieved);
          break;
        case 'psend':
          handlePSend(recieved);
          break;
        case 'ssend':
          handleSSend(recieved);
          break;
        case 'list':
          handleList(recieved);
          break;
      }

      var element = document.getElementById('chat-feed');
      var diff = element ? element.scrollHeight - (element.scrollTop + element.clientHeight) : -1;
      var endOfDoc = 0 <= diff && diff <= 75;

      $scope.$apply();

      if (endOfDoc) {
        $scope.scrollChatToEnd();
      }
    };
  };

  $scope.sendMessage = function() {
    if ($scope.targetUser) {
      chatSocket.send(JSON.stringify({
        user: uuid,
        method: 'psend',
        params: {
          message: $scope.user.message,
          target: $scope.targetUser
        }
      }));
    } else {
      chatSocket.send(JSON.stringify({
        user: uuid,
        method: 'send',
        params: {
          message: $scope.user.message
        }
      }));
    }
    $scope.user.message = "";
  };

  $scope.setTargetUser = function(user) {
    if (user === $scope.user.name) {
      return;
    }

    if ($scope.targetUser === user) {
      $scope.targetUser = undefined;
    } else {
      $scope.targetUser = user;
    }
  }
})
