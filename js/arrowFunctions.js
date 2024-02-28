// differences from normal funtions to arrow functions
var _this = this;
// 1-this binding
var personObject = {
    user: "safeer",
    greet: function () {
        console.log("good evening from arrowFunction", _this.user);
    }
};
var personObjectWithNormalFunction = {
    user: "safeer",
    greet: function () {
        console.log("good evening from normal function", this.user);
    }
};
var greet1 = personObject.greet;
var greet2 = personObjectWithNormalFunction.greet;
personObject.greet();
// only this call will prints the username;
personObjectWithNormalFunction.greet();
greet1();
greet2();
// 2-no arguments object
var arrowFuntion = function () {
    console.log("yes its an arrow function, here we can't access arguments");
};
function normalFunction(name) {
    // arguments
    console.log(arguments);
}
normalFunction("safeer ep");
// 3-hoisting not possible
// hoistingWithArrow() - when we will try to call like this, we will get the following error
// block-scoped variable 'hoistingWithArrow' used before its declaration.ts(2448)
// arrowFunctions.ts(40, 7): 'hoistingWithArrow' is declared here.
// Variable 'hoistingWithArrow' is used before being assigned.ts(2454)
// const hoistingWithArrow: () => void
var hoistingWithArrow = function () {
    console.log("it will not be hoisted");
};
// we will not get an error because of happening hoisting;
hoistingWithNormalFunction();
function hoistingWithNormalFunction() {
    console.log("it will hoisted");
}
// 4-not usable as constructors
