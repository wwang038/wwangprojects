document.addEventListener('DOMContentLoaded', function () {
    var triggers = document.querySelectorAll('.notes-trigger');
    triggers.forEach(function (trigger) {
        var item = trigger.closest('.notes-item');
        var panel = item.querySelector('.notes-panel');
        trigger.addEventListener('click', function () {
            var isOpen = item.classList.contains('is-open');
            if (isOpen) {
                item.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = null;
            } else {
                item.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});
