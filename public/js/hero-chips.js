document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap === 'undefined') return;

    var chips = document.querySelectorAll('.hero-chip');
    if (!chips.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.set(chips, { opacity: 0, y: 14, scale: 0.9 });
    gsap.to(chips, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.6)',
        stagger: 0.25,
        delay: 0.9
    });
});
