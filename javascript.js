const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute("class", "row");

    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.setAttribute("class", "square");
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });

        row.appendChild(square);
    }

    container.appendChild(row);
}

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    let gridSize = 101
    while (gridSize > 100 || gridSize < 2) {
        gridSize = prompt("Enter the number of squares per side for the grid:");
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.setAttribute("class", "row");
    
        for (j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.setAttribute("class", "square");
            square.addEventListener('mouseenter', () => {
                square.classList.add('hover');
            });
    
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
})