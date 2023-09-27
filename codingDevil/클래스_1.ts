//타입스크립트에서는 자바스크립트 es6의 클래스와 달리 멤버 변수를 constructor 전에 먼저 선언해줘야한다.
//먼저 선언하지 않는 방법은 readonly 사용하면됨

class Car {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

const bmw = new Car('red');
