var myObject = {
    // define a getter for `a`
    get a() {
        return this._a;
    },

    // define a setter for `a`
    set a(val) {
        this._a = val * 2;
    }
};

myObject.a = 2;

console.log(myObject.a); // 4
