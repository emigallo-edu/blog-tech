import { AnyNumber } from "./AnyNumber";

export class PositiveNumber extends AnyNumber {
    private value: number;

    constructor(value: number) {
        super(value);
        if (value <= 0) {
            throw new Error("El número no puede ser menor o igual a 0");
        }
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }
}