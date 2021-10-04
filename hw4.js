//--- Task 1 -------------------------------
console.log("---Task 1---");

function calcRectangleArea( width, height ) {    
        width = +prompt ("Ширина треугольника","4");
        height = +prompt ("Высота треугольника","5");
        let result = 0.5 * width  * height;

        if (isNaN(result)) {
            throw new Error("Введено не число");
        }

        return result;    
}

try {  
    console.log(calcRectangleArea());
    
} catch (error) { 
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//--- Task 2 -------------------------------
console.log("---Task 2---");

function checkAge() {
    let age = +prompt("Введіть свій вік","18");
    console.log(age);

    switch (true) {
        case age > 14: alert("Дивитись фільм дозволено!");
        case age == "": throw new Error("Нічого не введено");
        case isNaN(age * 1): throw new Error("Введено не число");
        case age < 14: throw new Error("Вік меньше 14");
        default: alert("Error");
    }
}

try {
    checkAge();
    
}   catch (error) { 
        alert(error.message);
}



//--- Task 3 -------------------------------
console.log("---Task 3---");

//???ы

//--- Task 4 -------------------------------
console.log("---Task 4---");

function showUser(id) {
   
    let arr = [];                                           //масив для об'эктів
    let positiveId = id.filter(function(number) {           //масив з позитивними значеннями
        return number > 0;
    });
    positiveId.forEach(function(item) {                     //заповнюємо позитивний масив
        arr.push( { id: item });
        });
    let negativeId = id.filter(function(number) {           //масив з негативними значеннями
        return number < 0;
        });
    
    try {
        
        negativeId.forEach(function(item) {
            throw new Error("ID не може бути негативним");  //присвоюємо помилку
        });
        
    } catch (error) {
        for (let i = 0; i < negativeId.length; i++ ) {      //для кожного негативного значення виводимо повідомлення про помилку
            console.log(`${error.name}: ${error.message}: ${negativeId[i]}`);
        } 
    } 
        console.log(arr);                                   //виводимо масив об'єктів
        return arr;                                         //значення функції - позитивні об'єкти. Про всяк випадок
    

}

showUser([7, -12, 44, 22]);                              // запуск функції
//-------------------------------------------------


