$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841, // Тут нужно писать на 1px большн
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 601, // Тут нужно писать на 1px большн
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});