(function() {
  var getBaseUrl = function() {
    var protocolInfo = location.protocol;
    var hostnameInfo = location.hostname;
    var portInfo = location.port ? ':' + location.port : '';

    return protocolInfo + '//' + hostnameInfo + portInfo;
  };

  var originalBaseUrl = getBaseUrl();

  setTimeout(function() {
      window.location = originalBaseUrl + "/voip/connect-info";
  }, 750);

  window.location = "mumble://voip.packetloss.gg:5360?title=Packet Loss Gaming&version=1.2.0";
})();
