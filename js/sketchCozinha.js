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

function setTemperature(value) {
  temperature = value;
  const temperatureValue = document.getElementById("temperatureValue");
  temperatureValue.textContent = temperature + "°C";
}

function toggleCurtains() {
  curtainsOpen = !curtainsOpen;
  const curtainsStatus = document.getElementById("curtainsStatus");
  const imageOn = "../img/cortinaaberta.png";
  const imageOff = "../img/cortinafechada.png";
  curtainsStatus.src = curtainsOpen ? imageOff : imageOn;
}

document.addEventListener("DOMContentLoaded", function () {
  const lightButton = document.getElementById("lightButton");
  lightButton.addEventListener("click", toggleLight);

  const temperatureRange = document.getElementById("temperatureRange");
  temperatureRange.addEventListener("input", function () {
    setTemperature(temperatureRange.value);
  });

  const curtainsButton = document.getElementById("curtainsButton");
  curtainsButton.addEventListener("click", toggleCurtains);
});
