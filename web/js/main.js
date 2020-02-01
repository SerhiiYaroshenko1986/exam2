$(document).ready(function() {
    if ($())
        $('.header__slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            dotsClass: "vertical-dots",
            responsive: [{
                breakpoint: 400,
                settings: {
                    vertical: true,


                }
            }]
        });
    $('.news__gallery').slick({
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        appendArrows: $('.news__gallery-arrow'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',

        responsive: [{
                breakpoint: 1235,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    arrows: false,

                }
            },
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    });
    $('.left').click(function() {
        $('.news__gallery').slick('slickPrev');
    })

    $('.right').click(function() {
        $('.news__gallery').slick('slickNext');
    })
})