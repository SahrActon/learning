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

// By Convention ENUMS stat with a capital letter, It is also common that all of the values are Capitalized
enum UserRole {
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
  role: UserRole.ADMIN, // this is using enum
  role2: [2, "Author"], // this is a tuple - Tuples are specials array with a fix number of elements and types
};

person.role2 = [20, "h"];

let favoriteActivities: string[];
favoriteActivities = ["MMA", "Basketball"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === UserRole.AUTHOR) {
  console.log("is author");
} else {
  console.log("is not author");
}
