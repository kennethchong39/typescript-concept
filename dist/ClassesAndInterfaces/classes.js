"use strict";
/**
 * What is object oriented programming?
 *
 * - work with (real life) entities in your code
 * - to reasons about your code
 * - a programming model that organizes code around objects
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
    // shorthand initialization
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
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
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const accounting = new Department("1", "Accounting");
console.log(accounting);
// output: Department: Accounting
accounting.describe();
// this is pointing to where is being called, hence this will return undefined
// output: Department: undefined;
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
// reference #40
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
// ***** readonly property
// you can add it to the constructor
// provide extra safety to make it really clear certain property should only be initialized once and shouldn't chnage thereafter
class ITDepartment extends Department {
    constructor(id, admins) {
        // calls the constructor base class
        super(id, "IT");
        this.admins = admins;
    }
}
const infoTechDeparment = new ITDepartment("information technology", ["admin"]);
console.log(infoTechDeparment);
infoTechDeparment.describe();
class AccountingDepartment extends Department {
    // encapsulate the idea to return the value
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report data");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
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
// allow you to get access to private property if needed
const report = acc.mostRecentReport;
console.log("report", report);
// this is how you pass variable as setter
// acc.mostRecentReport = "";
acc.mostRecentReport = "year end report";
// ***** static methods and properties
/**
 * can call static methods directly on the class without "new" keyword
 */
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
/**
 * for you to access the static method within the class you need to call the class.fiscalYear instead of this.fiscalYear
 * static methods is detacted from instances
 * allow access static method or properties by calling the class "name" instead of "this."
 */
// ***** abstract classes
/**
 * you have to append abstract to the class name and then the describe method like so
 *
 * abstract class Department {
 *    abstract describe(this: Department) : void;
 * }
 *
 * class ITDepartment extends Department {
 *    describe() {
 *        console.log('IT Department');
 *    }
 * }
 *
 * abstract idea is to have every class (required) set it's own decribe method when extending Department
 *
 * a class that can't be instantiated but has to be extended
 */
// ***** singleton and private contructors
/**
 *  the idea is to only create one instance of the class, you can do so by creating a static getInstance function to check
 *
 * example: accountant class
 *
 * you will only ever have one instance of a singleton class
 */
// ***** inheritance
/**
 * allows you to share some common functionality and yet create more specialized blueprints
 */
