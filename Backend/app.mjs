//app.js
import express from "express"
import router from "./lib/routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(router)

app.listen(3001, function(){
  console.log("Connected");
})

export default app;