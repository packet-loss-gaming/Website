angular.module('chatCraftWebApp', [])
  .controller('ChatCraftController', function ($scope) {

  $scope.user = { }
  $scope.responses = []

  var chatSocket
  var uuid

  var genUUID = function() {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0
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

    chatSocket.onmessage = function(event) {
      $scope.responses.push(JSON.parse(event.data))
      var endOfDoc = document.body.clientHeight == window.scrollY + window.innerHeight
      $scope.$apply()

      if (endOfDoc) {
        document.getElementById('chat-feed').scrollIntoView({block: 'end'});
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
