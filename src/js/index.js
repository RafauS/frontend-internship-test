const mainBtn = document.querySelector(".btn-main")
const mainContainer = document.querySelector(".main")
const popupContainer = document.querySelector(".popup")
const closeBtn = document.querySelector(".close-btn")
const submitBtn = document.querySelector(".submit-btn")
const emailInput = document.querySelector(".email-input")
const passwordInput = document.querySelector(".password-input")


mainBtn.addEventListener('click', changeContainer)
closeBtn.addEventListener('click', changeContainer)



function changeContainer(){
    mainContainer.classList.toggle('hidden')
    popupContainer.classList.toggle('hidden')
}

function emailValidation(email){
    const regax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regax.test(String(email).toLowerCase())
}

function passwordValidtion(passoword){
    const regax = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
    return regax.test(String(passoword))
}
