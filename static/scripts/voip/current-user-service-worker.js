let buildTitle = (data) => {
  if (data.connected) {
    return `${data.user} connected.`
  } else {
    return `${data.user} disconnected.`
  }
}

self.addEventListener('push', event => {
  const data = event.data.json()
  self.registration.showNotification(buildTitle(data))
})
