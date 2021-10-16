//---Task 1------------------------------------
console.log("---Task 1---");

function propsCount(currentObject) {
    let props = Object.keys(currentObject);
    return props.length;
}

// Для тестування
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

console.log(propsCount(mentor));  // 3

//---Task 2------------------------------------
console.log("---Task 2---");

const someting = {
    width: 400,
    height: 200,
    length: 100,
    weight: 10,
    time: "enough"
}

function showProps(obj) {
    let props = Object.keys(obj);
    let values = Object.values(obj);

    console.log(`Цей обєкт має такі пропорті (${props}) та їх значення (${values}) `);
}
showProps(someting);

//---Task 3------------------------------------
console.log("---Task 3---");


class Person {
    constructor(name, surname) {            
        this.name = name;
        this.surname = surname;
       }
    showFullName() {            
    console.log(this.name + " " + this.surname);
       }
}

class Student extends Person {
    constructor(name, surname, year) {
        super (name, surname);
        this.year = year;
    }
    showFullName(midleName) {            
        return this.name + " " + this.surname + " " + midleName;
           }
    showCourse() {
        const currentYear = new Date().getFullYear();
        
        let course = currentYear - this.year;
        let result;

        switch (true) {
            case ( course <= 1 ): result = 1; 
                break;
            case ( course > 1 && course <= 6 ): result = course;
                break;
            case ( course > 6 ): result = "Already finished";
                break;
            default: result = "Error";
        }

        return result;
    }

}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6

    
//---Task 4------------------------------------
console.log("---Task 4---");

class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        return this.#experience = value;
    }

    showSalary(){
        let result = this.dayRate * this.workingDays;
        console.log(result);
        return result;
    }

    showSalaryWithExperience() {
        let result = this.dayRate * this.workingDays * this.#experience;
        //console.log(result);
        return result;
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Olya Tomson", 55, 20);
const worker4 = new Worker("Nastya Tomson", 100, 20);
const worker5 = new Worker("Tanya Tomson", 150, 20);



const arr = [worker1, worker2, worker3, worker4, worker5];


for (let i = 0; i < arr.length; i++) {
    console.log("-----Worker "+ (i+1) + "-----");       //результати по кожному окремо
    console.log(arr[i]["fullName"]);                
    arr[i].showSalary();
    console.log("New experience: " + arr[i].showExp);
    console.log(arr[i].showSalaryWithExperience());
    arr[i].setExp = 1.5;
    console.log("New experience: " + arr[i].showExp);
    console.log(arr[i].showSalaryWithExperience());
    console.log("-----------------------------------");

}

let sortedArr = arr.sort(function(a,b){
    return a.showSalaryWithExperience()+b.showSalaryWithExperience(); // for ascending order
    });

for (let i = (sortedArr.length - 1); i >= 0; i--) {
    console.log(sortedArr[i]["fullName"] + ": " + sortedArr[i].showSalaryWithExperience());
}


//---Task 5------------------------------------
console.log("---Task 5---");

class GeometricFigure {
    constructor(width){
        this.width = width;
    }

    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor (height, width) {
         super (width);
        this.height = height;
    }

    getArea() {
        return this.height * this.width * 0.5;
    }
}

class Square extends GeometricFigure {
    constructor(width){
        super (width);
    }

    getArea() {
        return this.width ** 2;
    }
}

class Circle extends GeometricFigure {
    constructor(width){
        super (width); //diameter
    }
    getArea() {
        return Math.PI * (this.width ** 2) / 4;            //S = π × d2 : 4
    } 
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
    let isGeometricFigure;
    let figuresAreas = [];
    for (let i = 0; i<figures.length; i++) {
        console.log("Geometric figure: " + figures[i].toString() + " - area: " + figures[i].getArea()); //write areas

        figuresAreas.push (figures[i].getArea());

        if (figures[i] instanceof GeometricFigure === true) {                                           //Inheritance check
            isGeometricFigure = "All objects are Geometric Figures!";
        }
    }
    console.log(isGeometricFigure);


    let totalArea = figuresAreas.reduce(function(sum, current) {
        return sum + current;
      }, 0);
    
      console.log("Total area - " + totalArea);

} 
handleFigures(figures);



//console.log(handleFigures(figures));

//Приклад результату:
// Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area
