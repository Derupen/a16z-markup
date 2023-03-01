import '../global.js'
import slick from 'slick-carousel'

export const SlickCarousel = () => {
    $('.shows-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 0,
        mobileFirst: true,
        autoplay: false,
        infinite: true,
        dots: true,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });

    jQuery('.episodes-slider').each(function(){
        var slider = jQuery(this);
        var dotsHolder = slider.closest('.podcast-episodes').find('.slider-nav');

        if (!slider.hasClass('slick-initialized')) {
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                pauseOnHover: false,
                dots: true,
                appendDots: dotsHolder,
                mobileFirst: true,
                responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }
                ]
            });
        }
    });
}