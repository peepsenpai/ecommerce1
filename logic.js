// counter 
// document.addEventListener('DOMContentLoaded', ()=>{
//     function counter(id, start, end, duration){
//         let object = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1:-1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setInterval(()=>{
//             current += increment;
//             object.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         },step);
//     }
//     counter('count1', 0 , 1509, 3567);
//     counter('count2', 0 , 2000, 3456);
//     counter('count3', 0 , 5000, 3567);
//     counter('count4', 0 , 600, 2000);
// })