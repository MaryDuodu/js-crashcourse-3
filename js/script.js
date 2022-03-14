// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);


// // break and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five")
//         continue;
//     }
//     console.log(i);
// }


//function
function myself() {
    console.log("My name is " , name);
}


//function with parameter
function myself(name) {
    console.log("My name is " , name);
}

myself("John Doe");
myself("Mary Doe");
myself("Mercy Doe");
myself();
myself();
myself();
myself();

function add(x,y) {
    // let sum = x + y;
    let sum = x * y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);


//function with a return value

function add(x,y) {
    let sum = x + y;
    // let sum = x * y;
    return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

//arrow function
// if the body code involves more than a line, use the "{}". otherwise, use this
let divide = (a, b) => a/b;
let multiply = (a, b) => {
    let sum = a * b;
    return sum;
};
console.log(divide(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 15));

//Higher Order Function
//Is a function that takes a function as a parameter
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let  doubles = numbers.map((number) => number + numbers);
let squares = numbers.map((number) => number * number);
console.log(squares)
console.log(doubles)

let evens = numbers.filter((number) => number % 2 ===1);
console.log(evens);
let odd = numbers.filter((number) => number % 3 ===1);
console.log(odd);

let five = numbers.find((num) => num === 11);
console.log(five);

// String
// any character that is in  quote or "".
let sentence = "The quick brown fox jumps over the lazy dog"
console.log(sentence.length);
// console.log(sentence.charCodeAt(10));
//concat - means to jion.
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("lazy"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("q"));
console.log(sentence.indexOf("brown"));
console.log(sentence.indexOf("o" ,"13"));
 console.log(sentence.padStart(100));
 console.log(sentence.padEnd(2));
//padding - to give an evenly assigned spaces at the begining and at the end.
//padStart - for the begining and padEnd for the end.

console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
//subString is similar to slice
console.log(sentence.substring(20, 30));
let email = "kofi@email.com";
console.log(email.split("@"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
let password = "@243teghsgsfb";
console.log(password.trim())

