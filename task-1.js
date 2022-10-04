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
const honda = new Car("Honda", 120);
const bmw = new Car("BMW", 150);
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.break();
bmw.accelerate();
