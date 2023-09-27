// private
// 속성 이름 앞에 private를 쓰거나 #을 입력하면 private 속성으로 해당 클래스에서밖에 사용하지 못한다.

class Car4 {
  private name: string = 'car';
  //#name : string = 'car';
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

//위 코드처럼 Bmw 에서는 못쓴다
