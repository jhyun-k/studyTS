function showItems(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3]); // 1 2 3
//   showItems(1,2,3) // error : Expected 1 arguments, but got 3
