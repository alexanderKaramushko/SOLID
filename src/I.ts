// Interface Segregation Principle

interface ICat {
  walk: () => void;
}

/**
 * @class Cat
 * @classdesc Cat implements its own interface
 */
export class Cat implements ICat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} can walk`);
  }
}

interface IFish {
  swim: () => void;
}

/**
 * @class Fish
 * @classdesc Fish implements its own interface
 */
export class Fish implements IFish {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} can swim`);
  }
}

const cat = new Cat('Garfield');
const fish = new Fish('Yaaaz');

// console.log(cat.walk());
// console.log(fish.swim());
