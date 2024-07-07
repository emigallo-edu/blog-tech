import { AnyNumber } from "../values/AnyNumber";
import { Operation } from "./Operation";

export class Add implements Operation {
    #value1: AnyNumber;
    #value2: AnyNumber;

    // Asociación
    constructor(value1: AnyNumber, value2: AnyNumber) {
        this.#value1 = value1;
        this.#value2 = value2;
    }

    calculate(): Number {
        return this.#value1.getValue() + this.#value2.getValue();
    }

    getName(): string {
        return "suma";
    }
}