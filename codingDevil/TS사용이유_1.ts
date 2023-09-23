function add(num1: number, num2: number) {
  console.log(num1 + num2);
}
//   add(); // error : Expected 2 arguments, but got 0
//   add(1) // error : Expected 2 arguments, but got 1
add(1, 2); // 3  (^^)
//   add(3,4,5) // error : Expected 2 arguments, but got 3
//   add('hello','world');// error : Argument of type 'string' is not assignable to parameter of type 'number'
