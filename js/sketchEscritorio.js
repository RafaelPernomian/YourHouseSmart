let lightOn = false;
let lightaltOn = false;
let airOn = false;
let temperature = 20;
let curtainsOpen = false;
let computerOn = false;
let projetorOn = false;
let tvOn = false;
let status = document.getElementById("status");

function toggleLight() {
  fetch("http://localhost:3000/toggle-light")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      lightOn = !lightOn;
      const lightStatus = document.getElementById("lightStatus");
      const imageOn = "../img/lampadaacesa.png";
      const imageOff = "../img/lampadaapagada.png";
      lightStatus.src = lightOn ? imageOn : imageOff;
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
}

function toggleLightalt() {
  fetch("http://localhost:3000/toggle-lightalt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      lightaltOn = !lightaltOn;
      const lightaltStatus = document.getElementById("lightaltStatus");
      const imageOn = "../img/luzacesa.png";
      const imageOff = "../img/luzapagada.png";
      lightaltStatus.src = lightaltOn ? imageOn : imageOff;
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
}

function toggleAir() {
  airOn = !airOn;
  const airStatus = document.getElementById("airStatus");
  const imageOn = "../img/airon.png";
  const imageOff = "../img/airoff.png";
  airStatus.src = airOn ? imageOn : imageOff;
}

function setTemperature(value) {
  fetch(`http://localhost:3000/set-temperature/${value}`)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      temperature = value;
      const temperatureValue = document.getElementById("temperatureValue");
      temperatureValue.textContent = temperature + "°C";
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
}

function toggleCurtains() {
  fetch("http://localhost:3000/toggle-curtains")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      curtainsOpen = !curtainsOpen;
      const curtainsStatus = document.getElementById("curtainsStatus");
      const imageOn = "../img/cortinaaberta.png";
      const imageOff = "../img/cortinafechada.png";
      curtainsStatus.src = curtainsOpen ? imageOn : imageOff;
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
}

function toggleComputer() {
  fetch("http://localhost:3000/toggle-computer")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      computerOn = !computerOn;
      const computerStatus = document.getElementById("computerStatus");
      const imageOn = "../img/computerOn.png";
      const imageOff = "../img/computerOff.png";
      computerStatus.src = computerOn ? imageOn : imageOff;
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
}

function toggleProjetor() {
  fetch("http://localhost:3000/toggle-projector")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      projetorOn = !projetorOn;
      const projetorStatus = document.getElementById("projetorStatus");
      const imageOn = "../img/projetoron.png";
      const imageOff = "../img/projetoroff.png";
      projetorStatus.src = projetorOn ? imageOn : imageOff;
    })
    .catch((error) => console.error("Erro ao enviar comando:", error));
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
