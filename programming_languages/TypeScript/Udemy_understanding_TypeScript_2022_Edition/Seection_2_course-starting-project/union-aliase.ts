// we are creating our own custom type and we are using type union to have multiple types
type Combinable = number | string;

// here we are specifying the type that we want, in this case we are setting the types to be strings.(Any other string will be allowed)
type ConversionDescriptor = "asNumber" | "asText";

/***
 ** Type Aliases & Object Types  **
 Type Aliases can be used to create your own types. You are not limited to storing union types though - 
 You can also provide an alias to a (possible complex) object type

 e.g. 
 
type User = {name: string, age: number};
const u1: User = {name: 'Thomas', age: 30}// this works! 
 * */

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "asNumber"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "asNumber") {
  //     return +result; // this plus at the beginning converts/cast/parse it results as a number
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(10, 30, "asNumber");
console.log("This is the combined results num is: " + combineAges);

const combineAgesAsString = combine("10", "30", "asNumber");
console.log("This is the combined results num is 2: " + combineAgesAsString);

const combineNames = combine("Thomas", "Acton", "asText");
console.log("Your name is: " + combineNames);

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hello, I'm " + user.name);
}

function isOlder(user: User, checkAge: number) {
  let isOlderResult = checkAge > user.age;
  console.log("This is the result from older" + isOlderResult);
  return isOlderResult;
}
// Test
//greet
const u1: User = { name: "Thomas", age: 30 }; // this works!
greet(u1);

isOlder(u1, 20);
