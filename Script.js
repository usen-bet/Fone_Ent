const footage = document.querySelector('.footage')
const tv = document.querySelector('.tv')
const video = document.querySelector('video');
const clip = document.querySelector('.clip');

const clip1 = document.querySelector('.clip1')
const footage1 = document.querySelector('.footage1')
const tv1 = document.querySelector('.tv1')

const clip2 = document.querySelector('.clip2')
const footage2 = document.querySelector('.footagex')
const tv2 = document.querySelector('.tv2')

const clip3 = document.querySelector('.clip3')
const footage3 = document.querySelector('.footage3')
const rv = document.querySelector('.rv')
const xMark = document.querySelector('.x-mark')
const xMark1 = document.querySelector('.x-mark1')
const xMark2 = document.querySelector('.x-mark2')
const xMark3 = document.querySelector('.x-mark3')
const carousel = document.querySelectorAll('.carousel-slide')

const question = document.querySelector(".question")
const answer = document.querySelector(".answer")
const lines = document.querySelector(".lines")
const closer = document.querySelector(".closer")
const none = document.querySelector('.none')

const question1 = document.querySelector(".question1")
const answer1 = document.querySelector(".answer1")
const lines1= document.querySelector(".lines1")
const closer1 = document.querySelector(".closer1")
const none1 = document.querySelector('.none1')

const question2 = document.querySelector(".question2")
const answer2 = document.querySelector(".answer2")
const lines2= document.querySelector(".lines2")
const closer2 = document.querySelector(".closer2")
const none2 = document.querySelector('.none2')

const question3 = document.querySelector(".question3")
const answer3 = document.querySelector(".answer3")
const lines3= document.querySelector(".lines3")
const closer3 = document.querySelector(".closer3")
const none3 = document.querySelector('.none3')

const question4 = document.querySelector(".question4")
const answer4 = document.querySelector(".answer4")
const lines4= document.querySelector(".lines4")
const closer4 = document.querySelector(".closer4")
const none4 = document.querySelector('.none4')

const question5 = document.querySelector(".question5")
const answer5 = document.querySelector(".answer5")
const lines5= document.querySelector(".lines5")
const closer5 = document.querySelector(".closer5")
const none5 = document.querySelector('.none5')

question5.addEventListener('click', () => {
    if(answer5.style.display !== 'none'){
        answer5.classList.toggle('answer5')
        lines5.style.bottom = '5px'
        closer5.classList.toggle('none5')
        none5.classList.toggle('none5')
    }
})


question4.addEventListener('click', () => {
    if(answer4.style.display !== 'none'){
        answer4.classList.toggle('answer4')
        lines4.style.bottom = '5px'
        closer4.classList.toggle('none4')
        none4.classList.toggle('none4')
    }
})


question3.addEventListener('click', () => {
    if(answer3.style.display !== 'none'){
        answer3.classList.toggle('answer3')
        lines3.style.bottom = '5px'
        closer3.classList.toggle('none3')
        none3.classList.toggle('none3')
    }
})


question2.addEventListener('click', () => {
    if(answer2.style.display !== 'none'){
        answer2.classList.toggle('answer2')
        lines2.style.bottom = '5px'
        closer2.classList.toggle('none2')
        none2.classList.toggle('none2')
    }
})

question1.addEventListener('click', () => {
    if(answer1.style.display !== 'none'){
        answer1.classList.toggle('answer1')
        lines1.style.bottom = '5px'
        closer1.classList.toggle('none1')
        none1.classList.toggle('none1')
    }
})


question.addEventListener('click', () => {
    if(answer.style.display !== 'none'){
        answer.classList.toggle('ans')
        lines.style.bottom = '5px'
        closer.classList.toggle('none')
        none.classList.toggle('none')
    }
})

footage.addEventListener('mouseenter', () => {
    tv.style.display = 'flex'
    clip.play();
    footage1.style.display = 'none'
    footage2.style.display = 'none'
    footage3.style.display = 'none'
});

xMark.addEventListener('click', () => {
    tv.style.display = 'none'
    clip.pause();
    footage1.style.display = 'block'
    footage2.style.display = 'block'
    footage3.style.display = 'block'
})

footage1.addEventListener('mouseenter', () => {
    tv1.style.display = 'flex'
    clip1.play();
    footage.style.display = 'none'
    footage2.style.display = 'none'
    footage3.style.display = 'none'
});

xMark1.addEventListener('click', () => {
    tv1.style.display = 'none'
    clip1.pause();
    footage.style.display = 'block'
    footage2.style.display = 'block'
    footage3.style.display = 'block'
})

footage2.addEventListener('mouseenter', () => {
    tv2.style.display = 'flex'
    clip2.play();
    footage.style.display = 'none'
    footage1.style.display = 'none'
    footage3.style.display = 'none'
});

xMark2.addEventListener('click', () => {
    tv2.style.display = 'none'
    clip2.pause();
    footage1.style.display = 'block'
    footage.style.display = 'block'
    footage3.style.display = 'block'
})

footage3.addEventListener('mouseenter', () => {
    rv.style.display = 'flex'
    clip3.play();
    footage1.style.display = 'none'
    footage.style.display = 'none'
    footage2.style.display = 'none'
});

xMark3.addEventListener('click', () => {
    rv.style.display = 'none'
    clip3.pause();
    footage1.style.display = 'block'
    footage.style.display = 'block'
    footage2.style.display = 'block'
})

