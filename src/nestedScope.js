var a = 2; // global scope

function foo(){ // function foo scope
    var b = 3;
    function bar(){ // function bar scope
        var c = 4;
        function baz(){ // function baz scope
            var d = 5;
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
        }
        baz();
    }
    bar();
}

foo();
