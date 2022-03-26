let isFirstClick = true;
document.getElementById("burger").addEventListener("click", function() {
  if (!isFirstClick) {
    this.classList.toggle("burger-closed");
  } else isFirstClick = false;
  this.classList.toggle("burger-open");
})