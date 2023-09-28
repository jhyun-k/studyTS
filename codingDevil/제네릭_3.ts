interface UserG {
  name: string;
  age: number;
}

interface CarG {
  name: boolean;
  color: string;
}

interface BookG {
  price: number;
}

const userG: UserG = { name: 'a', age: 10 };
//   const carG:CarG = {name : 'bmw',color:'red'}
//   const bookG : BookG = {price:3000}

//어떤 T타입이 올건데 그 타입은 name이 string인 객체를 확장한 것이다
function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
//   showName(car) // error : name이 string이 아님
//   showName(book) // error : book 에는 name 없음
