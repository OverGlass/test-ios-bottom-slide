let posY = [];
const slider = document.querySelector(".slider");

function openSlider() {
  slider.classList.remove("slider--close--really");
  slider.classList.remove("slider--close");
  slider.classList.add("slider--open");
}

function closeSlider() {
  slider.classList.remove("slider--open");
  slider.classList.add("slider--close");
  setTimeout(() => {
    slider.classList.add("slider--close--really");
  }, 500);
}

function getPosY(e) {
  posY.push(e.touches[0].clientY);
  // if values are negative, set to 0
  const pos = posY.reduce((a, b) => {
    return a - b;
  });
  if (posY.length < 3) return;
  if (pos < 0) {
    closeSlider();
    posY = [];
  }
}
