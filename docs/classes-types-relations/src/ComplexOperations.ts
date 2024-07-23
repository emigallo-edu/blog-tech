import { PositiveNumber } from "./values/PositiveNumber";
import { Multiplicacion } from "./operations/Multiplicacion";
import { Division } from "./operations/Division";
import { AnyNumberNotNeutral } from "./values/AnyNumberNotNeutral";

export class ComplexOperations {
    calcularAreaTrianguloRectangulo(base: PositiveNumber, altura: PositiveNumber) {
        let area: number = this.calcularAreaRectangulo(base, altura);
        new Division(new AnyNumberNotNeutral(area), new AnyNumberNotNeutral(2));
    }

    calcularAreaRectangulo(lado1: PositiveNumber, lado2: PositiveNumber): number {
        return new Multiplicacion(lado1, lado2)
            .calculate();
    }

    calcularAreaTriangulo() {
        // Ver como calcular un triangulo no rectangulo
        // Hacer una version con 
    }
}