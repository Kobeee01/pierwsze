function updateTime() {
  setTimeout(updateTime, 1000);

  let tim = document.querySelector("#zegar");
  let t = new Date();
  let time = t.toLocaleTimeString();

  tim.innerHTML = time;
}

updateTime();
