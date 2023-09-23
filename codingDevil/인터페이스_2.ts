interface Add {
  (num1: number, num2: number): number;
}

const add2: Add = function (x, y) {
  return x + y;
};

add2(10, 20); // 30

interface IsAdult {
  (age: number): boolean;
}

const adult: IsAdult = (age) => {
  return age > 19;
};

adult(33); // true
