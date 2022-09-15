function add(n1: number, n2: number) {
  return n1 + n2;
}

// this means that the function  statement does not return anything
function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(add(10, 10));

// this is a valid type in type script
let combineValues;

combineValues = add;

console.log(combineValues);

// We are creating a function -
// Here are telling typescript that we want A variable that takes in two parameters and returns a number
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;

function addAndHandle(n1: number, num2: number, cb: (num: number) => void) {
  const Result = n1 + num2;
  cb(Result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
