// interface

// What is an interface
/**
 An interface describes the structure of an object
 */

/**  These two are the same */
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
/**  These two are the same */

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // `?` this is telling typescript that this is optional

  print?(persoName: string): void; // the question mark here - `?` this is telling typescript that this is optional
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 1;

  constructor(personName?: string) {
    if (personName) {
      this.name = personName;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase, this.name);
    } else {
      console.log("Hi! No Name");
    }
  }
}

// Creating a person/user
let user1: Greetable;
user1 = new Person("Bob");

user1.greet("Hi there");
console.log(user1);
console.log("------");
let user2: Greetable;
user2 = new Person();

user2.greet("Hi there");
console.log(user2);
// user1.name = "another name";
