const nodeList = document.querySelectorAll(".carousel section");
const carousel = document.querySelector(".carousel");
const nxtBtn = document.getElementById("next");
const windowCarrier = document.querySelector(".window");

const arr = [];
nodeList.forEach((el) => {
  arr.push(el.outerHTML);
});

function forward() {
  const floatEl = arr.shift();
  arr.push(floatEl);
  carousel.innerHTML = ``;
  arr.forEach((sc) => (carousel.innerHTML += sc));
  const placehold = document.createElement("section");
  placehold.innerHTML = arr[2];
  windowCarrier.prepend(placehold);
  setTimeout(() => {
    placehold.remove();
  }, 500);
}

nxtBtn.addEventListener("click", forward);
