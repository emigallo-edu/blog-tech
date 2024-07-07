import { AnyNumber } from "./values/AnyNumber";
import { AnyNumberNotNeutral } from "./values/AnyNumberNotNeutral";
import { PositiveNumber } from "./values/PositiveNumber";
import { PositiveOrNeutralNumber } from "./values/PositiveOrNeutralNumber";
import { Calculator } from "./Calculator";

class Main {
    four: PositiveNumber = new PositiveNumber(4);
    minusFive: AnyNumber = new AnyNumber(-5);
    minusNineteen: AnyNumberNotNeutral = new AnyNumberNotNeutral(-19);
    zero: PositiveOrNeutralNumber = new PositiveOrNeutralNumber(0);

    calculator: Calculator;
}