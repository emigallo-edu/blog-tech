import { AnyNumber } from "../values/AnyNumber";
import { PositiveNumber } from "../values/PositiveNumber";
import { Operation } from "./Operation";
import { Multiplicacion } from "./Multiplicacion";

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 0! = 1
// 1! = 1
export class Factorial implements Operation {
    private value: PositiveNumber;

    constructor(value: PositiveNumber) {
        this.value = value;
    }

    calculate(): Number {
        let result = 1;
        for (let index = 1; index <= this.value.getValue(); index++) {
            result += new Multiplicacion(this.value, new AnyNumber(result))
                .calculate();
        }
        return result;
    }

    getName(): string {
        throw new Error("Funcion factorial.");
    }
}