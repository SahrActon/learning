// Unknown is like working with any
// Any is the most flexible type in typescript, because it ignore all forms of type checks
// Unknown is a bit more strict compared to any because it has some type checking involved

let userInput: any;
let userName: string;

userInput = 5;
userInput = "Sahr";

// this works because we are checking the type here
if (typeof userInput === "string") {
  userName = userInput;
}

// Never - This function never turns a valid
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occurred", 500);
console.log(result);
