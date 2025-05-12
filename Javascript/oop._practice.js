//oops
/* Person Class with Details */
class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    display(){
        console.log("Name",this.name);
        console.log("Age:",this.age);
        console.log("Country:",this.country);
    }
}
let p1=new Person("abc","15","India");
let p2=new Person("xyz","18","UK");
p1.display();
p2.display();

/* 2.Rectangle Class with Area and Perimeter */
class Rectangle{
    constructor(w,h){
        this.w=w;
        this.h=h;
    }
    area(){
        return this.w*this.h;
    }
    perimeter(){
        return 2*(this.w*this.h);
    }
}

let obj= new Rectangle(12,10);
console.log(obj.area());
console.log(obj.perimeter());

/* Vehicle and Car Classes with Inheritance */
class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    display(){
        console.log(this.make,this.model,this.year);
        
    }
}
class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year)
        this.door=door;
    }
    display(){
        console.log(this.make,this.model,this.year,this.door);
    }
}
let obj1=new Car("Honda","Accord",2023,4);
obj1.display();
