self.addEventListener('push', function(event) {
  var thisMessage = JSON.parse(event.data.text())
  console.log('[Service Worker] Push Received.')
  console.log('This message text: ' + thisMessage.text)
  console.log('URL: ' + thisMessage.url)
  console.log(`[Service Worker] Push had this data: "${event.data}"`)
  console.log('[Service Worker] as json: ' + JSON.stringify(thisMessage))
  const title = 'Sunny Crest'
  const options = {
    body: thisMessage.text,
    // Custom-defined actions allow varied responses
    actions: [
      {
        action: 'engage-action',
        title: 'Engage',
      },
    ],
    // icon: 'images/icon.png',
    // badge: 'images/badge.png'
  }
  event.waitUntil(self.registration.showNotification(title, options))
})
self.addEventListener('notificationclick', function(event) {
  if (!event.action) {
    // Was a normal notification click
    console.log('Normal Notification Click.')
  } else {
    console.log('Action click on ' + event.action)
  }
  console.log('[Service Worker] Notification click Received.')
  event.notification.close()
})

setTimeout(() => {
  self.registration.showNotification('Hello, world!')
}, 15000)
