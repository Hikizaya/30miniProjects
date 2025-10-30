const counters = document.querySelectorAll(".counter");

counters.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;

    if (currentNum < dataCeil) {
      currentNum = Math.ceil(currentNum + increment);
      counterEl.innerText = currentNum;

      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
