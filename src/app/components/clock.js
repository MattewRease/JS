const secArrow = document.querySelector('.clock__arrow--sec');
const minArrow = document.querySelector('.clock__arrow--min');
const hourArrow = document.querySelector('.clock__arrow--hour');

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secArrow.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
    minArrow.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
    hourArrow.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
