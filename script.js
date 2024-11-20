document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('responsibility-matrix');
    const addColumnBtn = document.getElementById('add-column');
    const addRowBtn = document.getElementById('add-row');
    const colorPicker = document.getElementById('color-picker');
    let currentCell = null;

    // Add new column
    addColumnBtn.addEventListener('click', () => {
        const headerRow = table.querySelector('thead tr');
        const newHeader = document.createElement('th');
        newHeader.contentEditable = "true";
        newHeader.textContent = "New Column";
        headerRow.appendChild(newHeader);

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const newCell = document.createElement('td');
            newCell.contentEditable = "true";
            newCell.textContent = "";
            newCell.classList.add('role');
            row.appendChild(newCell);
        });
    });

    // Add new row
    addRowBtn.addEventListener('click', () => {
        const tbody = table.querySelector('tbody');
        const rowCount = table.querySelector('thead tr').children.length;
        const newRow = document.createElement('tr');

        for (let i = 0; i < rowCount; i++) {
            const newCell = document.createElement('td');
            newCell.contentEditable = "true";
            if (i === 0) {
                newCell.textContent = "New Task";
            } else {
                newCell.textContent = "";
                newCell.classList.add('role');
            }
            newRow.appendChild(newCell);
        }
        tbody.appendChild(newRow);
    });

    // Open color picker and set cell background color
    table.addEventListener('click', (event) => {
        const cell = event.target;

        if (cell.tagName === 'TD' || cell.tagName === 'TH') {
            currentCell = cell;
            colorPicker.click();
        }
    });

    // Apply selected color to the cell
    colorPicker.addEventListener('input', (event) => {
        if (currentCell) {
            currentCell.style.backgroundColor = event.target.value;
        }
    });
});
