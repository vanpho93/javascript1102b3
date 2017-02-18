let mang = [1, 3, 2, 17, 3];
let arr = mang.sort();
console.log(arr);

let arr2 = mang.sort(function(a, b){
  if(a > b) return 1;
  if(a < b) return -1;
  if(a == b) return 0;
});
console.log(arr2);
