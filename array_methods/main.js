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