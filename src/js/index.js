const mainContainer = document.querySelector(".main")
const popupContainer = document.querySelector(".popup")
const finalContainer = document.querySelector(".final")

const mainBtn = document.querySelector(".btn-main")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector(".submit-btn")

const emailInput = document.querySelector(".email-input")
const passwordInput = document.querySelector(".password-input")


mainBtn.addEventListener('click', changeContainer)
closeBtn.addEventListener('click', changeContainer)
submitBtn.addEventListener('click', submitForm)



function changeContainer(){
    mainContainer.classList.toggle('hidden')
    popupContainer.classList.toggle('hidden')
}

function submitForm(){
    let isValidated = (emailValidation(emailInput.value) && passwordValidtion(passwordInput.value))

    if(isValidated){
        setTimeout(()=>{
            popupContainer.classList.toggle('hidden')
            mainContainer.classList.toggle('hidden')
            mainBtn.textContent = "Thank You!"
            mainBtn.removeEventListener('click', changeContainer)
        },3000)
    }
    else{
        alert("Incorrect data")
    }
}


function emailValidation(email){
    const regax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regax.test(String(email).toLowerCase())
}

function passwordValidtion(passoword){
    const regax = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
    return regax.test(String(passoword))
}
