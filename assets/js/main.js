$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip()

    $('.carousel').carousel()


    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente.");
    });

    $('#favoritos').click(function() {
        alert("Añadido a favoritos.");
    });

    $('#ingredientes').on("dblclick", function() {
        $(this).css("color", "red")
            .css("transition", "0.1s ease-in");

    });
    $('#preparacion').on("dblclick", function() {
        $(this).css("color", "red")
            .css("transition", "0.1s ease-in");

    });


    $(".img-hide").click(function() {
        $(".img-visible").toggle();
    });

});