var myObject = {
    a: 2
};

console.log(Object.getOwnPropertyDescriptor( myObject, "a" ));
// {
//    value: 2,
//    writable: true,
//    enumerable: true,
//    configurable: true
// }

Object.defineProperty( myObject, "a", {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: false
} );

console.log(Object.getOwnPropertyDescriptor( myObject, "a" ));
