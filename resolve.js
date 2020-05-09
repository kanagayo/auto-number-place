function resolveNumberPlace() {
    let beforeWhileRemainingNumber = 81;
    for(let count = 0; count < 1000; count++) {
        console.log(count);
        let remainingNumber = field.getRemainingNumber();
        if(remainingNumber === 0 || beforeWhileRemainingNumber === remainingNumber) {
            break;
        }
        for(let num = 1; num <= NUMBER_OF_FIELD; num++) {
            for(let i = 0; i < NUMBER_OF_FIELD; i++) {
                for(let j = 0; j < NUMBER_OF_FIELD; j++) {
                    if(field.getValue()[i][j].getIsUnique()) {
                        continue;
                    } else {
                        if(field.isNumInCol(num, i)) {
                            field.getValue()[i][j].setIsNotNum(num);
                        } else if(field.isNumInRow(num, j)) {
                            field.getValue()[i][j].setIsNotNum(num);
                        } else if(field.isNumInMass(num, i, j)) {
                            field.getValue()[i][j].setIsNotNum(num);
                        } else if(field.isUniqueInMass(num, i, j)) {
                            field.getValue()[i][j].setValue(num);
                        }
                    }
                    field.getValue()[i][j].confirmUnique();
                }
            }
        }
    }
    console.log(field);
    drawField(field.getValue());
    drawPossibleField(field.getValue());
}