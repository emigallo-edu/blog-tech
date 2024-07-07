import { Operation } from "./operations/Operation";

export class Calculator {
    // Uso
    showOperations(operations: Operation[]) {
        let html: string = "<div>";
        operations.forEach(operation => {
            html+=`<li>${operation.getName()} : ${operation.calculate()}</li>`
            operation.calculate();
        });
        html += "</div>"
    }
}