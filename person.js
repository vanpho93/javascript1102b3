/*
  name
  age
*/

function Person (name, age) {
  this.name = name;
  this.age = age;
  this.addAge = () => {
    this.age++;
  }
  this.chao = () => {
    console.log('Chao minh la: ' + this.name + ', ' + this.age + ' tuoi');
  }
}

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   addAge(){
//     this.age++;
//   }
//   chao(){
//     console.log('Chao minh la: ' + this.name + ', ' + this.age + ' tuoi');
//   }
// }

let p1 = new Person('Pho', 18);
let p2 = new Person('Huong', 30);

Person.prototype.showInfo = function () {
  console.log(this.name + ',' + this.age + ',');
};

// console.log(p1);
// console.log(p2);
// p1.showInfo();
// p2.showInfo();
// console.log(p1);
// p1.addAge();
// console.log(p1);
// p1.chao();
//
// p1.salary = 1000;
// p1.showSalary = function(){
//   console.log(this.salary);
// }
// console.log(p1);
// p1.showSalary()

let p3 = Object.assign({}, p1);
p1.name = 'PPP';
console.log(p3);
// console.log(p1);

console.log(JSON.stringify(p1));
