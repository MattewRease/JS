const user = {
    firstName: 'Jack',
    lastName: 'Rassel',
    age: '45',
    gender: 'male',
    fullName: () => {
        return `${user.firstName} ${user.lastName}`;
    }
};

// document.getElementById('objects').innerHTML = (user.fullName());


const arr = [1, 2, 3, 4, 5, 6, 'string', {}];

arr.splice(1, 2); // delete element from array 1-start from first el 2-two el has been deleted

arr.push('newElem'); // add el at the end of array

arr.pop(); // delete last el in array

arr.shift(); // delete first el in array

arr.unshift('new at start'); // add el to begin

arr.reverse(); // reverse array

arr.slice(1, 2); // clice arrya ande created new

// document.getElementById('array').innerHTML = arr;

const item = document.querySelector('.accordion__text');
let i;

// --- toggle ---

document.querySelector('.accordion__title').addEventListener('click', () => {
    document.querySelector('.accordion__text').classList.toggle('active');
}
);

// --- add element --- //

document.getElementById('addBtn').addEventListener('click', () => {
    const newElem = document.createElement('DIV');
    newElem.innerHTML = 'New element!';
    document.querySelector('.newelements').appendChild(newElem);
});

//  --- remove element ---

document.getElementById('remBtn').addEventListener('click', () => {
    const remElem = document.querySelector('.newelements');
    remElem.removeChild(remElem.childNodes[0]);
});

//  --- change elements class ---

document.getElementById('class').addEventListener('click', () => {
    const changeClass = document.querySelector('.newelements').childNodes;
    for (let i = 0; i < changeClass.length; i += 1) {
        changeClass[i].className = 'newclass';
    }
});

//  --- delete all elements ---

document.getElementById('remAll').addEventListener('click', () => {
    const remElem = document.querySelector('.newelements');
    while (remElem.firstChild) {
        remElem.removeChild(remElem.firstChild);
    }
});

// --- add attribute ---

document.getElementById('attr').addEventListener('click', () => {
    const setAttr = document.querySelector('.newelements').childNodes;
    for (let i = 0; i < setAttr.length; i += 1) {
        setAttr[i].setAttribute('type', 'button');
    }
});

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
    }
}

// --- delete item by name

document.getElementById('delete').addEventListener('click', delItem);

function delItem() {
    const myList = document.querySelector('.list');
    const inputField = document.getElementById('inputareaDel').value;
    const item = document.getElementById(inputField);
    myList.removeChild(item);
}
