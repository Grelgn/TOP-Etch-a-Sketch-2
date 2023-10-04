const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute("class", "row");

    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.setAttribute("class", "square");
    
        row.appendChild(square);
    }

    container.appendChild(row);
}