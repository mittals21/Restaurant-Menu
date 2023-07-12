let allButton = document.getElementById("all")
let breakfastButton = document.getElementById("breakfast")
let lunchButton = document.getElementById("lunch")
let shakesButton = document.getElementById("shakes")
let dinnerButton = document.getElementById("dinner")
let card = document.getElementsByClassName("card")
let dinner = document.getElementsByClassName("dinner")
let lunch = document.getElementsByClassName("lunch")
let shakes = document.getElementsByClassName("shakes")
let breakfast = document.getElementsByClassName("breakfast")

dinnerButton.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].classList.contains('dinner')){
            card[i].style.display = 'block'
        }
        else{
            card[i].style.display = 'none'
        }
    }
})

lunchButton.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].classList.contains('lunch')){
            card[i].style.display = 'block'
        }
        else{
            card[i].style.display = 'none'
        }
    }
})

shakesButton.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].classList.contains('shakes')){
            card[i].style.display = 'block'
        }
        else{
            card[i].style.display = 'none'
        }
    }
})

breakfastButton.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        if(card[i].classList.contains('breakfast')){
            card[i].style.display = 'block'
        }
        else{
            card[i].style.display = 'none'
        }
    }
})

allButton.addEventListener('click', ()=>{
    for(let i=0; i<card.length; i++){
        card[i].style.display = 'block'
    }
})


