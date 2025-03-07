$(document).ready(function () {
    // Carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Nav
    $(".js-nav").click(function (e) {
        e.preventDefault();
        $('.js-main').show();
        $('.carousel').show();
        $('#about-us').show();
        $('#why-us').show();
        $('#contact').show();
        $('.admin').hide();
        $('.user').hide();
        $('#product').hide();
        $('.footer').show();

        var target = $($(this).find("a").attr("href"));

        if (target.length) {
            window.scrollTo({
                top: target.offset().top - ($(window).height() - target.outerHeight()) / 2,
                behavior: "auto"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        }

        $(".js-nav").removeClass("header__navbar-item--actived");
        $(".js-home").removeClass("header__navbar-item--actived");
        $(".js-admin").removeClass("header__navbar-item--actived");
        $(".js-product").removeClass("header__navbar-item--actived");
        $(this).addClass("header__navbar-item--actived");
    });

    // Show / Hide
    $('.admin').hide();
    $('.js-admin').click(function () {
        $(".js-nav").removeClass("header__navbar-item--actived");
        $(".js-admin").addClass("header__navbar-item--actived");
        $(".js-product").removeClass("header__navbar-item--actived");
        $('.carousel').hide();
        $('#about-us').hide();
        $('#why-us').hide();
        $('#contact').hide();
        $('#product').hide();
        $('.admin').show();
        $('.user').hide();
        $('.footer').hide();
    });

    $('.user').hide();
    $('.js-user').click(function () {
        $(".js-nav").removeClass("header__navbar-item--actived");
        $(".js-admin").removeClass("header__navbar-item--actived");
        $(".js-product").removeClass("header__navbar-item--actived");
        $('.carousel').hide();
        $('#about-us').hide();
        $('#why-us').hide();
        $('#contact').hide();
        $('#product').hide();
        $('.admin').hide();
        $('.user').show();
        $('.footer').hide();
    });

    $('#product').hide();
    $('.js-product').click(function () {
        $(".js-nav").removeClass("header__navbar-item--actived");
        $(".js-admin").removeClass("header__navbar-item--actived");
        $(".js-product").addClass("header__navbar-item--actived");
        $('.carousel').hide();
        $('#about-us').hide();
        $('#why-us').hide();
        $('#contact').hide();
        $('#product').show();
        $('.admin').hide();
        $('.user').hide();
        $('.footer').show();
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').scrollTop(0);
    });
});