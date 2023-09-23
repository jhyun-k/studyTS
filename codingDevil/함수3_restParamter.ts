function add5(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add5(1, 2, 3); // 6
add5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
