document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var spotlightOn = false;

    document.addEventListener('mousemove', function (e) {
        body.style.setProperty('--mx', e.clientX + 'px');
        body.style.setProperty('--my', e.clientY + 'px');
        if (!spotlightOn) {
            spotlightOn = true;
            body.classList.add('spotlight-on');
        }
    });

    var navTargets = document.querySelectorAll('.top-bar');
    navTargets.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
            var rect = el.getBoundingClientRect();
            el.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
            el.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
        });
    });
});
