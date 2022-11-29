// Code goes here!

//  Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersect Name from admin and employee
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Sahr",
  privileges: ["create-server", "create-users"],
  startDate: new Date(),
};

// this is a union type
type Combinable = string | number;

// numeric union type
type Numeric = number | boolean;

// This will build an intersection of Combinable and Numeric
// we are combining these two to build a new universal type
type Universal = Combinable & Numeric;

// string union type
type The_string = string;

// --------------------------------------------------------------------------------------------------
// Type guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(add("hello", "How are you "));
console.log(add(2, 6));

// UnKnownEmployee is either Employee or Admin
type UnKnownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnKnownEmployee) {
  console.log("Name: " + employee.name + "\n");
  if ("privileges" in employee) {
    console.log("Privileges: " + employee.privileges + "\n");
  }
  if ("startDate" in employee) {
    console.log("Start Date: " + employee.startDate + "\n");
  }
}

const e2: UnKnownEmployee = {
  name: "Sahr",
  privileges: ["create-server", "create-users"],
  startDate: new Date(),
};

printEmployeeInformation(e2);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo + ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive(); // everyone can do this

  // we can do if x in y e.g
  //   if ("loadCargo" in vehicle) {
  //     console.log("Number of things to load: " + vehicle.loadCargo(100) + "\n");
  //   }

  // we can also use instance of - This is more elegant
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

const v3: Vehicle = new Truck();
useVehicle(v3);

//--------------------------------------------------------------------------------------------------
/*** Discriminated Unions - Type guards **/

// An interface describe an object - Interfaces are used to define/describe an object
// An interface can also be used as a contract that a class must adhear to

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;


function moveAnimal(animal: Animal){
    console.log(`moving with speed ${animal.}`)
}