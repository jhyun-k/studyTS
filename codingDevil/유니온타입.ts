//| (or 조건 타입) , 동일한 속성의 타입을 다르게 해서 구분할 수 있는 것을 식별 가능한 유니온 타입이라고 한다.

interface Car1 {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car1 | Mobile) {
  console.log(gift.color);
  //gift.start(); error : Property 'start' does not exist on type 'Mobile'  start() 는 Car에만 있어서
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
