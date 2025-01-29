let GRID_SIZE = 16;

function generateGrid() {
    const fragment = document.createDocumentFragment();
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";

    for (let row = 0; row < GRID_SIZE; row++) {
        const gridRow = document.createElement("div")
        gridRow.className = "grid";
        gridContainer.appendChild(gridRow);

        for (let col = 0; col < GRID_SIZE; col++) {
            const cell = document.createElement("div");
            cell.className = "cell"

            fragment.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                changeColorOnMouseOver(cell);
            })
        }
        gridRow.appendChild(fragment);
    }
}
generateGrid()

function changeColorOnMouseOver(cell) {
    cell.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    setTimeout(() => {
        cell.style.backgroundColor = "blue";
    }, 1000)
}

function changeGridSize() {
    GRID_SIZE = prompt("Enter value");
    if(!isInt(GRID_SIZE)) {
        GRID_SIZE = 16;
        alert("Not a number");
    }
    generateGrid();
}

function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }