//함수 오버로드는 전달받은 매개변수의 개수나 타입에 따라 다른 동작을 하게하는 것을 말한다.

interface User3 {
  name: string;
  age: number;
}

//함수 오버로드
function join(name: string, age: string): string; // age가 string이면 string 반환
function join(name: string, age: number): User3; // age가 number면 User반환

// 이 함수는 age가 number면 User3의 type, age가 number가 아니면 string type 반환하는 함수야
function join(name: string, age: number | string): User3 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력하셈';
  }
}

const sam: User3 = join('Sam', 30); // 'Sam',30'
const jane: string = join('Jane', '30'); // '나이는 숫자로 입력하셈'
