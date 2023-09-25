//리터럴 타입은 정해진 값을 가진 타입이다.

const userName1 = 'Bob'; // 얘는 재할당 불가능하므로 무조건 'Bob'임
let userName2: string | number = 'Tom';
userName2 = 3; // ㄴ> 이렇게 string이랑 number 둘 다로 설정 안해놓으면 초기 타입이 string이었기 때문에 string만 넣을 수 있음

type Job = 'police' | 'developer' | 'teacher';

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: 'Bob',
  // job : 'student',  < Job 타입에 지정된 값이 아니므로 에러뜸
  job: 'developer',
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}
