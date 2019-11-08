function square(num: number):number{
    return num*num;
}
console.log(square(10));

const squareFE = function (num: number):number {
    return num*num
};
console.log(squareFE(5));

//higher-order function
function add(a: number): Function {
    return function(b: number): number {
        return a + b;
    }
}

const add5 = add(5);
console.log(add5(3));
console.log(add5(10));