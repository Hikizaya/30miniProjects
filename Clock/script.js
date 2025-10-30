const hourArrow = document.querySelector(".hour");
const minuteArrow = document.querySelector(".minute");
const secondArrow = document.querySelector(".second");

function updateClock() {
  const currentDate = new Date();
  // setTimeout(updateClock, 1000);

  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const hourDeg = (hour / 12) * 360;
  hourArrow.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteArrow.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondArrow.style.transform = `rotate(${secondDeg}deg)`;
}

// updateClock()

setInterval(updateClock, 1000);
