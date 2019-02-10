(function() {
  var SESSION_STORAGE_KEY = "mumble-just-attempted-connection"

  var getJustAttemptedConnection = () => {
    return sessionStorage.getItem(SESSION_STORAGE_KEY) === "true"
  }

  var setJustAttemptedConnection = (value) => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, value)
  };

  var getBaseUrl = () => {
    var protocolInfo = location.protocol
    var hostnameInfo = location.hostname
    var portInfo = location.port ? ':' + location.port : ''

    return protocolInfo + '//' + hostnameInfo + portInfo
  }

  var originalBaseUrl = getBaseUrl()

  if (getJustAttemptedConnection()) {
    setJustAttemptedConnection(false)
    return
  }

  setTimeout(() => {
    setJustAttemptedConnection(true)
    window.location = originalBaseUrl + "/voip/connect"
  }, 1)

  window.location = "mumble://voip.packetloss.gg:5360?title=Packet Loss Gaming&version=1.2.0"
})()
