// Navbar toggle script

const header= document.querySelector("[data-header]");
const navTogglebtn= document.querySelector("[data-nav-toggle")

navTogglebtn.addEventListener("click", function(){
    header.classList.toggle("nav-active");
    this.classList.toggle("active")
});

// toggle the navbar when click any navbar link

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function(){
        header.classList.toggle("nav-active");
        navTogglebtn.classList.toggle("active");
    });
    
}

window.addEventListener("scroll",function(){
   if(this.window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active"):
   }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
   }
});