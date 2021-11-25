function anotherFunction() { /*..*/ }

var anotherObject = {
    c: true
};

var anotherArray = [];

var myObject = {
    a: 2,
    b: anotherObject,	// reference, not a copy!
    c: anotherArray,	// another reference!
    d: anotherFunction
};

var shallowClone = Object.assign( {}, myObject );
console.log("shallowClone.a "+shallowClone.a);
console.log("shallowClone.b === anotherObject = "+ (shallowClone.b === anotherObject));
console.log("shallowClone.c === anotherArray = "+ (shallowClone.c === anotherArray));
console.log("shallowClone.d === anotherFunction = "+ (shallowClone.d === anotherFunction));

var deepClone = JSON.parse( JSON.stringify( myObject ) );

console.log("deepClone.a "+deepClone.a);
console.log("deepClone.b === anotherObject = "+ (deepClone.b === anotherObject));
console.log("deepClone.c === anotherArray = "+ (deepClone.c === anotherArray));
console.log("deepClone.d === anotherFunction = "+ (deepClone.d === anotherFunction));
