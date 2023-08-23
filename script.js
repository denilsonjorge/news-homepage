const btns=document.querySelectorAll('.btn')
const trs=document.querySelector('.trs');
const menu=document.querySelector('.menu');

btns.forEach(e=>{
  e.addEventListener("click",()=>{
    trs.classList.toggle("active")
    menu.classList.toggle("active")
  })
})
