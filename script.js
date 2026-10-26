/*
CAMBIA SOLAMENTE ESTE NÚMERO.

Debe llevar el código del país, pero no debe tener:
- Signo +
- Espacios
- Guiones

Ejemplo Colombia:
+57 300 123 4567
Se escribe:
573001234567
*/

const CONFIGURACION = {
    whatsapp: "4915561264387",
    mensaje: "Hola, me gustaría comprar FRESITAS TRULULU."
};


/* CREAR ENLACE DE WHATSAPP */

function crearEnlaceWhatsApp(mensaje) {

    return "https://wa.me/" +
        CONFIGURACION.whatsapp +
        "?text=" +
        encodeURIComponent(mensaje);
}


/* BOTONES GENERALES DE WHATSAPP */

const enlacesWhatsApp =
    document.querySelectorAll(".enlace-whatsapp");

enlacesWhatsApp.forEach(function (enlace) {

    enlace.href =
        crearEnlaceWhatsApp(CONFIGURACION.mensaje);

});


/* BOTONES DE CADA PRODUCTO */

const botonesProducto =
    document.querySelectorAll(".boton-producto");

botonesProducto.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const producto = boton.dataset.producto;
        const precio = boton.dataset.precio;

        const mensaje =
            CONFIGURACION.mensaje +
            " Me interesa " +
            producto +
            ", con precio de " +
            precio +
            ". ¿Está disponible?";

        window.open(
            crearEnlaceWhatsApp(mensaje),
            "_blank"
        );

    });

});


/* MENÚ PARA CELULAR */

const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", function () {

    menu.classList.toggle("abierto");

    if (menu.classList.contains("abierto")) {
        menuBoton.textContent = "✕";
    } else {
        menuBoton.textContent = "☰";
    }

});


/* CERRAR MENÚ AL PULSAR UNA OPCIÓN */

const opcionesMenu = menu.querySelectorAll("a");

opcionesMenu.forEach(function (opcion) {

    opcion.addEventListener("click", function () {

        menu.classList.remove("abierto");
        menuBoton.textContent = "☰";

    });

});


/* ELEMENTOS QUE APARECEN AL BAJAR */

const elementos =
    document.querySelectorAll(".revelar");

const observador =
    new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(
                    entrada.target
                );

            }

        });

    }, {
        threshold: 0.12
    });


elementos.forEach(function (elemento) {

    observador.observe(elemento);

});

/* VENTANA DE PROMOCIONES */

const popupDescuento =
    document.getElementById("popupDescuento");

const cerrarPopup =
    document.getElementById("cerrarPopup");

const seguirViendo =
    document.getElementById("seguirViendo");

const comprarPromo1 =
    document.getElementById("comprarPromo1");

const comprarPromo2 =
    document.getElementById("comprarPromo2");


/* MENSAJE DE LA OPCIÓN 1 */

const mensajePromo1 =
    "Hola, quiero aprovechar la Opción 1: " +
    "comprar una bolsa de Fresitas Trululu de 90 g o 120 g " +
    "y recibir gratis una bolsa de 35 g. " +
    "¿Está disponible?";


/* MENSAJE DE LA OPCIÓN 2 */

const mensajePromo2 =
    "Hola, quiero aprovechar la Opción 2: " +
    "el Combo Trululu de 35 g + 90 g + 120 g " +
    "por $21.000. ¿Está disponible?";


/* ABRIR WHATSAPP SEGÚN LA PROMOCIÓN */

comprarPromo1.addEventListener("click", function () {

    window.open(
        crearEnlaceWhatsApp(mensajePromo1),
        "_blank",
        "noopener,noreferrer"
    );

});


comprarPromo2.addEventListener("click", function () {

    window.open(
        crearEnlaceWhatsApp(mensajePromo2),
        "_blank",
        "noopener,noreferrer"
    );

});


/* MOSTRAR EL POPUP DESPUÉS DE 2 SEGUNDOS */

window.addEventListener("load", function () {

    setTimeout(function () {

        popupDescuento.classList.add("mostrar");

    }, 2000);

});


/* CERRAR EL POPUP */

function ocultarPopup() {

    popupDescuento.classList.remove("mostrar");

}


cerrarPopup.addEventListener(
    "click",
    ocultarPopup
);


seguirViendo.addEventListener(
    "click",
    ocultarPopup
);


/* CERRAR AL PULSAR FUERA DEL RECUADRO */

popupDescuento.addEventListener(
    "click",
    function (evento) {

        if (evento.target === popupDescuento) {

            ocultarPopup();

        }

    }
);


/* CERRAR CON LA TECLA ESCAPE */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            ocultarPopup();

        }

    }
);
