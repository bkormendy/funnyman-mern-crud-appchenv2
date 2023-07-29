// app.test.js
import { expect } from "chai"
import MessageApp from './app.js'

describe("app", function() {
    let testApp = new MessageApp

    beforeEach(()=>{
        testApp = new MessageApp
        testApp.post('hi world')
    })

    it("app has messages", function() {
    expect(testApp.messages).to.be.an('array')
    })

    it("app creates message (post)", function() {
        testApp.post('hi world')
        expect(testApp.messages.length).to.equal(2)
    })

    it("message has content, date, and id", function(){
        expect(testApp.messages[0].content).to.equal("hi world")
        expect(testApp.messages[0].date).not.to.equal(undefined)
        expect(testApp.messages[0].id).to.equal(0)
    })

})