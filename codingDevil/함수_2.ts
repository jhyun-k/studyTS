function hello(name?: string) {
  // name 뒤에 ? 붙여서 optional로 지정 (입력 해도 되고 안해도 됨)
  return `Hello, ${name || 'world'}`;
}

function hello2(name = 'world') {
  return `Hello, ${name}`;
}
const result = hello2();
const result2 = hello2('sam');
//   const result3 - hello(123) // error

function hello3(name: string, age?: number): string {
  // 선택적 매개변수는 무조건 필수 매개변수 뒤에!
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hello3('Sam')); // Hello, Sam
console.log(hello3('Sam', 30)); //Hello, Sam. You are 30
