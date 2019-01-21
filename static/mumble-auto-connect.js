(function() {
  var LOCAL_STORAGE_KEY = "mumble-just-attempted-connection";

  var getJustAttemptedConnection = function() {
    return localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
  };

  var setJustAttemptedConnection = function(value) {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  };

  var getBaseUrl = function() {
    var protocolInfo = location.protocol;
    var hostnameInfo = location.hostname;
    var portInfo = location.port ? ':' + location.port : '';

    return protocolInfo + '//' + hostnameInfo + portInfo;
  };

  var originalBaseUrl = getBaseUrl();

  if (getJustAttemptedConnection()) {
    setJustAttemptedConnection(false);
    return;
  }

  setTimeout(function() {
      setJustAttemptedConnection(true);
      window.location = originalBaseUrl + "/voip/connect";
  }, 1);

  window.location = "mumble://voip.packetloss.gg:5360?title=Packet Loss Gaming&version=1.2.0";
})();
