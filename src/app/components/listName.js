// --- create list item ---

document.getElementById('create').addEventListener('click', addItem);

function addItem() {
    const myList = document.querySelector('.list');
    const inputField = document.getElementById('inputareaAdd').value;
    const newLi = document.createElement('li');
    if (inputField === '') {
        alert('Write item name!');
    } else {
        newLi.setAttribute('id', inputField);
        newLi.className = 'list__item';
        newLi.appendChild(document.createTextNode(inputField));
        myList.appendChild(newLi);
        document.getElementById('inputareaAdd').value = '';
    }
}

// --- delete item by name

document.getElementById('delete').addEventListener('click', delItem);

function delItem() {
    const myList = document.querySelector('.list');
    const inputField = document.getElementById('inputareaDel').value;
    const item = document.getElementById(inputField);
    item ? myList.removeChild(item) : alert('No items!');
    document.getElementById('inputareaDel').value = '';
}
