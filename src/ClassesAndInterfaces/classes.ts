/**
 * What is object oriented programming?
 *
 * - work with (real life) entities in your code
 *
 * - Objects
 *  - the things you work with in code
 *  - instances of classes (=based on classes)
 *  - class-based creation is an alternative to using object literals.
 *
 * - Classes
 *  - blueprints for objects
 *  - define how objects look like , which properties and methods they have
 *  - classes make creation multiple, similar objects much easier
 */

// ******* creating a first class
class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  // shorthand initialization
  constructor(private readonly id: string, public name: string) {
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe() {
    console.log(`Department (${this.id}): ` + this.name);
  }

  /**
   * below help to ensure the this.name is filled when you called with another copy of object (see accountingCopyOne)
   */
  // describe(this: Department) {
  //   console.log("Department: " + this.name);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("1", "Accounting");
console.log(accounting);

// output: Department: Accounting
accounting.describe();

// this is pointing to where is being called, hence this will return undefined
// output: Department: undefined;
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();

// const accountingCopyOne = { name: "Dummy", describe: accounting.describe };
// accountingCopyOne.describe();

// ***** private and public access modifies
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// private so you can't access employee directly such as below:
// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation();

// public properties do not need to be label by default.

// ***** shorthand initialization
/**
 * two ways to create constructor
 *
 * constructor(n: string) { this.name = n; }
 *
 * constructor(private id: string, public name: string) {}
 *
 */

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const infoTechDeparment = new ITDepartment("information technology", ["admin"]);
console.log(infoTechDeparment);

infoTechDeparment.describe();

class AccountingDepartment extends Department {
  private lastReport: string;

  // encapsulate the idea to return the value
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report data");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const acc = new AccountingDepartment("d2", []);

acc.addReport("Something went wrong");
acc.printReport();

// **** overriding properties and protected modifiers

/**
 * if you try to access a private property from Department class in AccountingDepartment class you will get error because it is only accessible by where it was defined
 *
 * to avoid the above, we can use protected instead of private.
 */

acc.addEmployee("Ken");
acc.printEmployeeInformation();

// ***** getters and setters
const report = acc.mostRecentReport;
console.log(report);

// acc.mostRecentReport = "";
acc.mostRecentReport = "year end report";

// ***** static methods and properties
/**
 * can call static methods directly on the class without "new" keyword
 */
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

/**
 * for you to access the static method within the class you need to the class.fiscalYear instead of this.fiscalYear
 */

// ***** abstract classes

/**
 * you have to append abstract to the class name and then the describe method like so
 *
 * abstarct class Department {
 *    abstract describe(this: Department) : void;
 * }
 *
 * abstract idea is to have every class set it's own decribe method when extending Department
 *
 * a class that can't be instantiated but has to be extended
 */

// ***** singleton and private contructors

/**
 *  the idea is to only create one instance of the class, you can do so by creating a static getInstance function to check
 *
 * you will only ever have one instance of a singleton class
 */

// ***** inheritance

/**
 * allows you to share some common functionality and yet create more specialized blueprints
 */
