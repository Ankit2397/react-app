import { objectTypeSpreadProperty } from "@babel/types";

// ReactJS is an open-source JavaScript library used to build the user interface for Web Applications. 
// It is responsible only for the view layer of the application. 
// It provides developers to compose complex UIs from a small and isolated piece of code called "components.


// Available Scripts

// npm start

// npm test

// npm run build

// npm run eject

// Then to analyze the bundle run the production build then run the analyze script.

// npm run build
// npm run analyze
                                                                            


// #array of object

arr=[
    {name:"name1" ,email:"emai@gmail.com"},
    {name:"name2" ,email:"emai1@gmail.com"},
    {name:"name3" ,email:"emai2@gmail.com"}
]
console.log(arr);

// #Block Level Scope

{                             
    var a=10;
}

// #Function Level Scope

function func(){
    let a=10;
}
// #Global Level Scope

const a= 10;
function func(){

}

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished


// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// function printAll(){
//     printString("A")
//   #promises  .then(() => {
//       return printString("B")
//     })
//  #promises   .then(() => {
//       return printString("C")
//     })
//   }
//   printAll()


// A Promise is a JavaScript object that links producing code and consuming code

// function printAll(){
//     printString("A", () => {
//       printString("B", () => {
//         printString("C", () => {})
//       })
//     })
//   }
//   printAll()


// await and async


// async function printAll(){
//     await printString("A")
//     await printString("B")
//     await printString("C")
//   }
//   printAll()