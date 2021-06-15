// JavaScript
function cambiaClase() {
  document.querySelector("body").classList.toggle("ModalActive");
}

document
  .querySelector(".headerNavIcon")
  .addEventListener("click", cambiaClase);

document
  .querySelector(".ModalCloseIcon")
  .addEventListener("click", cambiaClase);
