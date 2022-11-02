const hobbies = ['books', 'manu', 'ps'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// objects and arrays are reference types.

// take a constat array..
const hobby = ['cooking,', 'eating'];
hobby.push('Programming');
console.log(hobby);

// why it didn't complain is that reference types
// only store an address pointing at the place of memory
// where that array is stored and that pointer hasnt changed by adding a new element

// continuation of spread operator
// const copiedArray = hobby.slice(); //copying values of an array
// or
const copiedArray = [...hobby]; // copy from hobby to this array
// same work for objects {...person}

// REST operator
// when used on arguments then it becomes a rest operator
// const toArray = (arg1, arg2, arg3) => { // old way not dynamic arguments
    const toArray = (...args) => {
    return [arg1,arg2,arg3];
};
console.log(toArray(1,2,3,4));