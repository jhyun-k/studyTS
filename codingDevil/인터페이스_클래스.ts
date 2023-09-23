//implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go..');
  }
}
const bmw = new Bmw('green');
console.log(bmw); //  { wheels: 4, color: 'green' }
bmw.start(); // 'go...'
