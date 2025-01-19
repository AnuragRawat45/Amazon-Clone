const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-previous");
const next_btn = document.querySelector(".control-next");

let n = 0;
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
function previousSlide() {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
}
function nextSlide() {
  if (n == imgs.length - 1) {
    n = 0;
  } else {
    n++;
  }
  changeSlide();
}
// const scrollContainer = document.querySelectorAll(".products");
// for(const item of scrollContainer)
// {
//     item.addEventListener('wheel',(evt)=>{
//         evt.preventDefault();
//         item.scrollLeft() += evt.deltaY;
//     })
// }

// Pop-up
// function openPopUp(){
//     var countinue = document.querySelector(".pop-up");
//     countinue.style.visibility ="visible";
//     countinue.style.top = "50%";
//     countinue.style.transform ="translate(-50%,-50%) scale(1)";
// }

function openPopUp() {
  // let countinue = document.getElementsByClassName("pop-up");
  let userName = document.querySelector(".userName");
  let userMob = document.querySelector(".userMob");
  let userPass = document.querySelector(".userPass");
  if (userName.value.trim() == "" || userMob.value.trim() == "" || userPass.value.trim() == "") {
    var countinue = document.querySelector(".pop-up-fields");
    countinue.classList.add("open-pop-up-fields");
  }
  else {
    var countinue = document.querySelector(".pop-up");
    countinue.classList.add("open-pop-up");
  }
}


function openPopUpOfSignIn(){
  let userMob = document.querySelector(".userMob");
  if (userMob.value.trim() == "") {
    var countinue = document.querySelector(".pop-up-fields");
    countinue.classList.add("open-pop-up-fields");
  }
  else {
    var countinue = document.querySelector(".pop-up");
    countinue.classList.add("open-pop-up");
  }
}


function closePopUp() {
  var countinue = document.querySelector(".pop-up");
  countinue.classList.remove("open-pop-up");
//Mandatory fields
  var countinue = document.querySelector(".pop-up-fields");
  countinue.classList.remove("open-pop-up-fields");
}
