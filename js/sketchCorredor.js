let lightOn = true;
let lightaltOn = true;
let airOn = true;
let temperature = 20;
let curtainsOpen = true;
let computerOn = true;
let projetorOn = true;
let tvOn = true;
let status = document.getElementById("status");

function toggleLight() {
  lightOn = !lightOn;
  const lightStatus = document.getElementById("lightStatus");
  const imageOn = "../img/lampadaacesa.png";
  const imageOff = "../img/lampadaapagada.png";
  lightStatus.src = lightOn ? imageOff : imageOn;
}

document.addEventListener("DOMContentLoaded", function () {
  const lightButton = document.getElementById("lightButton");
  lightButton.addEventListener("click", toggleLight);
});
