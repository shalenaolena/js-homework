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

// Я не зрозуміла умови залачі. Чому для втілення функції потрібен класс?
// і як це зробити, щоб відображення було як в умовах задачі console.log(showMonthName(5)) якщо ми використовуємо класси...

// class MonthException {
//     constructor(month, message) { 
//         this.month = month;
//         this.message = message;
//     }
// }

   function showMonthName(month) {
       let message;
        if (month >=1 && month <=12) {
            switch (month) {
                case 1: message = "January";
                    break;
                case 2: message = "February";
                    break;
                case 3: message = "March";
                    break;
                case 4: message = "April";
                    break;
                case 5: message = "May";
                    break;
                case 6: message = "June";
                    break;
                case 7: message = "July";
                    break;
                case 8: message = "August";
                    break;
                case 9: message = "September";
                    break;
                case 10: message = "October";
                    break;
                case 11: message = "November";
                    break;
                case 12: message = "December";
                    break;
                default: message = "Error";
            }
            return message;
            
        } else {
            throw new Error("Incorrect month number");
        }

    }
       
    try {
        console.log(showMonthName(1));
        
    }   catch (error) { 
            console.log(error.message);
    }


    




  
  

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


