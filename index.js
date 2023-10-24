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