// const person: {
//     name: string; // this is a number
//     age: number; // this is a number
//     hobbies: string[]; // this is an array
//     role: [number, string]; // this marks a tuple - this is a special construct
//   } = {
//     name: "Sahr", //
//     age: 28, // number
//     hobbies: ["MMA", "Basketball"], // array
//     role: [2, "author"], // tuple
//   };

enum Role {
  ADMIN,
  READY_ONLY,
  AUTHOR,
  STUDENT = "STUDENT",
  ROOT = 0,
}

const person = {
  name: "Sahr", //
  age: 28, // number
  hobbies: ["MMA", "Basketball"], // array
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["MMA", "Basketball"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
} else {
  console.log("is not author");
}
