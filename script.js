"use strict";

const Person = function (name, birthday) {
  this.name = name;
  this.birthday = birthday;
};
const Anna = new Person("Anna", 1999);
console.log(Anna);
const Serj = new Person("Serj", 1999);
console.log(Serj);

const person = function (name, birthday) {
  console.log(name, birthday);
};
person("jack", 1400);
person("kell", 1300);
