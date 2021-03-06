$(document).ready(function gallery() {
    if ($(window).width() > 700) {
        $('.popup__gallery-item').magnificPopup({
            delegate: 'a',
            type: 'image',
            fixedContentPos: false,
            mainClass: 'mfp-width-zoom',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            callbacks: {
                open: function() { // When you open the
                    $('html').css('overflow', 'hidden'); // window, the element
                }, // "body" is used "overflow: hidden".

                close: function() { // When the window
                    $('html').css('overflow', ''); // is closed, the 
                },
                elementParse: function(item) {
                    console.log(item.el[0].className);
                    if (item.el[0].className == 'video') {
                        item.type = 'iframe',
                            item.iframe = {
                                patterns: {
                                    youtube: {
                                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                                        // Or null - full URL will be returned
                                        // Or a function that should return %id%, for example:
                                        // id: function(url) { return 'parsed id'; }

                                        src: '//www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
                                    },
                                    vimeo: {
                                        index: 'vimeo.com/',
                                        id: '/',
                                        src: '//player.vimeo.com/video/%id%'
                                    },
                                    gmaps: {
                                        index: '//maps.google.',
                                        src: '%id%&output=embed'
                                    }
                                }
                            }


                    } else {
                        item.type = 'image',
                            item.tLoading = 'Loading image #%curr%...',
                            item.mainClass = 'mfp-img-mobile',
                            item.image = {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                            }
                    }

                }
            }
        });
    } else {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            callbacks: {

                elementParse: function(item) {
                    console.log(item.el[0].className);

                    if (item.el[0].className == 'video') {
                        item.type = 'iframe',
                            item.iframe = {
                                patterns: {
                                    youtube: {
                                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                                        // Or null - full URL will be returned
                                        // Or a function that should return %id%, for example:
                                        // id: function(url) { return 'parsed id'; }

                                        src: '//www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
                                    },
                                    vimeo: {
                                        index: 'vimeo.com/',
                                        id: '/',
                                        src: '//player.vimeo.com/video/%id%'
                                    },
                                    gmaps: {
                                        index: '//maps.google.',
                                        src: '%id%&output=embed'
                                    }
                                }
                            }
                    } else {
                        item.type = 'image',
                            item.tLoading = 'Loading image #%curr%...',
                            item.mainClass = 'mfp-img-mobile',
                            item.image = {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                            }
                    }

                }
            }
        });
    }
})


// ///////////////////// ANCHOR

const element = document.querySelector('.about')
const topPos = element.getBoundingClientRect().top + window.pageYOffset
const downLink = document.querySelector('.down__link')

downLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
    })
})

$(document).ready(function() {
if ($(window).width() < 900) {
    // mobile portfolio slider
    $(document).ready(function() {
        //???????????????????????????? ????????????
      $('.popup-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
        var video = $('.popup-gallery .slick-active').find('video').get(0).pause();

        $('.popup-gallery').on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $('.popup-gallery .slick-slide').find('video').get(0).pause();
            var video = $('.popup-gallery .slick-active').find('video').get(0).pause();
        });

        var dots = $('.slick-dots li');
        console.log(dots);
        //???????????? ???????????????????? ???? ???????? ??????????
        dots.click(function() {
            var $this = $(this);
            console.log($this);
            dots.removeClass('before after');
            //???????????????????? 2 ???????????????????? ??????????
            $this
                .prev().addClass('before')
                .prev().addClass('before');
            //???????????????????? 2 ?????????????????? ??????????
            $this
                .next().addClass('after')
                .next().addClass('after');


            //???????? ???? ?? ?????????? ???????????? - ?????????????????? ???????? ?????????????????????? ??????????
            if (!$this.prev().length) {
                $this.next().next().next()
                    .addClass('after').next()
                    .addClass('after');
            }
            //???? 2?? ?????????????? - ?????????????????? ???????? ??????????
            if (!$this.prev().prev().length) {
                $this.next().next().next()
                    .addClass('after');
            }
            //?? ?????????? ?????????? - ?????????????????? ???????? ??????. ???????????????????? ??????????
            if (!$this.next().length) {
                $this.prev().prev().prev()
                    .addClass('before').prev()
                    .addClass('before');
            }
            //?????????????????????????? ???????????????? - ?????????????????? ???????? ????????. ??????????
            if (!$this.next().next().length) {
                $this.prev().prev().prev()
                    .addClass('before');
            }
        });
    })



}
})
//  resume slider

$(document).ready(function() {
//     if ($(window).width() > 900) {
    $('.resume__slider').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

})

// mobile slider

$(document).ready(function() {
    if ($(window).width() > 700) {

  		return
    } else {
        $('.popup-gallery').slick({

            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,

        });

    }
})

var video = $('.popup-gallery .slick-active').find('video').get(0).play();

$('.popup-gallery').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.popup-gallery .slick-slide').find('video').get(0).pause();
    var video = $('.popup-gallery .slick-active').find('video').get(0).play();
});