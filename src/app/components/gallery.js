window.onload = function ll() {
    const item = document.querySelectorAll('.panels__item');

    item.forEach(panel => panel.addEventListener('click', function toggleOpen() {
        this.classList.toggle('panels__item--open');
    }));


    function classToggle(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('active');
        }
    }
    item.forEach(item => item.addEventListener('transitionend', classToggle));

};
