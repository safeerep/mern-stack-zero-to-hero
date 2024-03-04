// concat()
// indexOf()
// lastIndexOf()
// includes()
// join()
// reverse()
// sort()
// map()
// forEach()
// filter()
// reduce()
// some()
// every()
// find()
// findIndex()
// flat()
// flatMap()
// fill()
// ----------------------------------------------------------------------- //

// concat - to concat two arrays (also possible to concat a number to an array)
// const toConcat = [1,2,3,4]
// const toConcat = 3
// const arrayy: number[] = [9,8,4]
// console.log('concated array is', arrayy.concat(toConcat));

// indexOf && lastIndexOf - returns the index number if it is existing, otherwise -1;
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// console.log(array1.indexOf(30))
// console.log(array1.lastIndexOf(30))

// includes - to check the value is including in array or not - returns boolean value
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const including = array1.includes(1)
// console.log(including);

// join - to get all elements as a string
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const str = array1.join() 
// console.log(str);

// reverse() - to reverse the elements order in the array;
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const reversed = array1.reverse() 
// console.log(reversed);

// sort() - to sort the array;
const array1 = [10, 90, 20, 30, 40, 90, 50]
const sorted = array1.sort((a, b) => a-b) 
console.log(sorted);

// map() - iterate through the all elements and returns a new array with the same length;
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const newArray = array1.map((a) => a*2) 
// console.log(newArray);

// forEach() - iterate through all the elements but not returning something;
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const newArray = array1.forEach((num) => console.log('hello with ', num));
// console.log(newArray);

// filter() - returns a new array based on the condition giving;
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const newArray = array1.filter((num) => num%3 === 0);
// console.log(newArray);

// reduce() - returns a single value (common usecase is to get sum of array elements)
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const sum = array1.reduce((acc, num) => acc+num);
// console.log(sum);

// some() - to check is there have any elements matches with the condition - return boolean
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const have = array1.some((num) => num%11 === 0);
// console.log(have);

// every()- to check is there all the elements matches with the condition - return boolean
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const have = array1.every((num) => num%10 === 0);
// console.log(have);

// find()
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const found = array1.find((num) => num%10 === 0);
// console.log(found);

// findIndex()
// const array1 = [10, 90, 20, 30, 40, 90, 50]
// const foundAt = array1.findIndex((num) => num%10 === 0);
// console.log(foundAt);

// flat()
// const array1 = [10, [90, 10, [40, 70]], 20, 30, 40, [80], 90, 50]
// const flatten = array1.flat();
// console.log(flatten);

// flatMap()
// const array1 = [10, [90, 10, [40, 70]], 20, 30, 40, [80], 90, 50]
// const flatten = array1.flatMap((value) => value);
// console.log(flatten);

// fill()
// const array1 = [10, 20, 30, 40, 90, 50]
// const filled = array1.fill(2, 3, 0);
// console.log(filled);

