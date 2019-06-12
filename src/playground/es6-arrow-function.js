// function squareAlt(x) {   // this is the same as the one right below this.
//     return x * x;
// }  
// const square = function (x) {
//     return x * x;
// };

// // arrow functions are anonymous so if you want to refernece them, you must assign them to a variable (const)

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

const getFirstName = (name) => {
    return name.split(' ')[0]
}

const getFirstNameArrow = (name) => name.split(' ')[0];

console.log(getFirstName('Billy Smythe'));
console.log(getFirstNameArrow('Tom Jones'));