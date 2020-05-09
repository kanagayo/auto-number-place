let fileInput = document.getElementById('file');
let fileReader = new FileReader();
fileInput.onchange = () => {
    let file = fileInput.files[0];
    fileReader.readAsText(file);
};

fileReader.onload = function() {
    let rows = fileReader.result.split("\n");
    while(true) {
        if(rows.length !== NUMBER_OF_FIELD) {
            rows[rows.length] = ",,,,,,,,";
        } else {
            break;
        }
    }
    let cells = new Array(rows.length);
    for(let i = 0; i < rows.length; i++) {
        cells[i] = rows[i].split(",");
        while(true) {
            if(cells[i].length !== NUMBER_OF_FIELD) {
                cells[i][cells[i].length] = "";
            } else {
                break;
            }
        }
    }

    for(let i = 0; i < NUMBER_OF_FIELD; i++) {
        for(let j = 0; j < NUMBER_OF_FIELD; j++) {
            if(0 < cells[i][j] && cells[i][j] < 10) {
                continue;
            } else {
                cells[i][j] = "";
            }
        }
    }

    field = getFieldWithData(cells);
    drawField(field.getValue());
}
