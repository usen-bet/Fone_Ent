const menu_btn = document.querySelector(".hamburger")
const mobile = document.querySelector(".mobile-nav")
const body = document.querySelector(".project")
const active = document.querySelector(".is-active") 
const dropdown = document.querySelector(".dropdown")
const down = document.querySelector(".drop")
const modal = document.querySelector(".modal")
const modal1 = document.querySelector(".modal1")
const big = document.querySelector(".big")
const closedd = document.querySelector(".closed")
const cardClash = document.querySelector(".card-clash")
const fone = document.querySelector(".fone-net")
const link = document.querySelector(".link")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")
const dialog = document.querySelector("#dialog")
const submit = document.querySelector(".submit")
const openModal = document.querySelector("#open-modal")
const xx = document.querySelector(".xx")

const animateElements = document.querySelectorAll('.animate')
const blinkElements = document.querySelectorAll('.blink')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
           entry.target.classList.add('show') 
        } else {
            entry.target.classList.remove('show')
        }
    })
})

xx.addEventListener('click' , () => {
    mobile.classList.toggle('is-active')
    xx.style.display = 'none'
    menu_btn.style.display = 'block'
}
)

const animator = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
           entry.target.classList.add('blinked') 
        } else {
            entry.target.classList.remove('blinked')
        }
    })
})

animateElements.forEach((el) => { observer.observe(el) })
blinkElements.forEach((el) => { animator.observe(el)})

openModal.addEventListener("click", () => {
    dialog.show();
})

menu_btn.addEventListener("click", () => {  
        // menu_btn.classList.toggle('active')
        mobile.classList.toggle('is-active')
        body.style.overflow = 'hidden'
        xx.style.display = 'block'
}) 

link.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.style.overflow = 'scroll'
    menu_btn.classList.toggle('active')
})

link1.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.style.overflow = 'scroll'
    menu_btn.classList.toggle('active')
})

link2.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.style.overflow = 'scroll'
    menu_btn.classList.toggle('active')
})

link3.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.style.overflow = 'scroll'
    menu_btn.classList.toggle('active')
})

fone.addEventListener("click", () => {
    modal1.classList.toggle("none")
})

closedd.addEventListener("click", () => {
    modal.style.display = "none"
    modal.style.display = "none"    
})

dropdown.addEventListener("click", () => {
    down.classList.toggle('opacity')
} )

cardClash.addEventListener("click", () => {
    modal.classList.toggle("none")

})