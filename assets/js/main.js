$(document).ready(function() {

    // activar popovers
    $(function() {
            $('[data-toggle="popover"]').popover()
        })
        // Activar carrusel
    $('.carousel').carousel()
        // Añadir smotth scrolling a los links con la clase nav-link
    $(".nav-link").on('click', function(event) {

        if (this.hash !== "") {
            // prevenir el default del link
            event.preventDefault();
            // guardar el hash #
            var hash = this.hash;

            // uso el método animate()
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // añadir el hash a la url cuando terminemos de hacer scroll 
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        console.log($(window).scrollTop(), "scrolltop")
        console.log($("#quienes-somos").offset(), "kienesomos")
        if ($(window).scrollTop() >= $("#main").offset().top && $(window).scrollTop() < $("#quienes-somos").offset().top) {
            $("#link-inicio").addClass("active");
        } else {
            $("#link-inicio").removeClass("active");
        }

        if ($(window).scrollTop() >= $("#quienes-somos").offset().top && $(window).scrollTop() < $("#destacados").offset().top) {
            $("#link-quienes").addClass("active");
        } else {
            $("#link-quienes").removeClass("active");
        }

        if ($(window).scrollTop() >= $("#destacados").offset().top && $(window).scrollTop() < $("#contacto").offset().top) {
            $("#link-destacados").addClass("active");
        } else {
            $("#link-destacados").removeClass("active");
        }

        if ($(window).scrollTop() >= $("#contacto").offset().top) {
            $("#link-contacto").addClass("active");
        } else {
            $("#link-contacto").removeClass("active");
        }
    });




});