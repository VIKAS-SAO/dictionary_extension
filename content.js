console.log('content script runnign ')

document.addEventListener('mouseup',wordSelector);

function wordSelector(){
    let word  = window.getSelection().toString().trim()
    console.log(word)
    if(word.length > 0){
        let message = {
            text:word
        }
        chrome.runtime.sendMessage(message)
    }
}