type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; // optional 한 항목 만드려면 항목 이름 뒤에 ? 붙이고 타입 설정해준다.
  readonly birthYear: number; // 값 수정 못하게 하려면 항목 이름 앞에 readonly 라고 써준다.
  [grade: number]: Score; // 문자열 인덱스 서명 추가하기 [key : type] : type (이 경우는 직접 Scroe 타입 만들어서 Score타입 넣어줌)
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B',
};

user.gender = 'male';
// user.birthYear = 1900;//error:Cannot assign to 'birtyYear' because it is a read-only property

console.log(user.age); // 30
