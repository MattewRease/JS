const user = {
    firstName: 'Jack',
    lastName: 'Rassel',
    age: '45',
    gender: 'male',
    fullName: () => {
        return `${user.firstName} ${user.lastName}`;
    }
};

document.getElementById('objects').innerHTML = (user.fullName());
