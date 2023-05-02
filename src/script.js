// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".hamburger-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// CLICK DI LUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Dynamic Text

let textDinamis = document.querySelector(".dynamic-text > p");

let dynamic_text = [
  "Pindah Jalur Karir",
  "Kurang Pengalaman",
  "Pindah Jurusan",
  "Belum Lulus Kuliah",
];
let countText = 0;

setInterval(changeText, 4000);

function changeText() {
  textDinamis.innerHTML = dynamic_text[countText];
  countText++;
  if (countText === dynamic_text.length) {
    countText = 0;
  }
}

//LOGIN

const popupLogin = document.querySelector(".popup");

document.querySelector("#login").onclick = () => {
  popupLogin.classList.toggle("active");
};

//versi mobile
document.querySelector("#login2").onclick = () => {
  popupLogin.classList.toggle("active");
};

document.querySelector(".popup .close-btn").onclick = () => {
  popupLogin.classList.remove("active");
};

//LOGIN SCHEME

const passwordFix = "harijumat123";
const signButton = document.querySelector("#signin");
const successAlert = document.querySelector("#center");

signButton.onclick = () => {
  let password = document.getElementById("password1").value;
  let email = document.getElementById("email1").value;
  signInChoices(password, email);
};

//fungsi nentuin password email benar salah
function signInChoices(pw, id) {

  if (id !== " " && pw === passwordFix) {
    siginInSuccess(id);
  } else {
    signInFail();
  }
}

//email password benar
function siginInSuccess(userName) {
  popupLogin.classList.remove("active");
  successAlert.classList.toggle("active");
  setTimeout(() => {
    successAlert.classList.remove("active");
  }, 3500);
  document.querySelector("#login").innerHTML = cutString(userName);
  document.querySelector("#login2").innerHTML = cutString(userName);
}


//email password salah
function signInFail() {
  alert("Login Gagal!!");
}

// motong name jadi 5 huruf
function cutString(namaPanjang) {
  let panjang = 5;
  return namaPanjang.substring(0, panjang);
}
