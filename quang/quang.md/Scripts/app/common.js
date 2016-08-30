function onToggleSearchSection(e) {
    e.preventDefault();

    var $btn = $(this),
        $seachSection = $('#search-section');

    // $seachSection.toggleClass('active');
    $('body').toggleClass('hide-scroll');
    $seachSection.fadeToggle();
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


$(document).ready(function () {
    // scroll
    $(document).on('click', '.btn-scroll', onScrollTo);

    // toggle search
    // $(document).on('click', '.btn-toggle-search', onToggleSearchSection);

    // fix nav
    // $('#nav').sticky({ topSpacing: 0 });
});
