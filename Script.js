const closer = document.querySelector(".closer")
const close = document.querySelector(".close")
const lines = document.querySelector(".lines")
const answer = document.querySelector(".answer")
const none = document.querySelector(".none")

const closers = document.querySelector(".closer1")
const closes = document.querySelector(".close1")
const liness = document.querySelector(".lines1")
const answers = document.querySelector(".answer1")
const nones = document.querySelector(".none1")

const closer2 = document.querySelector(".closer2")
const close2 = document.querySelector(".close2")
const lines2 = document.querySelector(".lines2")
const answer2 = document.querySelector(".answer2")
const none2 = document.querySelector(".none2")

const closer3 = document.querySelector(".closer3")
const close3 = document.querySelector(".close3")
const lines3 = document.querySelector(".lines3")
const answer3 = document.querySelector(".answer3")
const none3 = document.querySelector(".none3")

const closer4 = document.querySelector(".closer4")
const close4 = document.querySelector(".close4")
const lines4 = document.querySelector(".lines4")
const answer4 = document.querySelector(".answer4")
const none4 = document.querySelector(".none4")

const closer5 = document.querySelector(".closer5")
const close5 = document.querySelector(".close5")
const lines5 = document.querySelector(".lines5")
const answer5 = document.querySelector(".answer5")
const none5 = document.querySelector(".none5")

const menu_btn = document.querySelector(".hamburger")
const mobile = document.querySelector(".mobile-nav")
const body = document.querySelector(".project")
const active = document.querySelector(".is-active") 
const dropdown = document.querySelector(".dropdown")
const down = document.querySelector(".drop")
const modal = document.querySelector(".modal")
const modal1 = document.querySelector(".modal1")
const big = document.querySelector(".big")
const closed = document.querySelector(".closed")
const cardClash = document.querySelector(".card-clash")
const fone = document.querySelector(".fone-net")
const link = document.querySelector(".link")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")

const dialog = document.querySelector("#dialog")
const submit = document.querySelector(".submit")
const openModal = document.querySelector("#open-modal")

openModal.addEventListener("click", () => {
    dialog.showModal();
    console.log("king")
})


cardClash.addEventListener("click", () => {
    modal.classList.toggle("none")

})

link.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.classList.toggle('overflow')
    menu_btn.classList.toggle('active')
})

link1.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.classList.toggle('overflow')
    menu_btn.classList.toggle('active')
})

link2.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.classList.toggle('overflow')
    menu_btn.classList.toggle('active')
})

link3.addEventListener("click", () => {
    mobile.classList.toggle('is-active') 
    body.classList.toggle('overflow')
    menu_btn.classList.toggle('active')
})

fone.addEventListener("click", () => {
    modal1.classList.toggle("none")
})


closed.addEventListener("click", () => {
    modal.style.display = "none"
    modal.style.display = "none"    
})



menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle('active')
        mobile.classList.toggle('is-active')
        body.classList.toggle('overflow')
    
}) 

dropdown.addEventListener("click", () => {
    down.classList.toggle('opacity')
    
} )

close.addEventListener("click", () => {
    if (answer.style.display == "block") {
        lines.style.bottom = "5px"
        answer.style.display = "none"
        none.style.display = "none"
        closer.style.display = "block"
    }else{
    lines.style.bottom = "0px"
    answer.style.display = "block"
    closer.style.display = "none"
    none.style.display= "block" 
}
})

closes.addEventListener("click", () => {
    if (answers.style.display == "block") {
        liness.style.bottom = "5px"
        answers.style.display = "none"
        nones.style.display = "none"
        closers.style.display = "block"
    }else{
    liness.style.bottom = "0px"
    answers.style.display = "block"
    closers.style.display = "none"
    nones.style.display= "block"
    
}
})

close2.addEventListener("click", () => {
    if (answer2.style.display == "block") {
        lines2.style.bottom = "5px"
        answer2.style.display = "none"
        none2.style.display = "none"
        closer2.style.display = "block"
    }else{
    lines2.style.bottom = "0px"
    answer2.style.display = "block"
    closer2.style.display = "none"
    none2.style.display= "block"
    
}
})

close3.addEventListener("click", () => {
    if (answer3.style.display == "block") {
        lines3.style.bottom = "5px"
        answer3.style.display = "none"
        none3.style.display = "none"
        closer3.style.display = "block"
    }else{
    lines3.style.bottom = "0px"
    answer3.style.display = "block"
    closer3.style.display = "none"
    none3.style.display= "block"
    
}
})

close4.addEventListener("click", () => {
    if (answer4.style.display == "block") {
        lines4.style.bottom = "5px"
        answer4.style.display = "none"
        none4.style.display = "none"
        closer4.style.display = "block"
    }else{
    lines4.style.bottom = "0px"
    answer4.style.display = "block"
    closer4.style.display = "none"
    none4.style.display= "block"
    
}
})

close5.addEventListener("click", () => {
    if (answer5.style.display == "block") {
        lines5.style.bottom = "0px"
        answer5.style.display = "none"
        none5.style.display = "none"
        closer5.style.display = "block"
    }else{
    lines5.style.bottom = "0px"
    answer5.style.display = "block"
    closer5.style.display = "none"
    none5.style.display= "block"
    
}
})

