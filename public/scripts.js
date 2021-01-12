const modalOverlay = document.querySelector('.ModalOverlay')
const modal = document.querySelector(".modal")

const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const cardId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${cardId}`
    })
}

document.querySelector(".MaximizeModal").addEventListener("click", function(){
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize")
    } else {
        modal.classList.add("maximize")
    }
})

document.querySelector(".CloseModal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""
})