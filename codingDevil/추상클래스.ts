// 추상클래스는 new 를 이용하여 객체 만들 수 없고 상속을 이용해서만 사용가능함. class 앞에 abstract 기입

abstract class Car7 {
  protected name: string = 'car';
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void; // 추상메서드는 반드시 상속 받은 곳에서 구체적인 구현을 해줘야함, 여기서는 이름 정도만 정한다고 생각하면 된다.
}

// const car = new Car7('red') // error

class Bmw3 extends Car7 {
  doSomething() {
    alert(3);
  } //이렇게 상속받은 곳에서 어떤 기능을 할건지 구현을 해줘야한다.
} // 이렇게만 가능
