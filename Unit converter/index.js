let figureEl = document.getElementById("figure")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let mainFig = document.getElementById("main-fig")
let numFig = document.getElementById("num-fig")
let feet = document.getElementById("feet")
let meters = document.getElementById("meters")
let gallons = document.getElementById("gallons")
let liters = document.getElementById("liters")
let pounds = document.getElementById("pounds")
let kilos = document.getElementById("kilos")
let resetEl = document.getElementById("reset-btn")
numFig.textContent = figureEl.textContent
// numFig.textContent = mainFig.textContent

function UnitConverter(valNum) {
    // numFig.textContent = mainFig.textContent
    // numFig.textContent = mainFig.textContent
    feet.textContent = valNum * 3.28084
    meters.textContent = valNum / 3.280841
    gallons.textContent = valNum / 0.26417205
    liters.textContent = valNum * 0.26417205
    pounds.textContent = valNum * 2.205
    kilos.textContent = valNum / 2.205
}

// function reset() {
//     numFig.textContent = 0
// }
