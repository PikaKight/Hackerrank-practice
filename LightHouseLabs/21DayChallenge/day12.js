const parseMessage = (messages) => {

    return `${messages.origin}: ${messages.message}`
  }
  
const parseTranscripts = (messages) => {
    // Code here!
    let messageArr = [];

    for (i of messages){
      messageArr.push(parseMessage(i))
    }

    return messageArr
}