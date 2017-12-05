function reverse (n) {
    n += ''; // make string
    return n.split('').reverse().join(''); // split strin obj into array and separate them. reverse array. join put together array obj into string
}

document.getElementById('reverse__output').innerHTML = (reverse('reverse'));
