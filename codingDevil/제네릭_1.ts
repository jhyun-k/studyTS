// 제네릭을 이용하면 클래스나 함수, 인터페이스를 다양한 타입으로 재사용 할 수 있다. 선언할 때는 그냥 파라미터만 적어주고 사용할 때 파라미터의 구체적인 타입을 정해준다.

function getSize<T>(arr: T[]): number {
  return arr.length;
}

//<T> (꼭 T가 아니어도 됨, 그냥 타입이라는 뜻인듯) 를 써주고 파라미터의 타입을 배열이라는 것만 설정한다. 그 후 아래처럼 사용할 때 원하는 타입 쓰면 된다.

const arr1 = [1, 2, 3];
getSize<number>(arr1); // 3

const arr2 = ['a', 'b', 'c'];
getSize<string>(arr2); // 3
//사실 꼭 <string> 이렇게 안써줘도 받는 값의 타입을 알아서 인식해서 타입 지정해준다.

const arr3 = [true, false, true];
getSize<boolean>(arr3); // 3

const arr4 = [{}, {}, { name: 'Tims' }];
getSize<object>(arr4); // 3
