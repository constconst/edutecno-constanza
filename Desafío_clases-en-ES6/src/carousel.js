    var instance = M.Carousel.init({
        fullWidth: true
    })


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
    })

    export default instance