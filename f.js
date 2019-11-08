function square(num) {
    return num * num;
}
console.log(square(10));
var squareFE = function (num) {
    return num * num;
};
console.log(squareFE(5));
//higher-order function
function add(a) {
    return function (b) {
        return a + b;
    };
}
var add5 = add(5);
console.log(add5(3));
console.log(add5(10));
