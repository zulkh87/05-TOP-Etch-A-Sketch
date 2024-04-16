// console.log("Etch a sketch");

const GRID = 721;
let squaresPerSide= 19;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} times ${slider.value} (Resolution)`;

sketchArea.style.width = sketchArea.style.height = sliderContainer.style.width = `${GRID}px`;

function changeBackgroundColor(){
    this.style.backgroundColor = "#daa520";
}

function createGridCells(squaresPerSide) {
    const numberOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRID / squaresPerSide) - 2}px`

    for (let i = 0;i < numberOfSquares; i++){
        const singleGridCell = document.createElement("div");

        singleGridCell.style.width = singleGridCell.style.height = widthOrHeight;

        singleGridCell.classList.add("cell");

        sketchArea.appendChild(singleGridCell);
        
        singleGridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

function cleanGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function() {
    let txt = `${this.value} times ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    cleanGridCells();
    createGridCells(this.value);
}

createGridCells(19);