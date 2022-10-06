class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    //   console.log(Number((this.speed = this.speed + 5)));
    this.speed += 5;
    console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.name} движется со скоростью ${this.speed} км/ч`);
  }
  get speedMph() {
    return this.speed / 1.6;
  }
  set speedMph(speed) {
    this.speed = speed * 1.6;
  }
}

const honda = new Car("Honda", 120);
const bmw = new Car("BMW", 150);
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.break();
bmw.accelerate();

console.log(honda.speedMph);

honda.break();
honda.speedMph = 20;
console.log(honda.speed);
