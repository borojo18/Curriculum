/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

// Código agregado
  //const $templatePage = document.getElementById("templatePage").content.cloneNode(true),
  //$divMain = document.getElementById("divMain");

async function fntListarDatos() {
const res = await fetch("site-info.json")
const data = await res.json()
console.log(data)
document.querySelector("#pregradotitulo").innerHTML = `${data.formacion.pregrados}`,
document.querySelector("#car1").innerHTML = `${data.formacion.carrera}`,
document.querySelector("#car2").innerHTML = `${data.Descripcion}`,
document.querySelector("#choco").innerHTML = `${data.Descripcion2}`,
document.querySelector("#car3").innerHTML = `${data.formacion.bachiller}`,
document.querySelector("#intereses").innerHTML = `${data.interes}`,
document.querySelector("#sk1").innerHTML = `${data.trabajo}`,
document.querySelector("#sk2").innerHTML = `${data.trabajo1}`,
document.querySelector("#sk3").innerHTML = `${data.trabajo2}`,
document.querySelector("#sk4").innerHTML = `${data.idiomas}`,
document.querySelector("#sk5").innerHTML = `${data.idiomas1}`,
document.querySelector("#info").innerHTML = `${data.contacto}`,
document.querySelector("#alfainity").innerHTML = `${data.mename}`



}
window.onload = function(){
 fntListarDatos()
}
