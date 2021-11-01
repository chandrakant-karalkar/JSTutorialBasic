var a = 2;

function foo(){
    var b = 3;
    function bar(){
        var c = 4;
        function baz(){
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
