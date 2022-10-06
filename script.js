"use strict";

// const { count } = require("console");

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

// const account = {
//   owner: "youra",
//   transactions: [300, 500, -100, 600],

//   get lastTransaction() {
//     return this.transactions.slice(-1).pop();
//   },

//   set lastTransaction(trans) {
//     this.transactions.push(trans);
//   },
// };

// console.log(account.lastTransaction);
// account.lastTransaction = 100;
// console.log(account.transactions);

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.fullName} !`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }
//   //Установить значение в уже существующем свойстве
//   set fullName(personName) {
//     if (personName.includes(" ")) {
//       this._fullName = personName;
//     } else {
//       console.log("Не полное имя");
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jack = new Person("Jack", 2000);
// console.log(jack.age);
// //Статические методы
// const Human = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Human.highFive = function () {
//   console.log("High five");
// };
// Human.highFive();

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   printAge() {
//     console.log(2021 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.fullName} !`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }
//   static highFive() {
//     console.log("High five");
//   }
// }

// Person.highFive();
////////////////////////////////////////////////////////////////////
//Object create()
// const PersonProto = {
//   printAge() {
//     console.log(2021 - this.birthYear);
//   },
// };

// const jack = Object.create(PersonProto);

// jack.name = "Jack";
// jack.birthYear = 2000;

// jack.printAge();
//Наследование
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.printAge = function () {
//   console.log(2021 - this.birthYear);
// };
// const Student = function (firstName, birthYear, dept) {
//   Person.call(this, firstName, birthYear);
//   this.dept = dept;
// };
// //Связываем прототипы
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I study at the "${this.dept}" department`
//   );
// };

// const jack = new Student("Jack", 2000, "Programming");
// console.log(jack);
// jack.introduce();
// jack.printAge();

// console.log(Object.getPrototypeOf(jack));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)));

// console.log(jack instanceof Student);
// console.log(jack instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
//Наследование 'Классов' Классы ES6
// class Person {
//   constructor(fullName, birtYear) {
//     this.fullName = fullName;
//     this.birtYear = birtYear;
//   }
//   printAge() {
//     console.log(2021 - this.birtYear);
//   }
//   greet() {
//     console.log(`Hello my name is ${this.fullName}`);
//   }
//   get age() {
//     return 2021 - this.birtYear;
//   }
//   set fullName(personName) {
//     if (personName.includes(" ")) {
//       this._fullName = personName;
//     } else {
//       console.log("Не полное имя");
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static highFive() {
//     console.log("High five!");
//   }
// }

// class Student extends Person {
//   constructor(fullName, birtYear, dept) {
//     //Записать в самом начале обязательно
//     super(fullName, birtYear);
//     this.dept = dept;
//   }
//   itroduce() {
//     console.log(
//       `My name is ${this.fullName} and I study at the "${this.dept}" department`
//     );
//   }
//   greet() {
//     console.log(`Меня зовут ${this._fullName} и я студент! `);
//   }
// }

// const jack = new Student("Jack Holl", 2001, "Programming");
// console.log(jack);
// jack.itroduce();
// jack.greet();

//Наследование классов Object.create()
// const PersonProto = {
//   printAge() {
//     console.log(2021 - this.birthYear);
//   },
//   initPerson(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.initStudent = function (firstName, birthYear, dept) {
//   PersonProto.initPerson.call(this, firstName, birthYear);
//   this.dept = dept;
// };
// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.fullName} and I study at the "${this.dept}" department`
//   );
// };
// const jack = Object.create(StudentProto);
// jack.initStudent("Jack", 2003, "Programming");
// // jack.firstName = "Jack";
// // jack.birthYear = 2001;
// jack.introduce();
// jack.printAge();
// Пример для Класса
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.transactions = [];
//     // this.local = navigator.language;
//     console.log(`Спасибо что открыли счёт в нашем банке, ${owner}!`);
//   }
//   //Public interface - API
//   deposit(value) {
//     this.transactions.push(value);
//   }
//   withdraw(value) {
//     // this.transactions.push(-value);
//     this.deposit(-value);
//   }
//   approveLoan(value) {
//     return true;
//   }
//   requestLoan(value) {
//     if (this.approveLoan(value)) {
//       this.deposit(value);
//       console.log(`Займ утверждён`);
//     }
//   }
// }
// const account1 = new Account("Jack", "USD", 1111);
// // account1.transactions.push(100);
// account1.deposit(500);
// account1.withdraw(200);
// account1.requestLoan(10000);
// account1.approveLoan(1000);
// console.log(account1);
//Инкапмуляция
class Account {
  //Public fields
  // local = navigator.language;
  //Private fields
  #transactions = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Protected properties with _
    // this._transactions = [];
    // this.local = navigator.language;
    console.log(`Спасибо что открыли счёт в нашем банке, ${owner}!`);
  }
  //Public interface - API
  deposit(value) {
    this.#transactions.push(value);
    return this
  }
  withdraw(value) {
    // this.transactions.push(-value);
    this.deposit(-value);
  }
  setDefaultPin() {
    this.#pin = "0000";
  }
  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log(`Займ утверждён`);
      
    }
  }
  getTransactions() {
    return this.#transactions;
  }
  static greet() {
    console.log("Hi guys");
  }
  // Protected methods with _
  //Private methods #
  #approveLoan(value) {
    return true;
  }
}
const account1 = new Account("Jack", "USD", 1111);
// account1._transactions.push(100);
account1.deposit(500);
account1.withdraw(200);
account1.requestLoan(10000);
// account1.#approveLoan(1000);
account1.setDefaultPin();

console.log(account1);
// console.log(account1.#pin);
console.log(account1.getTransactions());
Account.greet();
