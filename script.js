const numberOfGridCells = 16;

function generateGrid() {
    const fragment = document.createDocumentFragment();
    const gridContainer = document.querySelector(".grid-container");

    for (let i = 0; i < numberOfGridCells; i++) {
        const gridRow = document.createElement("div")
        gridRow.className = "grid";
        gridContainer.appendChild(gridRow);

        for (let i = 0; i < numberOfGridCells; i++) {
            const cell = document.createElement("div");
            cell.style.width = "50px";
            cell.style.height = "50px";
            cell.style.backgroundColor = "blue";
            cell.style.flex = "1";
            cell.style.margin = "2px";
            fragment.appendChild(cell);
        }
        gridRow.appendChild(fragment);
    }
}
generateGrid()