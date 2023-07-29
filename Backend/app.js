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
    
}

export default MessageApp