function reverse (n) {
    n += '';
    return n.split('').reverse().join('');
}

document.querySelector('.reverse').innerHTML = (reverse('reverse'));
