var previousOffset = 0,
    scrollTop = 0,
    navOffset = 0,
    $nav = null,
    $win = null,
    $btnScrollTop = null,
    $header = null;


function onToggleSearchClicked(e) {
    e.preventDefault();

    var $btn = $(this),
        $seachSection = $('.header__search');

    // $seachSection.toggleClass('active');
    //$('body').toggleClass('hide-scroll');
    $btn.toggleClass('active');
    $seachSection.toggleClass('active');
}

function onScrollTo(e) {
    e.preventDefault();

    var $btn = $(this),
        target = $btn.attr('data-scroll-to'),
        duration = $btn.attr('data-scroll-duration');

    if (typeof target == 'undefined' || target == null) return;
    if (typeof duration == 'undefined' || duration == null || typeof duration != 'number')
        duration = 400;

    if (target.indexOf('#') < 0) {  // scroll to offset
        $.scrollTo(target, duration);
    } else {                        // scroll to object
        var $target = $(target);
        if ($target.length == 0)    // target object not found
            return;

        $.scrollTo($target, duration);
    }
}

function onWindowScroll() {

    scrollTop = $win.scrollTop();

    // fixed nav
    if (scrollTop >= navOffset) {
        (!$header.is('.fixed')) && $header.addClass('fixed');
        (!$nav.is('.down')) && $nav.addClass('down');
    } else {
        ($header.is('.fixed')) && $header.removeClass('fixed');
        ($nav.is('.down')) && $nav.removeClass('down');
    }

    // scroll button
    if (previousOffset > scrollTop) { // scroll up
        // $btnScrollTop.removeClass('down');
        if ($btnScrollTop.is('.down'))
            $btnScrollTop.removeClass('down');
    } else { // scroll down
        if (!$btnScrollTop.is('.down'))
            $btnScrollTop.addClass('down');
    }
    //console.log('previous = %s, scrollTop = %s', previousOffset, scrollTop);
    previousOffset = scrollTop;
}

function onScrollButtonClicked(e) {
    e.preventDefault();

    var $btn = $(this);
    if ($btn.is('.down')) {
        $.scrollTo($('#footer'), 400, function () {
            // after scroll to top -> allow scroll down
            console.log('bottom callback');
            setTimeout(function () {
                $btn.removeClass('down');
            }, 100);
            
        });
    } else {
        $.scrollTo(0, 400, function () {
            // after scroll to bottom -> allow scroll up
            console.log('top callback');
            setTimeout(function () {
                $btn.addClass('down');
            }, 100);
            
        });
    }
}

$(document).ready(function () {

    $win = $(window);
    $btnScrollTop = $('.btn-scroll-top');
    $nav = $('.header__nav');
    $header = $('.header');
    navOffset = $nav.offset().top;
    

    // scroll button
    $(document).on('click', '.btn-scroll', onScrollTo);

    // scroll top or button
    $(document).on('click', '.btn-scroll-top', onScrollButtonClicked);

    // document scroll
    $(window).on('scroll', onWindowScroll);

    // toggle search
    $(document).on('click', '.btn-toggle-search', onToggleSearchClicked);

    // fix nav
    //$('.nav--right').sticky({ topSpacing: 0 });
    // $('.category').sticky({ topSpacing: 60 });
});
