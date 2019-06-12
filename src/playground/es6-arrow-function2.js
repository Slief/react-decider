// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    // console.log(arguments); 
    return a + b;
}

// console.log(add(5,2,1000));

const addArrow = (a, b) => {
    // console.log(arguments); // arguments is not defined in an arrow function. this would throw an error
    return a + b;
}
// console.log(addArrow(50,12));

// this keyword - no longer bound
// arrow function does not bind its own 'this' value

const user = {
    name: 'Brent',
    cities: ['SL', 'IC', 'Chicago', 'OP'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.cities);
        // All 3 options the same.  last one easiest to read
        // Option 1
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city + '!';
        // });
        // return cityMessages;

        // Option 2
        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city + '!';
        // });

        // Option 3
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    // numbers: array of numbers
    // multiplyBy: single number
    // multiply: return a new array where each number in array was mulitplied by mulitplyBy
    numbers: [0, 6, 8, 33],
    mulitplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.mulitplyBy); 
    }
}

console.log(multiplier.multiply());