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
}
