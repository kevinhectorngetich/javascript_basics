const person = {
    name: 'Hector',
    age: 29,
    //greet: () => {
    // for name is undifined you can either use the old school funtction
    // or ommit the colon to make it a function of this body
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
person.greet();