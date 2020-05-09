class Cell {
    #value;
    #isUnique;
    #isNum;

    constructor() {
        this.#value = 0;
        this.#isUnique = false;
        this.#isNum = [true, true, true, true, true, true, true, true, true];
    }

    confirmUnique() {
        if(this.#isUnique) {
            return this.#isUnique;
        } else {
            let count = 0;
            let number = 0;
            for(let i = 0; i < this.#isNum.length; i++) {
                if(this.#isNum[i]) {
                    count++;
                    number = i + 1;
                }
            }
            if(count === 1) {
                this.#value = number;
                this.#isUnique = true;
            }
            return this.#isUnique;
        }
    }

    getValue() {
        return this.#value;
    }

    setValue(data) {
        if(this.#isUnique) {
            return;
        } else {
            const num = Number(data);
            if(num <= 0 && MAX_NUMBER < num) {
                return;
            } else {
                this.#value = num;
                this.#isUnique = true;
                for(let i = 0; i < this.#isNum.length; i++) {
                    if(this.#value === i + 1) {
                        continue;
                    } else {
                        this.#isNum[i] = false;
                    }
                }
            }
        }
    }

    getIsUnique() {
        return this.#isUnique;
    }

    getIsNum(num) {
        return this.#isNum[num - 1];
    }

    setIsNotNum(num) {
        this.#isNum[num - 1] = false;
    }
}

class FIELD {
    #field = new Array(NUMBER_OF_FIELD);

    constructor() {
        for(let i = 0; i < NUMBER_OF_FIELD; i++) {
            this.#field[i] = new Array(NUMBER_OF_FIELD);
            for(let j = 0; j < NUMBER_OF_FIELD; j++) {
                this.#field[i][j] = new Cell();
            }
        }        
    }

    getValue() {
        return this.#field;
    }

    getRemainingNumber() {
        let count = 0;
        for(let i = 0; i < NUMBER_OF_FIELD; i++) {
            for(let j = 0; j < NUMBER_OF_FIELD; j++) {
                if(this.#field[i][j].getIsUnique()) {
                    continue;
                } else {
                    count++;
                }
            }
        }
        return count;
    }

    isNumInCol(num, col) {
        let isNum = false;
        for(let j = 0; j < NUMBER_OF_FIELD; j++) {
            if(this.#field[col][j].getValue() === num) {
                isNum = true;
            }
        }
        return isNum;
    }

    isNumInRow(num, row) {
        let isNum = false;
        for(let i = 0; i < NUMBER_OF_FIELD; i++) {
            if(this.#field[i][row].getValue() === num) {
                isNum = true;
            }
        }
        return isNum;
    }

    isNumInMass(num, i, j) {
        let isNum = false;
        let colSet = this.getMassRange(i);
        let rowSet = this.getMassRange(j);

        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                if(this.#field[colSet[x]][rowSet[y]].getValue() === num) {
                    isNum = true;
                }
            }
        }        
        return isNum;
    }

    isUniqueInMass(num, i, j) {
        let isNumCount = 0;
        let colSet = this.getMassRange(i);
        let rowSet = this.getMassRange(j);

        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                if(this.#field[colSet[x]][rowSet[y]].getIsNum(num)) {
                    isNumCount++;
                }
            }
        }
        return (isNumCount === 1);
    }

    getMassRange(point) {
        let range = new Array(3);
        if(0 <= point && point <= 2) {
            range = [0, 1, 2];
        } else if(3 <= point && point <=5) {
            range = [3, 4, 5];
        } else {
            range = [6, 7, 8];
        }
        return range;
    }
}
