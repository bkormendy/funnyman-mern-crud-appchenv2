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

})