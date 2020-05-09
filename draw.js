let newTable = document.createElement("table");
newTable.innerHTML += "<colgroup><col><col><col>";
newTable.innerHTML += "<colgroup><col><col><col>";
newTable.innerHTML += "<colgroup><col><col><col>";

for(let i = 0; i < NUMBER_OF_FIELD; i++) {
    if(i % 3 === 0) {
        newTable.innerHTML += "<tbody>"
    }
    let newTr = document.createElement("tr");
    for(let j = 0; j < NUMBER_OF_FIELD; j++) {
        let newTd = document.createElement("td");
        let tdId = String(i) + String(j);
        newTd.setAttribute("id", tdId);
        newTr.appendChild(newTd);
    }
    newTable.appendChild(newTr);
}

document.body.appendChild(newTable);

function drawField(field) {
    for(let i = 0; i < NUMBER_OF_FIELD; i++) {
        for(let j = 0; j < NUMBER_OF_FIELD; j++) {
            if(field[i][j].getValue() === 0) {
                continue;
            } else {
                let tdId = String(i) + String(j);
                let cell = document.getElementById(tdId);
                cell.innerText = field[i][j].getValue();    
            }
        }
    }
}