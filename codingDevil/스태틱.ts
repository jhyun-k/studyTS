// static 이용하면 정적 멤버 변수 만들 수 있다. 접근하려면 클래스이름.속성 으로 접근해야한다.

class Car6 {
  protected name: string = 'car';
  color: string;
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
    console.log(Car6.wheels); //이렇게 클래스명을 써줘야한다!
  }
}
