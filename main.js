const clockEl = document.querySelector(".clock");
const buttons = document.querySelectorAll(".format button");
setInterval(generateTime, 1000);

function generateTime() {
  const format = clockEl.getAttribute("data-format");
  const date = new Date();
  let hour = date.getHours();
  let timeStatus = "";
  const min = date.getMinutes();
  const sec = date.getSeconds();

  if (format === "12") {
    timeStatus = hour >= 12 ? "PM" : "AM";
    hour = hour > 12 ? hour % 12 : hour;
    hour = hour === 0 ? 12 : hour; 
  }

 
  clockEl.innerHTML = `<h1>${hour} : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec} ${timeStatus}</h1>`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const format = button.getAttribute("data-format");
    clockEl.setAttribute("data-format", format);
    generateTime();
  });
});
