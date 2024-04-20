function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Usuario.prototype.calcularFechaNacimiento = function () {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const anioNacimiento = anioActual - this.edad;
    return `Registrado correctamente. ${this.nombre} naciste aproximadamente en ${anioNacimiento}.`;
};

const usuariosPreestablecidos = {
    juan: new Usuario("Juan", 30),
    german: new Usuario("German", 30),
    martin: new Usuario("Martin", 29)
};

function verificarUsuario(nombre) {
    const nombreLowerCase = nombre.toLowerCase();
    return Object.keys(usuariosPreestablecidos).some(key => key.toLowerCase() === nombreLowerCase);
}

const sesionForm = document.getElementById('sesion-form');
const registroForm = document.getElementById('registro');
const nombreRegistroInput = document.getElementById('nombreRegistro');
const edadRegistroInput = document.getElementById('edadRegistro');
const consultas = document.getElementById("consultas");

function gestionarSesion() {
    const nombre = sesionForm.elements['nombre'].value;
    const edad = parseInt(sesionForm.elements['edad'].value);

    if (verificarUsuario(nombre)) {
        alert(`¡Bienvenido de nuevo, ${nombre}!`);
    } else {
        if (edad < 18) {
            alert("Acceso denegado");
            return;
        }
        mostrarFormularioRegistro();
    }
}

function mostrarFormularioRegistro() {
    document.getElementById('sesion').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
}

function registrarse() {
    const nombre = nombreRegistroInput.value;
    const edad = parseInt(edadRegistroInput.value);
    alert(new Usuario(nombre, edad).calcularFechaNacimiento());
}

function calcularPrestamo() {
    const montoPrestamo = parseInt(document.getElementById('montoPrestamo').value);
    const plazoPrestamo = parseInt(document.getElementById('plazoPrestamo').value);
    const tasaInteresAnual = 180;

    if (montoPrestamo <= 0 || tasaInteresAnual <= 0 || plazoPrestamo <= 0) {
        alert("Por favor, ingrese valores válidos.");
    } else {
        const pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoPrestamo);
        document.getElementById('resultado-prestamo').innerText = `El pago mensual será de $${pagoMensual.toFixed(2)}. ${plazoPrestamo} cuotas.`;
    }
}

function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses) {
    const capitalTotal = montoPrestamo * tasaInteresAnual;
    const pagoMensual = capitalTotal / plazoEnMeses;
    return pagoMensual;
}

document.addEventListener('DOMContentLoaded', function () {
    const botonContinuar = document.getElementById('botonContinuar');
    botonContinuar.addEventListener('click', function () {
        const select = document.getElementById('opciones');
        const opcionSeleccionada = select.value;

        switch (opcionSeleccionada) {
            case 'opcion1':
                document.getElementById('prestamo-solicitado').innerText = "Préstamo solicitado correctamente";
                break;
            case 'opcion2':
                const formularioBusqueda = document.getElementById('busqueda');
                formularioBusqueda.classList.remove('d-none');

                const buscarButton = document.getElementById('buscar');
                buscarButton.addEventListener('click', function () {
                    const palabrasClavePrestamo = ["préstamo hipotecario", "préstamo personal", "préstamo para empresas", "préstamo en dólares"];
                    const entradaUsuario = document.getElementById('palabra-busqueda').value.toLowerCase().trim();
                    let palabrasEncontradas = palabrasClavePrestamo.filter(palabra => palabra.toLowerCase().includes(entradaUsuario) || palabra.toLowerCase().includes('préstamo'));

                    const resultadoBusqueda = document.getElementById('resultado-busqueda');
                    resultadoBusqueda.innerText = palabrasEncontradas.length > 0 ?
                        "Resultado de la búsqueda:\n" + palabrasEncontradas.join("\n") :
                        "No se encontraron palabras clave relacionadas con 'préstamo'.";
                });
                break;
            case 'opcion3':
                const prestamos = [
                    { tipo: "préstamo hipotecario", tasaInteres: 0.05 },
                    { tipo: "préstamo personal", tasaInteres: 0.08 },
                    { tipo: "préstamo para empresas", tasaInteres: 0.1 },
                    { tipo: "préstamo en dólares", tasaInteres: 0.06 }
                ];
                prestamos.sort((a, b) => a.tasaInteres - b.tasaInteres);
                alert("Préstamos ordenados por tasa de interés (de menor a mayor):\n" +
                    prestamos.map(prestamo => `- ${prestamo.tipo}: ${prestamo.tasaInteres * 100}%`).join("\n"));
                break;
            default:
                console.log('Opción no válida');
        }
    });
});
