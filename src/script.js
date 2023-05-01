// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".hamburger-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// CLICK DI LUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e){
if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
}
})