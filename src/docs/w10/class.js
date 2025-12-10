class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        if(age>0){
            this.age = age;
        }else{
            console.log("Age cannot be negative.");
        }
    }
}
const person1 = new Person("Alice", 28);
const person2 = new Person("Bob", 35);
person1.show();
person2.show();
person1.name = "Charlie";
person1.setAge(-1);
person1.show();
console.log(person1["name"]);
console.log(person1["age"]);
person1.score = 95;
console.log(person1.score);
for (const key in person1) {
    console.log(`${key}: ${person1[key]}`);
}
for (const key in person2) {
    console.log(`${key}: ${person2[key]}`);
}