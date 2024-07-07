import { AnyNumber } from "../values/AnyNumber";
import { PositiveOrNeutralNumber } from "../values/PositiveOrNeutralNumber";
import { Multiplicacion } from "./Multiplicacion";
import { Operation } from "./Operation";

class Exponencial implements Operation {
    #value1: AnyNumber;
    #value2: PositiveOrNeutralNumber;

    // Asociación
    constructor(value1: AnyNumber, value2: PositiveOrNeutralNumber) {
        this.#value1 = value1;
        this.#value2 = value2;
    }

    // Composición
    calculate(): number {
        let result: number = this.#value2.getValue() == 0 ? 1 : this.#value1.getValue();
        if (this.#value2.getValue() > 1) {
            result = new Multiplicacion(this.#value1, this.#value1)
                .calculate();
        }
        for (let index = 0; index < this.#value2.getValue() - 1; index++) {
            result += new Multiplicacion(this.#value1, new AnyNumber(result))
                .calculate();
        }
        return result;
    }

    getName(): string {
        return "funcion exponencial";
    }
}