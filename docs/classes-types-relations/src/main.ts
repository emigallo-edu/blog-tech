import { AnyNumber } from "./values/AnyNumber";
import { AnyNumberNotNeutral } from "./values/AnyNumberNotNeutral";
import { PositiveNumber } from "./values/PositiveNumber";
import { PositiveOrNeutralNumber } from "./values/PositiveOrNeutralNumber";
import { Calculator } from "./Calculator";
import { Operation } from "./operations/Operation";
import { Add } from "./operations/Add";

class Main {
    private four: PositiveNumber = new PositiveNumber(4);
    private minusFive: AnyNumber = new AnyNumber(-5);
    private minusNineteen: AnyNumberNotNeutral = new AnyNumberNotNeutral(-19);
    private zero: PositiveOrNeutralNumber = new PositiveOrNeutralNumber(0);
    private calculator: Calculator = new Calculator();

    constructor() {
        let operations: Operation[] = [new Add(this.four, this.minusFive)];
        this.calculator.showOperations(operations);
    }
}