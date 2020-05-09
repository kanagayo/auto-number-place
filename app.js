const NUMBER_OF_FIELD = 9;
const MAX_NUMBER = 9;

let field = new FIELD();

function getFieldWithData(datas) {
    let field = new FIELD();
    if(datas.length !== NUMBER_OF_FIELD) {
        return field;
    } else {
        for(let i = 0; i < NUMBER_OF_FIELD; i++) {
            if(datas[i].length !== NUMBER_OF_FIELD) {
                return field;
            }
        }
        for(let i = 0; i < NUMBER_OF_FIELD; i++) {
            for(let j = 0; j < NUMBER_OF_FIELD; j++) {
                if(datas[i][j] === "") {
                    continue;
                } else {
                    field.getValue()[i][j].setValue(Number(datas[i][j]));
                }
            }   
        }    
    }
    return field;
}