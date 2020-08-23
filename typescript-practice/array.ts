let fibonacci: number[] = [1, 1, 2, 3, 5],
    stringArray: string[] = ['a', 'b', 'c'];

console.log(fibonacci, stringArray);

let fibonacciGeneric: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
    [index: number]: number;
}

let fibonacciNoArray: NumberArray = [1, 1, 2, 3, 5];

console.log(fibonacciGeneric, fibonacciNoArray);

function sum() {
    let args: IArguments = arguments;
}

function sumI() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments
}