$(document).ready(function () {
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_arrow.png"</button>',
        responsive: [{
            breakpoint: 769,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });
});