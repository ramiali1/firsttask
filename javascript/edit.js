/*golbal $, alert, console*/
$(function () {

    'use strict';

    $('.header').height($(window).height());

    $(window).resize(function () {

        $('.header').height($(window).height());


    });

    $('.menu li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');



    });

});
