// tsc app -w( this starts the application in watch mode. This means any changes to the file that you are running will automatically get recompiled)
let age: number = 30;
const userName = "Sahr Thomas Acton";
console.log(userName);
const appId = "abc";

// selecting the first button that we find,
// the "!" tells typescript not to worry, the objects will exist

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

const button = document.querySelector("button")!;

function clickHandler(message: string, age: number) {
  console.log("Clicked" + message);
}

button.addEventListener(
  "click",
  clickHandler.bind(null, "How are you doing", 30)
);
