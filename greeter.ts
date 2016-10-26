// tsconfig.json file required in order for tsc to properly compile code to javascript.

// Type annotation

function greeter(person: string) { //type annotation dictates what type the parameter may be.
  return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);

// Interfaces

interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user2 = { firstName: "Jane", lastName: "User"}

document.body.innerHTML = greeter(user);

// Classes

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter3(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user3 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter3(user3);
