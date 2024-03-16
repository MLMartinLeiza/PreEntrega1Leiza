let nombre = prompt("Ingresa tu nombre");
while (nombre === "") {
    nombre = prompt("Ingresa tu nombre")
}
console.log(nombre);
alert("Hola " + nombre);

let edad = prompt("Ingresa tu edad");

while (edad < 18) {
    alert("Acceso denegado");
    edad = prompt("Ingresa tu edad");
}

alert("Acceso permitido");


function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses) {
    const capitalTotal = montoPrestamo * tasaInteresAnual
    const pagoMensual = (capitalTotal / plazoEnMeses);
    return pagoMensual;
}

const tasaInteresAnual = 180 / 100;

let montoPrestamo = prompt("Ingrese el monto del préstamo:");

let plazoEnMeses = prompt("Ingrese el plazo del préstamo en meses:");

if (montoPrestamo <= 0 || tasaInteresAnual <= 0 || plazoEnMeses <= 0) {
    alert("Por favor, ingrese valores válidos.");
} else {

    const pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses);
    console.log(`El pago mensual será de $${pagoMensual}. ` + plazoEnMeses + " cuotas.");
    alert(`El pago mensual será de $${pagoMensual}. ` + plazoEnMeses + " cuotas.");
}



