// --- add element --- //

function addElement() {
    const newElem = document.createElement('div');
    newElem.innerHTML = 'New element!';
    document.querySelector('.newelements').appendChild(newElem);
}

document.getElementById('addBtn').addEventListener('click', addElement);

//  --- remove element ---

function delElement() {
    const remElem = document.querySelector('.newelements');
    remElem.removeChild(remElem.childNodes[0]);
}

document.getElementById('remBtn').addEventListener('click', delElement);

//  --- change elements class ---

function newClass() {
    const changeClass = document.querySelector('.newelements').childNodes;
    for (let i = 0; i < changeClass.length; i += 1) {
        changeClass[i].className = 'newclass';
    }
}

document.getElementById('class').addEventListener('click', newClass);

//  --- delete all elements ---

function delAll() {
    const remElem = document.querySelector('.newelements');
    while (remElem.firstChild) {
        remElem.removeChild(remElem.firstChild);
    }
}

document.getElementById('remAll').addEventListener('click', delAll);

// --- add attribute ---

function addAttr() {
    const setAttr = document.querySelector('.newelements').childNodes;
    for (let i = 0; i < setAttr.length; i += 1) {
        setAttr[i].setAttribute('type', 'button');
    }
}

document.getElementById('attr').addEventListener('click', addAttr);
