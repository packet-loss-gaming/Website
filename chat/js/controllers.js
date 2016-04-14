 "use strict"
angular.module('chatCraftWebApp', [])
  .controller('ChatCraftController', function ($scope) {

  $scope.user = { };
  $scope.chatResponses = [];
  $scope.serverUsers = [];
  $scope.remoteUsers = [];

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

  $scope.getJoinMessage = function(response) {
    return response.params.name + ' joined ' + (response.params.remote ? 'chat' : 'the game');
  };

  $scope.getLeaveMessage = function(response) {
    return response.params.name + ' left ' + (response.params.remote ? 'chat' : 'the game');
  };

  $scope.getChatMessage = function(response) {
    return '<' + response.params.sender + '> ' + response.params.message;
  };

  $scope.getSystemMessage = function(response) {
    return response.params.message;
  };

  $scope.scrollChatToEnd = function(response) {
    var element = document.getElementById('chat-feed');
    element.scrollTop = element.scrollHeight;
  };

  $scope.authenticate = function() {
    if (chatSocket) {
      return;
    }

    chatSocket = new WebSocket("ws://server.skelril.com:8080");
    localStorage.setItem("username", $scope.user.name);

    chatSocket.onopen = function(event) {
      chatSocket.send(JSON.stringify({
        user: uuid,
        method: 'join',
        params: {
          name: $scope.user.name
        }
      }));
      $scope.$apply();
    };

    chatSocket.onclose = function(event) {
      chatSocket = undefined;
      $scope.$apply();
    };

    var updateChatResponses = function(response) {
      $scope.chatResponses.push(response);
      if ($scope.chatResponses.length > 50) {
        $scope.chatResponses = $scope.chatResponses.slice(1);
      }
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
        case 'join':
          handleJoin(recieved);
          break;
        case 'leave':
          handleLeave(recieved);
          break;
        case 'send':
        case 'ssend':
          handleSend(recieved);
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
    chatSocket.send(JSON.stringify({
      user: uuid,
      method: 'send',
      params: {
        message: $scope.user.message
      }
    }));
    $scope.user.message = "";
  };
})
