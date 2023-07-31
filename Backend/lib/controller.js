//controller.js
import MessageApp from './model.js'

let messageApp = new MessageApp(`/\///json/\//testMessages.json`)

function getAll(){
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll()
    if (result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}
export default {
  getAll,
  messageApp
}