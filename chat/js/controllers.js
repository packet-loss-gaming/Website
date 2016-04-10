 "use strict"
angular.module('chatCraftWebApp', [])
  .controller('ChatCraftController', function ($scope) {

  $scope.user = { }
  $scope.chatResponses = []
  $scope.serverUsers = []
  $scope.remoteUsers = []

  let chatSocket
  let uuid

  let genUUID = function() {
    let d = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random()*16)%16 | 0
      d = Math.floor(d/16)
      return (c=='x' ? r : (r&0x3|0x8)).toString(16)
    })
    return uuid
  }

  if (typeof(Storage) !== "undefined") {
    uuid = localStorage.getItem("identifier")
    $scope.user.name = localStorage.getItem("username")
  }

  if (!uuid) {
    localStorage.setItem("identifier", uuid = genUUID())
  }

  $scope.isLoading = function() {
    return chatSocket
  }

  $scope.isConnected = function() {
    return chatSocket && chatSocket.readyState === 1
  }

  $scope.getJoinMessage = function(response) {
    return response.params.name + ' joined ' + (response.params.remote ? 'chat' : 'the game')
  }

  $scope.getLeaveMessage = function(response) {
    return response.params.name + ' left ' + (response.params.remote ? 'chat' : 'the game')
  }

  $scope.getChatMessage = function(response) {
    return '<' + response.params.sender + '> ' + response.params.message
  }

  $scope.authenticate = function() {
    if (chatSocket) {
      return
    }

    chatSocket = new WebSocket("ws://server.skelril.com:8080")
    localStorage.setItem("username", $scope.user.name)

    chatSocket.onopen = function(event) {
      chatSocket.send(JSON.stringify({
        user: uuid,
        method: 'join',
        params: {
          name: $scope.user.name
        }
      }))
      $scope.$apply()
    }

    chatSocket.onclose = function(event) {
      chatSocket = undefined
      $scope.$apply()
    }

    let updateChatResponses = function(response) {
      $scope.chatResponses.push(response)
      if ($scope.chatResponses.length > 50) {
        $scope.chatResponses = $scope.chatResponses.slice(1)
      }
    }

    let handleJoin = function(recieved) {
      updateChatResponses(recieved)
      notify($scope.getJoinMessage(recieved))

      if (recieved.params.remote) {
        $scope.remoteUsers.push({ name: recieved.params.name })
      } else {
        $scope.serverUsers.push({ name: recieved.params.name })
      }
    }

    let handleLeave = function(recieved) {
      updateChatResponses(recieved)
      notify($scope.getLeaveMessage(recieved))

      let findUser = function(user) {
        return user.name === recieved.params.name
      }

      let users = recieved.params.remote ? $scope.remoteUsers : $scope.serverUsers
      let index = users.findIndex(findUser)

      if (index > -1) {
          users.splice(index, 1)
      }
    }

    let handleSend = function(recieved) {
      updateChatResponses(recieved)
      notify($scope.getChatMessage(recieved))
    }

    let handleList = function(recieved) {
      $scope.serverUsers = recieved.params.server
      $scope.remoteUsers = recieved.params.remote
    }

    let notify = function(message) {
      if (!("Notification" in window)) {
      } else if (Notification.permission === "granted") {
        if (document.hidden) {
          new Notification(message)
        }
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            notify(message)
          }
        })
      }
    }

    chatSocket.onmessage = function(event) {
      let recieved = JSON.parse(event.data)
      let method = recieved.method

      switch (method) {
        case 'join':
          handleJoin(recieved)
          break
        case 'leave':
          handleLeave(recieved)
          break
        case 'send':
          handleSend(recieved)
          break
        case 'list':
          handleList(recieved)
          break
      }

      let diff = document.body.clientHeight - (window.scrollY + window.innerHeight)
      let endOfDoc = 0 <= diff && diff <= 75
      $scope.$apply()

      if (endOfDoc) {
        let element = document.getElementById('chat-feed')
        window.scrollTo(0, element.scrollTop + element.clientHeight)
      }
    }
  }

  $scope.sendMessage = function() {
    chatSocket.send(JSON.stringify({
      user: uuid,
      method: 'send',
      params: {
        message: $scope.user.message
      }
    }))
    $scope.user.message = ""
  }
})
