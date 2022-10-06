const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  //   console.log(Number((this.speed = this.speed + 5)));
  this.speed += 5;
  console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
};
const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
};
ElectricCar.prototype.accelerate = function () {
  this.speed += 10;
  this.battery -= 1;
  console.log(
    `${this.name} едет со скростью ${this.speed} с зарядом ${this.battery}`
  );
};

const tesla = new ElectricCar("Tesla", 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);

tesla.accelerate();
