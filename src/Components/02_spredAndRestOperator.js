
// Spread operator example in an Array
const numbers = [1,2,3];
const newNumbers = [...numbers,4];



// Spread operator example in an object
const person = {
    name:'Max'
};

const newPerson = {
    ...person,
    age:28
};

console.log (newPerson);

// Rest operator in an argument list received in a function

const funtionFilter = (...args) => {
    return args.filter((arg) => arg === 1);
}

console.log(filter(1, 2 , 3));
// the result will be [3]
