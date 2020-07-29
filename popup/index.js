console.log('this is the popup console')

let background = chrome.extension.getBackgroundPage()
let input = document.getElementById('word')
let definition = document.getElementById('definition')  
input.textContent = background.word;

async function  fetcher(){
    let url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + background.word + '?key=d244f8b8-b483-489f-93d2-7ef1b638b823';
    //   fetch(url ).then(function(response ){
    //     response.json().then(function(data){
    //         console.log(data)
    //         definition.textContent =data;
    //     })
        
    // } )

    let response = await  fetch(url);
    let data = await response.json()
    console.log(data)
    definition.textContent =data[0].shortdef[0];

}
 fetcher()
 



 