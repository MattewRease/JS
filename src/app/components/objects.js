// const user = {
//     firstName: 'Jack',
//     lastName: 'Rassel',
//     age: '45',
//     gender: 'male',
//     fullName: () => {
//         return `${user.firstName} ${user.lastName}`;
//     }
// };

// // document.getElementById('objects').innerHTML = (user.fullName());

// const arr = [1, 2, 3, 4, 5, 6, 'string', {}];

// arr.splice(1, 2); // delete element from array 1-start from first el 2-two el has been deleted

// arr.push('newElem'); // add el at the end of array

// arr.pop(); // delete last el in array

// arr.shift(); // delete first el in array

// arr.unshift('new at start'); // add el to begin

// arr.reverse(); // reverse array

// arr.slice(1, 2); // clice arrya ande created new

// const item = document.querySelector('.accordion__text');
// let i;

// --- toggle ---

function toggle() {
    document.querySelector('.accordion__text').classList.toggle('active');
}

document.querySelector('.accordion__title').addEventListener('click', toggle);
