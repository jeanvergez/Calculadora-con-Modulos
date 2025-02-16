import { sumar, restar, multiplicar, dividir } from './operaciones.js';

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Elige una operación:\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "5. Salir"
        );

        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            let resultado;

            switch (opcion) {
                case '1':
                    resultado = sumar(num1, num2);
                    break;
                case '2':
                    resultado = restar(num1, num2);
                    break;
                case '3':
                    resultado = multiplicar(num1, num2);
                    break;
                case '4':
                    resultado = dividir(num1, num2);
                    break;
            }

            alert("El resultado es: " + resultado);
        } else if (opcion != 5) {
            alert("Opción no válida. Inténtalo de nuevo.");
        }
    } while (opcion != 5);

    alert("Gracias por usar la calculadora.");
}

mostrarMenu();
