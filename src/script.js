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


// Dynamic Text

let textDinamis = document.querySelector(".dynamic-text > p");

let dynamic_text = ["Pindah Jalur Karir","Kurang Pengalaman","Pindah Jurusan","Belum Lulus Kuliah"];
let countText = 0;

setInterval(changeText,4000);

function changeText(){
textDinamis.innerHTML = dynamic_text[countText];
countText++;
if(countText === dynamic_text.length){
    countText = 0;
}
}

//LOGIN

const popupLogin = document.querySelector(".popup");


document.querySelector("#login").onclick = () => {
  popupLogin.classList.toggle("active");
};


document.querySelector("#login2").onclick = () => {
  popupLogin.classList.toggle("active");
};

document.querySelector(".popup .close-btn").onclick = () => {
  popupLogin.classList.remove("active");
};