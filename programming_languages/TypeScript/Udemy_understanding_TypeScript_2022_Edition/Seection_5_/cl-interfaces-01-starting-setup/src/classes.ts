// Code goes here!
// class Department {
abstract class Department {
  // Fields
  // private id: string;
  // private name: string = "InsertName";
  // private means that only the class has access to the field(s)
  // protected means that properties are accessible within from other classes as well as long as they inherit from the base class

  static fiscalYear = 2020;

  protected employees: string[] = []; // here we are creating an array of string employee's

  // function tied to the class - constructor
  // this is a shortcut of creating properties of the class, This will save you a bit of time because it means that
  // you don't have to create the Fields before hand
  constructor(protected readonly id: string, public name: string) {}

  // this is a function that belongs to the class
  abstract describe(this: Department): void;

  // Static properties methods - this means that you don't have to create an instance of the class
  // Global constructs -
  // you can call a static method directly from the class without having to use the word new or create an instance of a given class
  static createEmployee(name: string) {
    return { name: name };
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

const employee1 = Department.createEmployee("Mr_Acton");
console.log("Print 1", employee1);
console.log("Print 2", employee1.name);
console.log(Department.fiscalYear);

// Creating specialized departments
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // super calls the constructor of the base/parent class
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - id " + this.id);
  }
}

// Creating specialized departments
class AccountingDepartment extends Department {
  private lastReport: string;
  // This is using the singleton pattern
  private static instance: AccountingDepartment; // creating a static instance of the class

  // getters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  // set
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No value was passed through");
    }
    this.addReport(value);
  }
  private constructor(
    id: string,
    private reports: string[],
    private charted: boolean
  ) {
    super(id, "Accounting"); // super calls the constructor of the base/parent class
    this.lastReport = reports[0];
  }

  // This is using the singleton pattern
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("account_002", [], false);
    return this.instance;
  }

  // We are over riding the describe method from the the department class
  describe() {
    console.log("Account department - id is: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text; // this is hold the last report that was added
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

// const accountant1 = new AccountingDepartment("accountant_1", [], true);
//console.log(accountant1.mostRecentReport); // this should return an error

// This is using the singleton pattern
const accountant1 = AccountingDepartment.getInstance();
const accountant2 = AccountingDepartment.getInstance(); // this will the same as the one above

console.log(accountant1, accountant2);
accountant1.mostRecentReport = "this is our most recent report";

accountant1.addReport(fakeReport1);
accountant1.addReport(fakeReport2);
console.log(accountant1.mostRecentReport); // this should return two reports
accountant1.describe();
// accountant1.isAccountCharted();
// accountant1.printReports();

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
