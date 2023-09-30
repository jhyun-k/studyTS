// keyof
// keyof 키워드를 이용하면 key값들을 유니온 형태로 받을 수 있다.

interface User{
  id : number;
  name : string;
  age : number;
  gender : 'm'|'f'
}

type UserKey = keyof User; //'id' | 'name' | 'age' | 'gender'

const uk : UserKey = 'id' 