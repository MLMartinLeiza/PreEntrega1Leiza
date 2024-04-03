function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Usuario.prototype.calcularFechaNacimiento = function () {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const anioNacimiento = anioActual - this.edad;
    alert(`Registrado correctamente. ${this.nombre} naciste aproximadamente en ${anioNacimiento}.`);
};

let juan = new Usuario("Juan", 30);
let german = new Usuario("German", 30);
let martin = new Usuario("Martin", 29);

function verificarUsuario(nombre) {
    return nombre === juan.nombre || nombre === german.nombre || nombre === martin.nombre;
}

function gestionarSesion() {
    let nombreUsuario = prompt("Ingresa tu nombre");
    if (verificarUsuario(nombreUsuario)) {
        alert(`¡Bienvenido de nuevo, ${nombreUsuario}!`);
        return;
    }

    alert("No estas registrado, ingresa tus datos a continuación");
    let nombre = solicitarNombre();
    let edad = solicitarEdad();
    let nuevoUsuario = new Usuario(nombre, edad);
    nuevoUsuario.calcularFechaNacimiento();
}

gestionarSesion();

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
    return Number(edad);
}

function solicitarNumero(mensaje) {
    let numero = prompt(mensaje);
    while (isNaN(numero) || numero <= 0) {
        alert("Ingrese un número válido.");
        numero = prompt(mensaje);
    }
    return numero;
}

function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses) {
    const capitalTotal = montoPrestamo * tasaInteresAnual
    const pagoMensual = (capitalTotal / plazoEnMeses);
    return pagoMensual;
}

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

const masConsultas = ["1. Búsqueda", "2. Ordenar por tasa de interés ", "3. Consultar Tasa de Interés ",];
let opcionSeleccionada = prompt("Seleccione una opción:\n" + masConsultas.join("\n"));
while (opcionSeleccionada !== "1" && opcionSeleccionada !== "2" && opcionSeleccionada !== "3") {
    opcionSeleccionada = prompt("Opción mo válida. Seleccione una opción válida:\n" + masConsultas.join("\n"));
}

console.log("Opción seleccionada: " + masConsultas[opcionSeleccionada - 1]);
alert("Ha seleccionado: " + masConsultas[opcionSeleccionada - 1]);

const palabrasClavePrestamo = ["prestamo hipotecario", "prestamo personal", "prestamo para empresas", "prestamo en dolares"];

if (opcionSeleccionada === "1") {
    let entradaUsuario = prompt("Ingrese su consulta:").toLowerCase().trim();
    let palabrasEncontradas = palabrasClavePrestamo.filter(palabra => palabra.toLowerCase().includes(entradaUsuario));

    if (palabrasEncontradas.length === 0) {
        palabrasEncontradas = palabrasClavePrestamo.filter(palabra => palabra.toLowerCase().includes(entradaUsuario) || palabra.toLowerCase().includes("pres"));
    }

    if (palabrasEncontradas.length > 0) {
        let listaPalabras = palabrasEncontradas.map(palabra => `- ${palabra}`).join("\n");
        alert("Palabras clave relacionadas con 'préstamo':\n" + listaPalabras);
    } else {
        alert("No se encontraron palabras clave relacionadas con 'préstamo'.");
    }
}

const prestamos = [
    { tipo: "préstamo hipotecario", tasaInteres: 0.05 },
    { tipo: "préstamo personal", tasaInteres: 0.08 },
    { tipo: "préstamo para empresas", tasaInteres: 0.1 },
    { tipo: "préstamo en dólares", tasaInteres: 0.06 }
];

if (opcionSeleccionada === "2") {
    prestamos.sort((a, b) => a.tasaInteres - b.tasaInteres);

    let listaPrestamos = prestamos.map(prestamo => `- ${prestamo.tipo}: ${prestamo.tasaInteres * 100}%`).join("\n");

    alert("Prestamos ordenados por tasa de interés (de menor a mayor):\n" + listaPrestamos);
}


