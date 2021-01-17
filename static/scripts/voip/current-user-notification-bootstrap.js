(function() {
  const publicVapidKey = 'BFzOFMIz4MrG2p4StWiSg167zTNydLMCoZxwP66gprZPmKG1i6UyPUj_QHDfaJJBnQk0Vcv6_7GJHBPEYDzjSYw';

  let urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async function run() {
    const registration = await navigator.serviceWorker.register('/static/scripts/voip/current-user-service-worker.js', { scope: '/static/scripts/voip/' })

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })

    await fetch('https://api.packetloss.gg/voip/current-users/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  if ('serviceWorker' in navigator) {
    run().catch(error => console.error(error));
  }
})()
