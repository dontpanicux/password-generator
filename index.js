const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// UI elements / components
const generatePasswordBtn = document.getElementById("generate-pass-btn")

const passwordOne = document.getElementById("input-field-passwordOne")
const passwordTwo = document.getElementById("input-field-passwordTwo")



// interactivity / functions
generatePasswordBtn.addEventListener('click', function(){
    if ( passwordOne.value === ""){
    for ( let i = 0; i < 15; i++ ){
       let randoNumOne = Math.floor(Math.random() * characters.length)
        console.log(randoNumOne)
        passwordOne.value += characters[randoNumOne]

        let randoNumTwo = Math.floor(Math.random() * characters.length)
        console.log(randoNumTwo)
        passwordTwo.value += characters[randoNumTwo] 
    }} else {
        passwordOne.value = ""
        passwordTwo.value = ""
        for ( let i = 0; i < 15; i++ ){
            let randoNumOne = Math.floor(Math.random() * characters.length)
             console.log(randoNumOne)
             passwordOne.value += characters[randoNumOne]
     
             let randoNumTwo = Math.floor(Math.random() * characters.length)
             console.log(randoNumTwo)
             passwordTwo.value += characters[randoNumTwo] 
    } }
})

// Copy to Clipboard function
/*
    Code examples + info about the 'new' Clipboard API
    https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/
*/

// Copy btn vars
    const copyBtnPasswordOne = document.getElementById("copy-btn-passwordOne")
    const copyBtnPasswordTwo = document.getElementById("copy-btn-passwordTwo")

    copyBtnPasswordOne.addEventListener('click', function(){
        //console.log('copyBtnPasswordOne clicked')
        let passwordOneText = document.getElementById('input-field-passwordOne').value
        console.log(`${passwordOneText} ${typeof passwordOneText}`)

        // interacting with the Clipboard API
        navigator.clipboard.writeText(`${passwordOneText}`);    

	    //alert(`Password copied to clipboard: ${passwordOneText}`);
    })
    
    copyBtnPasswordTwo.addEventListener('click', function(){
        //console.log('copyBtnPasswordTwo clicked')

        let passwordTwoText = document.getElementById("input-field-passwordTwo").value
        // interacting with the Clipboard API
        navigator.clipboard.writeText(`${passwordTwoText}`)
    })