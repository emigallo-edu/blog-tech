import { AnyNumber } from "../values/AnyNumber";
import { Add } from "./Add";
import { Operation } from "./Operation";

export class AddOnePlusFive implements Operation {
    private add: Add;
    constructor() {
        this.add = new Add(new AnyNumber(1), new AnyNumber(5));
    }

    calculate(): Number {
        return this.add.calculate();
    }

    getName(): string {
        return "suma 1 y 5"
    }
}

export class AddFourPlusNine implements Operation {
    #add: Add;
    constructor() {
        this.#add = new Add(new AnyNumber(4), new AnyNumber(9));
    }

    calculate(): Number {
        return this.#add.calculate();
    }

    getName(): string {
        return "suma 4 y 9"
    }
}