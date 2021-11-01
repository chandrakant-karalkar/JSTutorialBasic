function foo() {
    a = 2;    // Undeclared Variable
    var b = 3; // Declared Variable
}

function bar() {
    console.log(a);
    // console.log(b);
}
foo();
bar();
