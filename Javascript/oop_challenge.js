//Q1.Prototype Chaining
function Animal(){
}
Animal.prototype.speak=function(){
    return 'Animal speaking';
}
function Dog() {
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark=function(){
    return `Woof!`;
}
Dog.prototype.constructor = Dog;

//Q2. Functional Constructor and Errors
//Task 1: Create a Functional Constructor
//Task 2: Handle Errors
function Person(name,age){
    if(age<=0 || typeof(age)!== 'number'){
        throw new Error(`Age must be a positive number`);
    }
    if(typeof(name)!== 'string'){
        throw new Error(`Enter valid name`);
    }
    this.name=name;
    this.age=age;
}
Person.prototype.greet=function(){
    return `Hello, my name is ${this.name}`;
};

//let obj=new Person(34,10);
//console.log(obj.greet());


//Q3.Classes, Objects, and Inheritance
class Vehicle {
    constructor(make,model) {
      this.make = make;
      this.model = model;
    }
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}`;
    }
    move(){
         return "The vehicle is moving";
    }
    static isVehicle(obj){
        this.obj=obj;
        return this.obj instanceof Vehicle;
    }
  }  
  class Car extends Vehicle{
      startEngine(){
          return "Engine started";
      }
      move(){
           return "The car is driving";
      }
  }
let p1=new Vehicle("Toyota","Corolla");
//console.log(Vehicle.isVehicle(p1));


//Q4.Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1
class BankAccount {
    constructor(balance = 0) {
        if(balance<0){
            throw new Error("Balance cannot be negative");
        }
      this._balance = balance;
    }
    deposit(amount){
        if(amount<=0){
            throw new Error("Amount to be deposited cannot be zero or negative");
        }
        this._balance+=amount;
        return this._balance;
    }
    withdraw(amount){
        if(amount<=0){
            throw new Error("Amount to be withdrawn cannot be zero or negative");
        }
        else if(amount>this._balance){
            throw new Error("Insufficient funds");
        }
        this._balance-=amount;
        return this._balance;
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount<=0){
            throw new Error("Amount cannot be zero or negative");
        }
        this._balance=amount;
    }
  }

  let abc=new BankAccount(20000);
  console.log(abc._balance);
  console.log(abc.deposit(5000));
  console.log(abc.withdraw(10000));
  abc._balance=40000;
  console.log(abc._balance);
    
  // Task 2
  class Shape {
    area(){
        return 0;
    }
  }
  
  class Circle extends Shape{
    constructor(r){
        super();
        this.r=r;
    }
    area(r){
        return Math.PI*this.r*this.r;
    }
  }
  
  class Rectangle extends Shape{
    constructor(l,b){
        super();
        this.l=l;
        this.b=b;
    }
    area(l,b){
        return this.l*this.b;
    }
  }
  let obj1=new Circle(4);
  let obj2=new Rectangle(4,6);
  //console.log(obj1.area());
  //console.log(obj2.area());
  
  
 


