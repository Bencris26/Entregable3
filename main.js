const realizarOperacion = (num1, num2, operacion) => {
    if (operacion == "Suma") {
        return (num1 + num2);
    } 
    else if (operacion == "Resta") {
        return (num1 - num2);
    }
    else if (operacion == "Multiplicacion") {
        return (num1 * num2);
    }
    else if (operacion == "Division") {
        if (num2 == 0) {
            return "No es posible realizar una division por cero"
        }

        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida"
    }
}

let num1, num2, operacion;
let pregunta;

while(operacion != "salir") {
    num1 = prompt("\nIngrese el primer numero \n");
    num2 = prompt("Ingrese el segundo numero \n");
    
    operacion = prompt("Ingrese la operacion (Suma, Resta, Multiplicacion, Division): \n");

    console.log("El resultado es: ")
    console.log(realizarOperacion(+num1, +num2, operacion))

    pregunta = prompt("\n\nDesea realizar otra operacion? \n")

    if (pregunta == "si") {
        continue
    } else {
        console.log("Gracias por usar la calculadora! Adios!!\n")
        break
    }
}
