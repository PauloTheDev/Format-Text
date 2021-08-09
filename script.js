//Captures
const convertButton = document.querySelector('#convert-button');
const textArea = document.querySelector('#text-area');
const formatArea = document.querySelector('#format-area');
const formatButton = document.querySelectorAll('.format-button');

convertButton.addEventListener('click', ()=>{
   
    //Take text and how him
    const textInput = document.querySelector('#text-camp');
    const text = String(textInput.value);
    
    for(let second = 0; second < formatButton.length;second++){
        formatButton[second].style.animation = `showUp ${second + 1}s`};
    
    formatArea.style.display = 'block'
    textArea.innerHTML = text
    textArea.style.animation = `showUp 1s`

    //Convert Text
    //Bold
    formatButton[0].addEventListener('click', ()=>{
        textArea.innerHTML = `<b>${text}</b>`;
    });

    //Italic
    formatButton[1].addEventListener('click', ()=>{
        textArea.innerHTML = `<i>${text}</i>`;
    });

    //Subline
    formatButton[2].addEventListener('click', ()=>{
        textArea.innerHTML = `<ins>${text}</ins>`
    })

    //Mono
    formatButton[3].addEventListener('click', ()=>{
        textArea.innerHTML = `<code>${text}</code>`
    })


})



