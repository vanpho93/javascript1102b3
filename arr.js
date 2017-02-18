function Person (name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.addAge = () => {
    this.age++;
  }
  this.chao = () => {
    console.log('Chao minh la: ' + this.name + ', ' + this.age + ' tuoi');
  }
}

let p1 = new Person('Pho', 18, 70);
let p2 = new Person('Huong', 30, 90);
let p3 = new Person('Phat', 20, 200);

let mang = [p1, p2, p3];

// let aFunction = (e, i) => {
//   e.chao();
// }
// mang.forEach(aFunction);

// let isBiggerThan80 = mang.every(e => e.salary > 80);
// let is200 = mang.some(e => e.salary == 200);
// let s90 = mang.findIndex(e => e.salary > 10);
// console.log(s90);

let older19 = mang.filter(e => e.age > 19);

console.log(older19);
