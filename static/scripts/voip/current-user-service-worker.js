let buildTitle = (data) => {
  if (data.connected) {
    return `${data.user} connected.`
  } else {
    return `${data.user} disconnected.`
  }
}

const ONE_SECOND = 1000
const ONE_HOUR = 60 * 60 * ONE_SECOND
const TWELVE_HOURS = 12 * ONE_HOUR

let isExpiredNotification = (data) => {
  let timeDiff = new Date() - Date.parse(data.sentAt)
  return timeDiff > TWELVE_HOURS
}

self.addEventListener('push', (event) => {
  const data = event.data.json()

  if (isExpiredNotification(data))
    return

  self.registration.showNotification(buildTitle(data), {
    icon: 'https://packetloss.gg/static/favicon.png'
  })
})
