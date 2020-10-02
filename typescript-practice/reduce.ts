const numbers: number[] = [5, 2, 3];

let result: number = numbers.reduce(
    (total: number, num: number) => total + num , 2);

console.log(result);