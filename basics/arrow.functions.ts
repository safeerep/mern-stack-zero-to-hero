// differences from normal funtions to arrow functions

// 1-this binding
const personObject = {
    user: "safeer",
    greet: (): void => {
        console.log(`good evening from arrowFunction`, this.user);
    }
}
const personObjectWithNormalFunction = {
    user: "safeer",
    greet: function ():void {
        console.log(`good evening from normal function`, this.user);
    }
}
const greet1 = personObject.greet;
const greet2 = personObjectWithNormalFunction.greet;

personObject.greet()
// only this call will prints the username;
personObjectWithNormalFunction.greet()
greet1()
greet2()

// 2-no arguments object
const arrowFuntion = (): void => {
    console.log(`yes its an arrow function, here we can't access arguments`);
}
function normalFunction (name: string) {
    // arguments
    console.log(arguments);
}
normalFunction("safeer ep")

// 3-hoisting not possible

// hoistingWithArrow() - when we will try to call like this, we will get the following error
// block-scoped variable 'hoistingWithArrow' used before its declaration.ts(2448)
// arrowFunctions.ts(40, 7): 'hoistingWithArrow' is declared here.
// Variable 'hoistingWithArrow' is used before being assigned.ts(2454)
// const hoistingWithArrow: () => void
const hoistingWithArrow = () => {
    console.log(`it will not be hoisted`);
}

// we will not get an error because of happening hoisting;
hoistingWithNormalFunction()
function hoistingWithNormalFunction () {
    console.log(`it is hoisted`);
}

// 4-not usable as constructors

// we can have normal functions as constructor functions like following
// but not in the case of arrow functions;
function Person( name: string) {
    this.name = name;
}
const person1 = new Person('safeer')
