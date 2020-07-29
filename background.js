console.log('background scripts running !!')

window.word = 'You got no Word !'
 
chrome.runtime.onMessage.addListener(listener ) 

function listener(message , sender , sendResponse){
        word = message.text;

    console.log(window.word)
 
    
}