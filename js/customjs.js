/**
 * Created by THE VULTURE on 11/17/2016.
 */
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.backsect').css({
       'transform': 'translate(0, '+wScroll/4+'%)'
    });
    $('.middlesect').css({
        'transform': 'translate(0, '+wScroll /2+'%)'
    });
    $('.foresect').css({
        'transform': 'translate(0, -'+wScroll /40+'%)'
    });

    if(wScroll > $('.clothes-pics').offset().top-($(window).height()/1.5)) {

        $('.clothes-pics .item').each(function (i) {
            setTimeout(function () {
                $('.clothes-pics .item').eq(i).addClass('show');
            }, 150*(i+1));
        });
    }


    if(wScroll > $('.periscope').offset().top - $(window).height()){

        $('.periscope').css({'background-position':'center '+ (wScroll - $('.periscope').offset().top) +'px'});

        var opacity = (wScroll - $('.periscope').offset().top + 400)/(wScroll/5);
        $('.caption-wrap').css ({
            'opacity': opacity
        });
    }

    if (wScroll > ( $('.blog').offset().top-$(window).height() )) {
        $('.blog .item1').css({
            'transform':'translate(-100px, 0px)'
        });
    }


});