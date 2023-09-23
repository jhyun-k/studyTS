interface User2 {
  name: string;
}

const Sam: User2 = { name: 'Sam' };

//this의 타입은 맨 앞에 써준다.
function showName(this: User2, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}

const bind = showName.bind(Sam);
bind(30, 'm'); // "Sam , 30, 'm'"
