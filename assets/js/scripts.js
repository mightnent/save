(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*START PRELOADED*/
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });
        /*END PRELOADED*/

        /*START MAGNIFICENT POPUP JS*/
        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        /*END MAGNIFICENT POPUP JS*/

        /*START TESTMONIAL JS*/
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            theme: "tp-round-button",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });
        /*END TESTMONIAL JS*/

        /*COUNTER UP JS*/
        $(".counter-up").counterUp({
            time: 2000,
            delay: 10
        });

        /*START WORK JS*/
        $('.work-inner').mixItUp();
        /*END WORK JS*/

        /*START MENU HIDE*/
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE*/

        /*START BOOTSTRAP SCROLL-SPY*/
        // $('body').scrollspy({
        //     target: '.navbar-collapse',
        //     offset: 195
        // });
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        // $(window).on('scroll', function() {
        //     if ($(window).scrollTop() > 30) {
        //         $('.logo').addClass('transparent');
        //     } else {
        //         $('.logo').removeClass('transparent');
        //     }
        // });
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START SCROLL TO UP*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*END SCROLL TO UP*/

        var $form_B2B = $('form#formSubmit'),        
        url_B2B = 'https://script.google.com/macros/s/AKfycbwDzceGJL6ZbTdQX6leKV7jVYtAtRK_dV102rLyEPtoMu1M6GqX/exec',
        url_Merchant = 'https://script.google.com/a/savourapp.co/macros/s/AKfycbxPUPeC15i5nd9atUuAwZOY82pqEbwydMRwo5q5/exec'
        var $form_merchant = $('form#formSubmitMerchant')

        $('#submit-form').on('click', function(e) {
            console.log("form");
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url_B2B,
                method: "GET",
                dataType: "json",
                data: $form_B2B.serialize()
            }).success(
                alert("We Will Reach Out To You Soon!")
            );
        });

        $('#submit-form1').on('click', function(e) {
            console.log("form1");
            e.preventDefault();
            var jqxhr = $.ajax({
                url: url_Merchant,
                method: "GET",
                dataType: "json",
                data: $form_merchant.serialize()
            }).success(
                alert("We Will Reach Out To You Soon!")
                
            );
            console.log(jqxhr.data)
        });

    });

})(jQuery);


