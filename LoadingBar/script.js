const counter = document.querySelector(".counter");
const frontBar = document.querySelector(".loading-bar-front");

let idx = 20;

updateNum();

function updateNum() {
  counter.innerText = idx + "%";
  frontBar.style.width = idx + "%";
  idx++;
  if (idx <= 100) {
    setTimeout(updateNum, 20);
  }
}
