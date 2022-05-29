// burger
let isFirstClick = true;
document.getElementById("burger").addEventListener("click", function() {
  document.getElementsByTagName("body").item(0).classList.toggle("body--fixed");
  if (!isFirstClick) {
    this.classList.toggle("burger-closed");
  } else isFirstClick = false;
  this.classList.toggle("burger-open");
  if (document.getElementById("header__menu").classList.contains("header__menu--mobile")) {
    document.getElementById("header__menu").classList.add("header__menu--removing")
    setTimeout(() => {
      document.getElementById("header__menu").classList.remove("header__menu--removing")
      document.getElementById("header__menu").classList.toggle("header__menu--mobile");
    }, 200);
  } else document.getElementById("header__menu").classList.toggle("header__menu--mobile");
})


const accButtons = [...document.getElementsByClassName("accordeon__button")];

accButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    console.log(this.dataset.for);
    if (!document.getElementById(this.dataset.for).classList.contains("accordeon__body--opened")) {
      document.getElementById(this.dataset.for).style.height = `${document.getElementById(this.dataset.for).children[0].offsetHeight + 20}px`;
    } else {
      document.getElementById(this.dataset.for).style.height = `0px`;
    }
    document.getElementById(this.dataset.for).classList.toggle("accordeon__body--opened");
  })
})


const message = {
  name: "AlexZhaba",
  message: "Prod by me with love <3"
}

document.getElementById("toast__title").innerText = message.name;
document.getElementById("toast__body").innerText = message.message;

setTimeout(() => {
  document.getElementById("toast").classList.add("toast--show");
  document.getElementById("toast__close").addEventListener("click", function() {
    document.getElementById("toast").classList.remove("toast--show");
  })
}, 2000);