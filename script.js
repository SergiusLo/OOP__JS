"use strict";

// const Person = function (name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   // Никогда не делать этого
//   // this.printAge = function() {
//   //   console.log(2021 - this.birthYear);
//   // };
// };
// const Anna = new Person("Anna", 1999);
// console.log(Anna);
// const Serj = new Person("Serj", 1999);
// console.log(Serj);

// // const person = function (name, birthday) {
// //   console.log(name, birthday);
// // };
// // person("jack", 1400);
// // person("kell", 1300);
// //Прототипы
// console.log(Person.prototype);

// Person.prototype.printAge = function () {
//   console.log(2022 - this.birthday);
// };

// Anna.printAge();
// console.log(Person.prototype.isPrototypeOf(Anna));

// Person.prototype.creatureClass = "Mammal";
// console.log(Anna, Serj);
// console.log(Anna.hasOwnProperty("birthday"));
// console.log(Anna.hasOwnProperty("creatureClass"));
//Class
//Class expration
// const Person = class {};
//Class declaration
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.firstName} !`);
//   }
// }

// const jack = new Person("Jack", 2000);
// console.log(jack);
// jack.printAge();
// console.log(jack.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(jack) === Person.prototype);
// jack.greet();
//Setter & Getters
// const account = {
//   owner: "youra",
//   transactions: [300, 500, -100, 600],

//   lastTransaction() {
//     return this.transactions.slice(-1).pop();
//   },
// };

// console.log(account.lastTransaction());

const account = {
  owner: "youra",
  transactions: [300, 500, -100, 600],

  get lastTransaction() {
    return this.transactions.slice(-1).pop();
  },

  set lastTransaction(trans) {
    this.transactions.push(trans);
  },
};

console.log(account.lastTransaction);
account.lastTransaction = 100;
console.log(account.transactions);

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  printAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.fullName} !`);
  }

  get age() {
    return 2021 - this.birthYear;
  }
  //Установить значение в уже существующем свойстве
  set fullName(personName) {
    if (personName.includes(" ")) {
      this._fullName = personName;
    } else {
      console.log("Не полное имя");
    }
  }
  get fullName() {
    return this._fullName;
  }
}

const jack = new Person("Jack", 2000);
console.log(jack.age);
