class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 5;
    console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
    return this;
  }
  break() {
    this.speed -= 5;
    console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
    return this;
  }
}

class ElectricCar extends Car {
  #battery;
  constructor(name, speed, battery) {
    super(name, speed);
    this.#battery = battery;
  }
  chargeBattery(chargeLevel) {
    this.#battery = chargeLevel;
    return this;
  }
  accelerate() {
    this.speed += 10;
    this.#battery -= 1;
    console.log(
      `${this.name} едет со скростью ${this.speed} с зарядом ${this.#battery}%`
    );
    return this;
  }
}

const tesla = new ElectricCar("Tesla", 100, 33);
console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);
// console.log(tesla.#battery);
tesla.accelerate();
tesla.accelerate().accelerate().break().chargeBattery(98).break().accelerate();
