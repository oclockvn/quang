$(document).ready(function () {
    /*
    var shine = new Shine(document.getElementById('logo-text'));
    window.addEventListener('mousemove', function (event) {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.draw();
    }, false);
    */

    var shine2 = new Shine(document.getElementById('text'));
    window.addEventListener('mousemove', function (event) {
        shine2.light.position.x = event.clientX;
        shine2.light.position.y = event.clientY;
        shine2.draw();
    }, false);
});