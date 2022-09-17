const userName = "Thomas";

let age = 30;
age = 29;

let result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

if (age > 20) {
  let isOld = true;
  console.log(isOld);
}

console.log(result);

const adding = (a: number, b: number) => {
  console.log(a + b);
  return a + b + 2;
};

adding(10, 10);

const adding2 = (a: number, b: number, c: 2) => {
  console.log(a + b + c);
  a + b + c;
};

adding(10, 10);

// with this method we don't need to type the return key word. Is will auto infer it
const adding3 = (a: number, b: number) => a + b;

const printOutput: (output: string | number) => void = (output) =>
  console.log(output);

printOutput(adding3(5, 2));

// const button = document.querySelector("button");

// // if the button is clicked
// if (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// }

// More function stuff - adding default arguments - Here we see that we are setting the default value for b as 1
const adding4 = (a: number, b: number = 1) => a + b;
adding4(10);

// spread operators

const hobbies = [
  "Sports",
  "Some cooking",
  "Some reading",
  "Chilling",
  "Coding",
];
const activeHobbies = ["Basketball", "MMA"];

// push takes an unlimited amounts of arguments
activeHobbies.push("gym");
// This is the spread operator
activeHobbies.push(...hobbies);

const moreActiveHobbies = ["Boxing", "Kick boxing", ...activeHobbies];

// Spread operators also exist on objects
const person = {
  myName: "Thomas",
  myAge: 29,
};

// this pull's out all of the elements (key values) and sets it to copied
const copiedPerson = { ...person, height: "6ft" };

// Rest Parameters

const adding5 = (...numbers: number[]) => {
  // The reduce function loops through and array element and added all of them together
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};
const addedNumbers = adding5(5, 5, 5);
console.log("adding5", addedNumbers);

// Array and objects destructing

// *** destructing means that you are pulling elements out oan array or object

// - Array destructing
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log("hobbies: ", hobbies);
console.log("hobby1 :", hobby1);
console.log("hobby2: ", hobby2);
console.log("remainingHobbies: ", remainingHobbies);

// destructing objects

const { myName: myUserName, myAge } = person;
console.log(myUserName);
console.log(myAge);
