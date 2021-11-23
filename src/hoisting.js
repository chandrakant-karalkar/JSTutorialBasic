// variable hoisting 1
// var a = 2;
//
// console.log( a );

// variable hoisting 2

// console.log( a );
//
// var a = 2;

// function hoisting

// foo();
//
// function foo() {
//     var a = 2;
//     console.log(a);
//     console.log(b);
//     var b = 3;
// }



// foo(); // not ReferenceError, but TypeError!
//
// var foo = function bar() {
//     // ...
// };


// subsequent function declarations do override previous ones.
// foo();
//
// function foo() {
//     console.log(1);
// }
//
// var foo = function () {
//     console.log(2);
// };
//
// function foo() {
//     console.log(3);
// }
