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

function drawPossibleField(field) {
    for(let i = 0; i < NUMBER_OF_FIELD; i++) {
        for(let j = 0; j < NUMBER_OF_FIELD; j++) {
            if(field[i][j].getIsUnique()) {
                continue;
            } else {
                let newTable = document.createElement("table");
                newTable.setAttribute("class", "miniTable");
                let tdId = String(i) + String(j);
                let cell = document.getElementById(tdId);
                for(let x = 0; x < 3; x++) {
                    let newTr = document.createElement("tr");
                    for(let y = 0; y < 3; y++) {
                        let newTd = document.createElement("td");
                        if(field[i][j].getIsNum((x * 3) + y)) {
                            newTd.innerText = (x * 3) + y;
                        }
                        newTd.setAttribute("class", "miniCell");
                        newTr.appendChild(newTd);
                    }
                    newTable.appendChild(newTr);
                }
                cell.appendChild(newTable);
                
            }
        }
    }
}