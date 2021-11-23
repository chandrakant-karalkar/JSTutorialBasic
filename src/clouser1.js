// function foo() {
//     var a = 2;
//
//     function bar() {
//         console.log(a);
//     }
//
//     return bar;
// }
//
// var baz = foo();
//
// baz();

function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    bar(baz);
}
foo();
function bar(fn) {
    fn();
}
