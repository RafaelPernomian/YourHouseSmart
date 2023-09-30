let lightOn = true;
let lightaltOn = true;
let airOn = true;
let temperature = 20;
let curtainsOpen = true;
let computerOn = true;
let projetorOn = true;
let tvOn = true;
let showerOn = true;
let status = document.getElementById("status");

function toggleLight() {
  lightOn = !lightOn;
  const lightStatus = document.getElementById("lightStatus");
  const imageOn = "../img/lampadaacesa.png";
  const imageOff = "../img/lampadaapagada.png";
  lightStatus.src = lightOn ? imageOff : imageOn;
}

function toggleShower() {
  showerOn = !showerOn;
  const showerStatus = document.getElementById("showerStatus");
  const imageOn = "../img/showeron.png";
  const imageOff = "../img/showeroff.png";
  showerStatus.src = showerOn ? imageOff : imageOn;
}

function setTemperature(value) {
  temperature = value;
  const temperatureValue = document.getElementById("temperatureValue");
  temperatureValue.textContent = temperature + "°C";
}

document.addEventListener("DOMContentLoaded", function () {
  const lightButton = document.getElementById("lightButton");
  lightButton.addEventListener("click", toggleLight);

  const showerButton = document.getElementById("showerButton");
  showerButton.addEventListener("click", toggleShower);

  const temperatureRange = document.getElementById("temperatureRange");
  temperatureRange.addEventListener("input", function () {
    setTemperature(temperatureRange.value);
  });
});
