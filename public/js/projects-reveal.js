document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap === 'undefined') return;

    var grids = document.querySelectorAll('.works-grid');
    if (!grids.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    var hasIO = 'IntersectionObserver' in window;

    grids.forEach(function (grid) {
        var units = grid.querySelectorAll(':scope > .project-card, :scope > .project-card-wrap');
        if (!units.length) return;

        units.forEach(function (unit, i) {
            var fromLeft = i % 2 === 0;
            gsap.set(unit, {
                opacity: 0,
                x: fromLeft ? -80 : 80,
                y: 36,
                rotate: fromLeft ? -3 : 3,
                scale: 0.9
            });
        });

        function play() {
            gsap.to(units, {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                duration: 0.75,
                ease: 'back.out(1.6)',
                stagger: 0.1
            });
        }

        if (!hasIO) {
            play();
            return;
        }

        var played = false;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !played) {
                    played = true;
                    play();
                    observer.unobserve(grid);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(grid);
    });
});
