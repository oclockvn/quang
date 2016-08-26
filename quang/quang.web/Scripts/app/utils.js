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
        target = $btn.attr('data-scroll-target'),
        duration = $btn.attr('data-scroll-duration');

    if (typeof target == 'undefined' || target == null) return;
    if (typeof duration == 'undefined' || duration == null || typeof duration != 'number')
        duration = 400;

    if (target.indexOf('#') < 0) {  // scroll to offset
        $.scrollTo(target, duration);
    } else {                        // scroll to object
        var $target = $(target);
        if ($target.length == 0) // target object not found
            return;

        $.scrollTo($target, duration);
    }
}


$(document).ready(function () {

    // shine
    var shineTarget = document.getElementById('text');    
    if (shineTarget != null) {
        var shine2 = new Shine(shineTarget);
        window.addEventListener('mousemove', function (event) {
            shine2.light.position.x = event.clientX;
            shine2.light.position.y = event.clientY;
            shine2.draw();
        }, false);
    }

    // scroll
    $(document).on('click', '.btn-scroll', onScrollTo);

    // toggle search
    $(document).on('click', '.btn-toggle-search', onToggleSearchSection);
});
