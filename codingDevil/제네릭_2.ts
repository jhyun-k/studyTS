// 인터페이스에서 제네릭 사용
// 제네릭을 이용하면 하나의 인터페이스를 선언하고 각기 다른 모습의 객체들을 만들어줄 수 있다.

interface MobileG<T> {
  name: string;
  price: number;
  option: T; // 뭐가 들어올지 몰라서 제네릭으로 타입 지정 안하고 넘어감
}

const m1: MobileG<object> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: MobileG<string> = {
  name: 's20',
  price: 1300,
  option: 'good',
};

//만약 option 의 형태가 정해져있다면 이렇게 미리 쓰는 것도 된다
const m3: MobileG<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};
