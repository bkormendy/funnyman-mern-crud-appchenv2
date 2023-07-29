class MessageApp {
    constructor() {
        this.messages = []
    }

    post(content) {
        let item = {
            id: this.messages.length,
            content: content,
            date: new Date()
        }
        this.messages.push(item)
        return this.messages
    }

    //Read
    get(id) {
        return this.messages[id]
    }

    //Update
    update(id, content) {
        this.messages[id].content = content
        return this.messages[id]
    }
}

export default MessageApp