const person = {
    name: 'Winter',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = (personData) => { // other way 
const printName = ({ name }) => { //destructuring
    console.log(name);
}

printName(person);

const {name, age} = person; // other use case of destructuring
console.log(name, age);

const hobbies = ['sports', 'chess'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);