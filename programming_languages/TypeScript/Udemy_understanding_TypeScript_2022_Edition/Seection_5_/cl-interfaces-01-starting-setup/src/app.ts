// Code goes here!
class Department {
  // Fields
  // private id: string;
  // private name: string = "InsertName";
  // private means that only the class has access to the field(s)
  // protected means that properties are accessible within from other classes as well as long as they inherit from the base class

  protected employees: string[] = []; // here we are creating an array of string employee's

  // function tied to the class - constructor
  // this is a shortcut of creating properties of the class, This will save you a bit of time because it means that
  // you don't have to create the Fields before hand
  constructor(protected id: string, public name: string) {}

  // this is a function that belongs to the class
  describe(this: Department) {
    console.log(`Your department is:  (${this.id}): (${this.name})`);
  }

  // here we are creating a function that takes a new employee and add's it to the array
  addEmployee(employee: string) {
    // this.id = "002"; // this will not work because our id attribute is a read only file
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(
      "These are the numbers of employees that we have:",
      this.employees.length
    );
    console.log("This is our employees", this.employees);
  }
}

// Creating specialized departments
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // super calls the constructor of the base/parent class
    this.admins = admins;
  }
}

// Creating specialized departments
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[], private charted: boolean) {
    super(id, "Accounting"); // super calls the constructor of the base/parent class
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
  getAccountId() {
    return this.id;
  }

  isAccountCharted() {
    // condition ? exprIfTrue : exprIfFalse
    console.log(
      this.charted
        ? `Account: ${this.id} is charted`
        : `Account: ${this.id} is not charted`
    );
    return this.charted ? "Is charted" : "Is not charted";
  }

  addEmployee(name: string) {
    if (name === "Not_Sahr") {
      return;
    }
    this.employees.push(name);
  }
}

// creating a new department object
const ITDepartment_User1 = new ITDepartment("001", [
  "super_admin_1",
  "super_admin_2",
]);

// adding employees using methods
ITDepartment_User1.addEmployee("Sahr");
ITDepartment_User1.addEmployee("Alex");

// Todo  - adding employees using its attributes - Never do this
// computing.employees[2] = "Jacob";

console.log(ITDepartment_User1);
ITDepartment_User1.describe();
ITDepartment_User1.name = "NEW NAME";
ITDepartment_User1.printEmployeeInformation();

console.log(ITDepartment_User1);

// Creating new account department
const fakeReport1 = "First report";
const fakeReport2 = "Second report";

const accountant1 = new AccountingDepartment(
  "accountant_1",
  [fakeReport1, fakeReport2],
  true
);

accountant1.isAccountCharted();
accountant1.printReports();

accountant1.addEmployee("Sahr");
accountant1.addEmployee("Not_Sahr");
accountant1.printEmployeeInformation();
//
// const computingCopy = { name: "Thomas", describe: computing.describe };
// computingCopy.describe();
/**
 The 'this' keyword refers back to the concrete instance of the class
 this. allows us to access all of the properties of the class

 the 'this' key word is responsible for calling a method 
 */
