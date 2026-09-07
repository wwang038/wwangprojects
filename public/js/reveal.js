document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('.reveal, .pop-reveal');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) { el.classList.add('in-view'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
        observer.observe(el);
    });
});
