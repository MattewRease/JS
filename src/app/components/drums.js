const items = document.querySelectorAll('.item');

function makeSound (e) {
    const item = document.querySelector(`.drums__item[data-key='${e.keyCode}']`);
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    item.classList.add('play');

}

function deleteClass (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play');
}

items.forEach(item => item.addEventListener('transitionend', deleteClass));
window.addEventListener('keydown', makeSound);
