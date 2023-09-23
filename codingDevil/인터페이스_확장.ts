// interface는 확장 (extends)

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop');
  },
  color: 'black',
  wheels: 4,
  start() {
    console.log('gogo');
  },
};

//interface는 여러개 이용해서 확장 가능

interface Car {
  color: string;
  wheels: number;
  start(): void;
}
interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
