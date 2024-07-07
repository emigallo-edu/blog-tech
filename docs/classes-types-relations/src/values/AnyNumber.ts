export class AnyNumber {
    #value: number;

    constructor(value: number) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }
}