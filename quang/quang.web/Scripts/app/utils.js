
$(document).ready(function () {

    var shineTarget = document.getElementById('text');
    console.log(shineTarget);
    if (shineTarget != null) {
        var shine2 = new Shine(shineTarget);
        window.addEventListener('mousemove', function (event) {
            shine2.light.position.x = event.clientX;
            shine2.light.position.y = event.clientY;
            shine2.draw();
        }, false);
    }
});
