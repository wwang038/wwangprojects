document.addEventListener('DOMContentLoaded', function () {
    var chips = document.querySelectorAll('.hero-chip');
    if (!chips.length) return;

    var options = [
        { label: 'Live: Securest SOC 2 platform', href: 'pages/securest.html', done: true },
        { label: 'Live: Word Hunt Solver', href: 'pages/word-hunt-solver.html', done: true },
        { label: 'Open source: MuseScore plugins', href: 'pages/musescore-git-plugins.html', done: false }
    ];

    for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = options[i];
        options[i] = options[j];
        options[j] = tmp;
    }

    chips.forEach(function (chip, i) {
        var opt = options[i % options.length];
        if (!opt) return;
        chip.href = opt.href;
        var dot = chip.querySelector('.hero-chip-dot');
        var label = chip.querySelector('.hero-chip-label');
        if (dot) dot.classList.toggle('hero-chip-dot--done', !!opt.done);
        if (label) label.textContent = opt.label;
    });

    if (typeof gsap === 'undefined') return;

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
