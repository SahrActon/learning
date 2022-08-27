const person: {
  name: string; // this is a number
  age: number; // this is a number
  hobbies: string[]; // this is an array
  role: [number, string]; // this marks a tuple - this is a special construct
} = {
  name: "Sahr", // 
  age: 28, // number
  hobbies: ["MMA", "Basketball"], // array
  role: [2, "author"], // tuple
};

person.role = [0, 'admin']

let favoriteActivities: string[];
favoriteActivities = ["MMA", "Basketball"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.name);
