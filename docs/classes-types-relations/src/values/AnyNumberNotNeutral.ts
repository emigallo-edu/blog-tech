import { AnyNumber } from "./AnyNumber";

export class AnyNumberNotNeutral extends AnyNumber {
    private value: number;

    constructor(value: number) {
        super(value);
        if (value == 0) {
            throw new Error("El número no puede ser 0");
        }
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}