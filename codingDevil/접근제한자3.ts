// protected
// protected도 public과 마찬가지로 자식클래스에서 접근이 가능하다. public과 다른 점은 자식클래스 내부에서는 참조할수있으나 클래스 인스턴스로는 참조할 수 없다.

class Car5 {
  protected name: string = 'car';
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

class Bmw2 extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}
const z44 = new Bmw2('black');
console.log(z44.name); // error : property 'name' is protected and only accessible within class 'Car' a
