function solicitarNombre() {
    let nombre = prompt("Ingresa tu nombre");
    while (nombre === "") {
        nombre = prompt("Ingresa tu nombre");
    }
    console.log(nombre);
    alert("Hola " + nombre);
    return nombre;
}



function solicitarEdad() {
    let edad = prompt("Ingresa tu edad");

    while (isNaN(edad) || edad < 18) {
        alert("Acceso denegado");
        edad = prompt("Ingresa tu edad");
    }

    alert("Acceso permitido");

}

function solicitarNumero(mensaje) {
    let numero = prompt (mensaje);
    while (isNaN(numero) || numero <= 0){
    alert ("Ingrese un número válido.");
    numero = prompt (mensaje);}
    return numero;
}

function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses) {
    const capitalTotal = montoPrestamo * tasaInteresAnual
    const pagoMensual = (capitalTotal / plazoEnMeses);
    return pagoMensual;
}

let nombre = solicitarNombre();
let edad = solicitarEdad();

let montoPrestamo = solicitarNumero("Ingrese el monto del préstamo:");
let plazoEnMeses = solicitarNumero("Ingrese el plazo del préstamo en meses:");

const tasaInteresAnual = 180 / 100;


if (montoPrestamo <= 0 || tasaInteresAnual <= 0 || plazoEnMeses <= 0) {
    alert("Por favor, ingrese valores válidos.");
} else {

    const pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses);
    console.log(`El pago mensual será de $${pagoMensual.toFixed(2)}. ` + plazoEnMeses + " cuotas.");
    alert(`El pago mensual será de $${pagoMensual.toFixed(2)}. ` + plazoEnMeses + " cuotas.");
}

const masConsultas = ["1. Solicitar Préstamo ", "2. Contactarme para más info ", "3. Consultar Tasa de Interés ", "4. Otras Consultas "];
let opcionSeleccionada = prompt("Seleccione una opción:\n" + masConsultas.join("\n"));
while (opcionSeleccionada !== "1" && opcionSeleccionada !== "2" && opcionSeleccionada !== "3" && opcionSeleccionada !== "4") {
    opcionSeleccionada = prompt("Opción mo válida. Seleccione una opción válida:\n" + masConsultas.join("\n"));
}

console.log("Opción seleccionada: " + masConsultas[opcionSeleccionada - 1]);
alert("Ha seleccionado: " + masConsultas[opcionSeleccionada - 1]);

