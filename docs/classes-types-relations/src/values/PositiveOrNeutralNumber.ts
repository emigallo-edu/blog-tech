import { AnyNumber } from "./AnyNumber";

export class PositiveOrNeutralNumber extends AnyNumber{
    #value: number;

    constructor(value: number) {
        super(value);
        if (value < 0) {
            throw new Error("El número no puede ser menor a 0");
        }
        this.#value = value;
    }

    getValue(){
        return this.#value;
    }
}