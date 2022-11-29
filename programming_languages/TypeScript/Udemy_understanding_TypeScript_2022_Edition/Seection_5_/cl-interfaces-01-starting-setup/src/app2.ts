// Creating a new type here
type AddFnType = (a: number, b: number) => number;

let add: AddFnType;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// Creating a function interface

// Function custom types
interface AddFn {
  (a: number, b: number): number;
}

let adding: AddFn;

adding = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    }
  }
}

let user1: Greetable;

user1 = new Person2("Bob Smith");
user1.greet("Hello I am ");

export {};
