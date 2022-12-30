
const body = document.body;
projectItem = document.querySelector(".item");

/*
console.log(projectItem);
projectItem.addEventListener('click', (event)=>{
  body.style.backgroundColor = blue;
})
*/
let lastScroll = 0;

window.addEventListener('scroll', () => {

 console.log(window.pageYOffset)
 const currentScroll = window.pageYOffset

 if (currentScroll <= 0) {
  body.classList.remove("scroll-up")
  body.classList.remove("scroll-down")
 }

 if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && currentScroll > 55) {
body.classList.remove("scroll-up")
body.classList.add("scroll-down")
 }
 if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
  body.classList.add("scroll-up")
  body.classList.remove("scroll-down")
   }

 lastScroll = currentScroll;
})


