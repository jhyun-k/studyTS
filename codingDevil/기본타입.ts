//string
let car: string = 'bmw';
// car = 3 ; // type error

//number
let age: number = 30;

//boolean
let isAdult: boolean = true;

//array (number)
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

//array(string)
let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// 튜플(Tuple) - 인덱스별로 타입 다를 때 사용 가능
let b: [string, number] = ['hello', 123];
b[0].toLowerCase(); // 가능
// b[1].toLowerCase() // error : 'toLowerCase' does no exist on ype 'number'

//void - 아무것도 반환하지 않을 때
function sayHello(): void {
  console.log('hello');
}

//never - 항상 에러 반환하거나 영원히 끝나지 않는 타입
function isfLoop() {
  while (true) {
    //do something..
  }
}

//enum - 비슷한 값들끼리 묶어줌 , 알아서 1씩 증가시켜서 값 배정
enum Os {
  Window, //1
  Ios, //2
  Android, //3
}
let myOs: Os; // Os에 있는 것만 입력할 수 있음

// null , undefined
let nulla: null = null;
let nullb: undefined = undefined;
