const mainBtn = document.querySelector(".btn-main")
const mainContainer = document.querySelector(".main")
const popupContainer = document.querySelector(".popup")
const closeBtn = document.querySelector(".close-btn")

mainBtn.addEventListener('click', changeContainer)
closeBtn.addEventListener('click', changeContainer)



function changeContainer(){
    mainContainer.classList.toggle('hidden')
    popupContainer.classList.toggle('hidden')
}
