var nameVar = 'Brent';
var nameVar = 'Sam';            // bad debugging nightmare
console.log('nameVar', nameVar)

let nameLet = 'Suzie';
nameLet = 'Mark';               // ok
// let nameLet = 'Tom';            // throws error
console.log('nameLet', nameLet)

const nameConst = 'Zach';
// const nameConst = 'Joni';      // throws error
// nameConst = 'Zach';            // throws error
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Shelby';    //  let, var, const defined here are scoped to the function
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping
//    - var variables are function scoped 
var fullName = 'Bob Smith';
if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);