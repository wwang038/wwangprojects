document.addEventListener('DOMContentLoaded', function () {
    var section = document.querySelector('.view-more-cta');
    if (!section || typeof gsap === 'undefined') return;

    var heading = section.querySelector('h2');
    var text = section.querySelector('p');
    var btn = section.querySelector('a');
    if (!heading || !text || !btn) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.set(heading, { opacity: 0, x: -90, rotate: -2 });
    gsap.set(text, { opacity: 0, x: 90, rotate: 2 });
    gsap.set(btn, { opacity: 0, y: 50, scale: 0.5 });

    if (!('IntersectionObserver' in window)) {
        gsap.to([heading, text, btn], { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, duration: 0.6 });
        return;
    }

    var played = false;
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !played) {
                played = true;
                gsap.timeline({ defaults: { ease: 'back.out(1.7)', duration: 0.75 } })
                    .to(heading, { opacity: 1, x: 0, rotate: 0 })
                    .to(text, { opacity: 1, x: 0, rotate: 0 }, '<0.12')
                    .to(btn, { opacity: 1, y: 0, scale: 1 }, '-=0.35');
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(section);
});
