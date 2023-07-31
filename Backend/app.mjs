//app.mjs
import express from 'express'
import MessageApp from './lib/model.js'

const app = express()

//hardcoded instance of message app test database vv
let messageApp = new MessageApp("/\///json/\//testMessages.json")

if (process.env.npm_lifecycle_event == "test") {
   messageApp = new MessageApp(`/\///json/\//testMessages.json`)
   } else {
      messageApp = new MessageApp(`/\///json/\//messages.json`)
   }

app.get('/', async (req, res) => {
   return new Promise((resolve, reject) => {
     let result = messageApp.getAll()
       res.json(result)
   })
 })

app.listen(3001, function(){
   console.log("Connected")
 })

export default app