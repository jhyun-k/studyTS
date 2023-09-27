// 접근제한자(Access modifier)
// // es6 의 클래스는 접근제한자 제공하지 않음, 하지만 타입스크립트는 접근 제한자 제공한다. 타입스크립트의 접근제한자는 public, private,protected가 있다.
//
// public
// 아무것도 안쓰면 public 이다

class Car3 {
  name: string = 'car';
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

class Bmw extends Car3 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw('black');
