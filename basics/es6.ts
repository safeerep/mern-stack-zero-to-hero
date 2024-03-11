// let and const
// scope - block
// arrow functions
// default parameter
// rest parameter
// spread operator
// template literals
// destructuring
// modules
// classes
// generators
// set, map
// Object property assignment
// find and findIndex

// block scope for let and const;
// {
//     // it will not get into out of braces;
//     let userName: string = "safeer"
//     let user: string = "safeer"
// }
// console.log();


// arrow functions
// const arrowFuncExample = () => {
//     console.log(`ok arrow`);
// }
// arrowFuncExample()

// default parameter
// const defaultPara = ( userName: string = "safeer", address: string = "from masterpadi") => {
//     console.log(`username is: ${userName} \n address is: ${address}`);
// }
// defaultPara("jabir")

// rest parameter
// const funcForRest = ( ...rest: number[]) => {
//     console.log(rest);
// }
// funcForRest(1,2,3,4,5)

// spread operator
// const firstArray: number[] = [1,2,3,4]
// const secondArray: number[] = [5,6,7,8]
// spreading
// const finalArray: number[] = [...firstArray, ...secondArray]
// console.log(finalArray);

// template literals
// const personName: string = "safeer ep"
// console.log(`name of the person is ${personName}`);

// destructuring
// array 
// const [a, b, ...c] = [1,2,3,4,5,6]
// console.log(c);
// console.log(b);
// console.log(a);
// object
// const obj = {
//     person: "safeer",
//     from: "masterpadi",
//     age: "21",
//     stack: "MERN",
// }
// const { age, ...allRemaining } = obj;
// console.log(allRemaining);

// classes
// class FirstClass {
//     public name: string;
//     public address: string;
//     constructor (name: string, address: string) {
//         this.name = name
//         this.address = address
//     }

//     getPerson () {
//         console.log(this.name, ":", this.address);
        
//     }
// }

// const obj1 = new FirstClass("safeer", "mern stack dev, mlp")
// obj1.getPerson()

// generators
// function *generatorFunction () {
//     let i: number =0;
//     while(i < 10) {
//         i++;
//         yield i;
//     }
// }
// const generate = generatorFunction()
// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next());

// set
// let newSet = new Set();
// newSet.add(1)
// console.log(newSet.size);
// console.log(newSet.has(1));
// map
// let newMap = new Map()
// newMap.set("user", "safeer")
// console.log(newMap.get("user"));

// Object property assignment
// let obj: {
//     first: () => void; 
//     a?: number;
//     b?: number;
//     c?: number;
//     d?: number;
// } = {
//     first: () => {
//         console.log(`from first`);
//     }
// }
// const obj2 = { a: 1, b: 2 }
// const obj3 = { c: 3, d: 4 }
// Object.assign(obj, obj2, obj3)
// console.log(obj.a);

// find and findIndex
// console.log([1,2,4,5].find((element) => element === 4))
// console.log([1,2,4,5].findIndex((element) => element === 4))