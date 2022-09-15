interface Person {
  name: string;
  age: number;

  greet(parse: string): void;
}
// using our interface as a type
let user1: Person;

user1 = {
  name: "thomas",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};
