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

    jQuery('.cm-featured-slider').each(function(){
        var slider = jQuery(this);

        if (!slider.hasClass('slick-initialized')) {
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                rows: 0,
                pauseOnHover: false,
                dots: true,
                mobileFirst: true,
                responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        variableWidth: true
                    }
                }
                ]
            });
        }
    });

    $('.cm-hero-slider').slick({
        arrows: false,
        rows: 0,
        autoplay: true,
        infinite: true,
        dots: false,
    });

    $('.gl-latest-slider').slick({
        arrows: false,
        rows: 0,
        // autoplay: true,
        infinite: true,
        dots: true,
        centerPadding: '50px'
    });
}

export const niceSelect = () => {
    $('[data-select]').each(function () {
    const item = $(this);
    const selectDrop = item.next();
    const linkItems = selectDrop.find('a');

    item.click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active').next().toggleClass('active');
    });

    linkItems.on('click', function (e) {
      e.preventDefault();
      const el = $(this);
      item.text(el.text());
      selectDrop.removeClass('active');
      item.removeClass('active').addClass('selected');

      selectDrop.find('li').removeClass('active');
      $(this).parent().addClass('active');
      const filerSelect = el.data('filterSelect');
      if ('undefined' !== typeof filerSelect) {
        applySelectFilter(filerSelect);
      }
    });

    if (selectDrop.children().hasClass('active')) {
      item
        .text($(this).next().find('.active a').text())
        .addClass('selected');
    }
  });

    $('[data-select-nav]').each(function () {
    const item = jQuery(this);
    const selectDrop = item.next();
    const linkItems = selectDrop.find('a');

    item.attr({ 'data-outside': '', 'data-more': '' });

    linkItems.on('click', function (e) {
      e.preventDefault();
      item.text(jQuery(this).text());
      selectDrop.slideUp(200);
      item.removeClass('active').addClass('selected');

      selectDrop.find('li').removeClass('active');
      jQuery(this).parent().addClass('active');
    });

    if (selectDrop.children().hasClass('active')) {
      item
        .text(jQuery(this).next().find('.active a').text())
        .addClass('selected');
    }
  });
}

export const inlineSVG = () => {
    $('.inline-this-svg').each(function () {
    const el = $(this);
    const img = el.find('> img');
    if (0 < img.length) {
      $.get(img[0].src, (svgDoc) => {
        const svgEl =
          document.importNode(svgDoc.documentElement, true);
        el.html(svgEl);
        // const viewBoxHeight = ('' !== svgEl.viewBox.baseVal.height)
        //   ? svgEl.viewBox.baseVal.height : '';
        // el.find('svg').attr('height', viewBoxHeight);
      });
    }
  });
}


export const openClose = () => {
    $('[data-more]').next().hide();
    $('[data-more].active').next().show();

    $('[data-more]').click(function(e) {
        e.preventDefault();
        $(this).hasClass('active') ? $(this).removeClass('active').next().slideUp(200) : $(this).addClass('active').next().slideToggle(200);

        if($(this).closest('[data-accordion]').length) {
            $(this).addClass('life');
            $(this).parent().siblings().find('[data-more]').removeClass('active');
            $(this).parent().siblings().find('[data-more]').next().slideUp(200);
        }
    })

    $('[data-outside]').next().find('a:not(.hasdrop-a):not([data-more])').click(function() {
        $('[data-outside]').removeClass('active').next('').slideUp(200);
    });
    $('[data-outside]').click(function(e) {
        $('[data-outside]').not(this).removeClass('active').next().slideUp(200);
    });

    $('html').on('click touchstart pointerdown MSPointerDown', function(e) {
        var target = $(e.target);

        if(!(target.closest('[data-outside]').length) && !(target.closest('[data-outside] + *').length)) {
            setTimeout (function() {
                $('[data-outside]').removeClass('active').next().slideUp(200);
            }, 200)
        }

        if(!(target.closest('[data-outside-1]').length) && !(target.closest('[data-outside-1] + *').length)) {
            setTimeout (function() {
                $('[data-outside-1]').removeClass('active').next().slideUp(200);
            }, 200)
        }
    });
}