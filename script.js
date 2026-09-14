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
