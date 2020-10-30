import Notification from './notification.js'
let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance()
  instance.add({
    content,
    duration
  })
}

export default {
  info(e) {
    return notice(e)
  }
}
