import { AnyNumber } from "../values/AnyNumber";
import { AnyNumberNotNeutral } from "../values/AnyNumberNotNeutral";
import { Operation } from "./Operation";

export class Division implements Operation {
    #value1: AnyNumber;
    #value2: AnyNumberNotNeutral;

    // Asociación
    constructor(value1: AnyNumber, value2: AnyNumberNotNeutral) {
        this.#value1 = value1;
        this.#value2 = value2;
    }

    calculate(): number {
        return this.#value1.getValue() / this.#value2.getValue();
    }

    getName(): string {
        return "división";
    }
}