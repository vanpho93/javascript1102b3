/*
  name
  age
*/

// function Person (name, age) {
//   this.name = name;
//   this.age = age;
//   this.addAge = () => {
//     this.age++;
//   }
//   this.chao = () => {
//     console.log('Chao minh la: ' + this.name + ', ' + this.age + ' tuoi');
//   }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  addAge(){
    this.age++;
  }
  chao(){
    console.log('Chao minh la: ' + this.name + ', ' + this.age + ' tuoi');
  }
}

let p1 = new Person('Pho', 18);
console.log(p1);
p1.addAge();
console.log(p1);
p1.chao();
