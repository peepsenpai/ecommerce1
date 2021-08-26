// counter 
document.addEventListener('DOMContentLoaded', ()=>{
    function counter(id, start, end, duration){
        let object = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1:-1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            object.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter('count1', 0 , 1509, 3567);
    counter('count2', 0 , 2000, 3456);
    counter('count3', 0 , 500, 9567);
    counter('count4', 0 , 600, 2000);
})

// upcoming sale count 

let dayItem = document.querySelector('#day');
let hrItem = document.querySelector('#hr');
let mintItem = document.querySelector('#mint');
let secItem = document.querySelector('#sec');

let backCount = () =>{
    let futureDate = new Date("30 sept 2021");
    let currentDate = new Date();
    let useDate = futureDate - currentDate;

    let days = Math.floor(useDate/1000/60/60/24);
    let hours = Math.floor(useDate/1000/60/60) %24;
    let mint = Math.floor(useDate/1000/60) %60;
    let sec = Math.floor(useDate/1000) %60;

    dayItem.innerHTML = days;
    hrItem.innerHTML = hours;
    mintItem.innerHTML = mint;
    secItem.innerHTML = sec;

}
backCount();
 setInterval(backCount, 1000)



// scroll 
function scrollToTop (){
    let scrollTopBtn = document.querySelector('#scrollBtn')
    window.onscroll = function(){
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 256){
            scrollTopBtn.classList.add('active');
        }
        else{
            scrollTopBtn.classList.remove('active');
        }
    }
}
scrollToTop();