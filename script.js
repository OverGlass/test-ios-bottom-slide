let posY = [];
let lastScrollTop = 0;
const slider = document.querySelector(".slider");
const input = document.querySelector(".slider__input");

function openSlider() {
  slider.classList.remove("slider--close--really");
  slider.classList.remove("slider--close");
  slider.classList.add("slider--open");
  lastScrollTop = window.scrollY;
  // iosFocus(input, 300);
}

function closeSlider() {
  slider.classList.remove("slider--open");
  slider.classList.add("slider--close");
  window.scrollTo(0, lastScrollTop, "smooth");
  setTimeout(() => {
    slider.classList.add("slider--close--really");
  }, 500);
}

function iosFocus(targetInput, delay = 0) {
  // create invisible dummy input to receive the focus first
  const fakeInput = document.createElement("input");
  fakeInput.setAttribute("type", "text");
  fakeInput.style.position = "absolute";
  fakeInput.style.opacity = 0;
  fakeInput.style.height = 0;
  fakeInput.style.fontSize = "16px"; // disable auto zoom

  // you may need to append to another element depending on the browser's auto
  // zoom/scroll behavior
  document.body.prepend(fakeInput);

  // focus so that subsequent async focus will work
  fakeInput.focus();

  setTimeout(() => {
    // now we can focus on the target input
    targetInput.focus();

    // cleanup
    fakeInput.remove();
  }, delay);
}
