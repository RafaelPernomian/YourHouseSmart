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

function toggleLightalt() {
  lightaltOn = !lightaltOn;
  const lightaltStatus = document.getElementById("lightaltStatus");
  const imageOn = "../img/luzacesa.png";
  const imageOff = "../img/luzapagada.png";
  lightaltStatus.src = lightaltOn ? imageOff : imageOn;
}

function toggleAir() {
  airOn = !airOn;
  const airStatus = document.getElementById("airStatus");
  const imageOn = "../img/airon.png";
  const imageOff = "../img/airoff.png";
  airStatus.src = airOn ? imageOff : imageOn;
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

function toggleComputer() {
  computerOn = !computerOn;
  const computerStatus = document.getElementById("computerStatus");
  const imageOn = "../img/computerOn.png";
  const imageOff = "../img/computerOff.png";
  computerStatus.src = computerOn ? imageOff : imageOn;
}

function toggleProjetor() {
  projetorOn = !projetorOn;
  const projetorStatus = document.getElementById("projetorStatus");
  const imageOn = "../img/projetoron.png";
  const imageOff = "../img/projetoroff.png";
  projetorStatus.src = projetorOn ? imageOff : imageOn;
}

function toggleTV() {
  tvOn = !tvOn;
  const tvStatus = document.getElementById("tvStatus");
  const imageOn = "../img/tvon.png";
  const imageOff = "../img/tvoff.png";
  tvStatus.src = tvOn ? imageOff : imageOn;
}

document.addEventListener("DOMContentLoaded", function () {
  const lightButton = document.getElementById("lightButton");
  lightButton.addEventListener("click", toggleLight);

  const lightaltButton = document.getElementById("lightaltButton");
  lightaltButton.addEventListener("click", toggleLightalt);

  const airButton = document.getElementById("airButton");
  airButton.addEventListener("click", toggleAir);

  const temperatureRange = document.getElementById("temperatureRange");
  temperatureRange.addEventListener("input", function () {
    setTemperature(temperatureRange.value);
  });

  const curtainsButton = document.getElementById("curtainsButton");
  curtainsButton.addEventListener("click", toggleCurtains);

  const computerButton = document.getElementById("computerButton");
  computerButton.addEventListener("click", toggleComputer);

  const projetorButton = document.getElementById("projetorButton");
  projetorButton.addEventListener("click", toggleProjetor);
});
