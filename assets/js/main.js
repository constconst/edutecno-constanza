$(document).ready(function() {

    $('.carousel').carousel()
        // Add smooth scrolling to all links
    $(".nav-link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        console.log($(window).scrollTop(), "scrolltop")
        console.log($("#quienes-somos").offset(), "kienesomos")
        if ($(window).scrollTop() > $("#main").offset().top && $(window).scrollTop() < $("#quienes-somos").offset().top) {
            $("#link-inicio").addClass("active");
        } else {
            $("#link-inicio").removeClass("active");
        }

        if ($(window).scrollTop() > $("#quienes-somos").offset().top && $(window).scrollTop() < $("#destacados").offset().top) {
            $("#link-quienes").addClass("active");
        } else {
            $("#link-quienes").removeClass("active");
        }

        if ($(window).scrollTop() > $("#destacados").offset().top && $(window).scrollTop() < $("#contacto").offset().top) {
            $("#link-destacados").addClass("active");
        } else {
            $("#link-destacados").removeClass("active");
        }


        if ($(window).scrollTop() > $("#contacto").offset().top) {
            $("#link-contacto").addClass("active");
        } else {
            $("#link-contacto").removeClass("active");
        }
    });




});