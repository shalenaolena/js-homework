////Task 1 ----------------------------------
let x = 1;
let y = 2;
let res1 = String((x + y) * y ** 2);
    console.log("--- Task 1.1---");
    console.log(res1); 
    console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
    console.log("--- Task 1.2---");
    console.log(res2); // "true2"
    console.log(typeof res2); // "string"
    
let res3 = Boolean(y - x);
    console.log("--- Task 1.3---");
    console.log(res3); // true
    console.log(typeof res3); // "boolean"

let res4 = String(!!x) * y;
    console.log("--- Task 1.4---");
    console.log(res4); // NaN
    console.log(typeof res4); // "number"
    
    

//Task 2----------------------------------

let userNumber = 10; //prompt("Введіть число", "10");

    console.log("--- Task 2.1---");

let resUserNumber = userNumber % 2;
let answer = (resUserNumber==0)?"Парне":"Не парне";
console.log(answer);
    /*if (resUserNumber==0) {
        console.log("Парне");
    } else {
        console.log("Не парне");
    }*/

    console.log("--- Task 2.2---");

    resUserNumber = userNumber % 7;
    if (resUserNumber==0) {
        console.log("Кратне 7");
    } else {
        console.log("Не кратне 7");
    }

    // Task 3 ------------------------
    console.log("--- Task 3---");

    let arr = [];
    
    arr.push (1920, "James", false, null);
    

    console.log("Новий масив: [" + arr + "], у которому елементів: " + arr.length);

    let newElement = "будь-яке значення"; //prompt("Напишіть будь-яке значення","будь-яке значення");
    arr.push (newElement);
    console.log("Новий п'ятий елемент: " + arr[4]);

    arr.shift();
    console.log("Масив змінено: [" + arr + "]");

    //Task 4 ----------------------------------------
    console.log("--- Task 4---");

    let cities = ["Rome", "Lviv", "Warsaw"];
    console.log(cities[0] + "*" + cities[1] + "*" + cities[2]);

    //Task 5 ----------------------------------------
    console.log("---Task 5---");
   /* я б краще використала не prompt(), а confirm(). 
     1. Користувачу не потрібно нічого писати, а лише натиснути кнопку.
     2. Ми не знаємо, що він напише. Можливо, віршик.
     3. confirm одразу повертає true 
     Але задача поставлена, будемо робити о_0 */
     
     let birthYear = +prompt("Вкажіть рік свого народження", "1920");
     let currentYear = 2021;
     if (  birthYear > 1900 && birthYear < currentYear ) {                                             
        
        let isAdult = birthYear < (currentYear - 18) && birthYear > 1900;              
            if (isAdult === true) {
            console.log("Чудово!");
            } else {
                alert("Зустрінемось пізніше!");                        
            }

    } else {                                                                          
        alert("Введені не корректні дані. Спробуйте ще раз!");
    }      
        

    //Task 6 ----------------------------------------
    console.log("---Task 6---");
    let a = +prompt("Ввдедіть довжину першої сторони трикутника", "30");
    let b = +prompt("Ввдедіть довжину другої сторони трикутника", "40");
    let c = +prompt("Ввдедіть довжину третьої сторони трикутника", "50");
    
    //Нема сенсу перевіряти тип данних, адже все одно буде Number (prompt повертає String, довелося додати плюс)
    if ( a > 0 && b > 0 && c > 0 ) { 
        //ще знайшла варіант перевірки данних (Math.sign(a) === 1 && Math.sign(b) === 1 && Math.sign(c) === 1)
        
        //Формула площі
        let semiPerimeter = (a + b + c)/2;                                                                      
        let area = (semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)) ** (1/2);  
        console.log("Площа трикутника складає: " + area.toFixed(3)); 

        //Чи прямокутний трикуткик Теорема Піфагора 
        if ( a ** 2 == b ** 2 + c ** 2 || b ** 2 == a ** 2 + c ** 2 || c ** 2 == a ** 2 + b ** 2 ) {
            console.log("Трикутник прямокутний");
        } else {
            console.log("Трикутник не прямокутний");
        }
                                                                                 
    } else {
        console.log("Введіть сторони трикутника коректно!");
    }

    // Task 7 ----------------------------------------
    console.log("---Task 7---");

    // Спосіб отримати час №1
    Data = new Date();
    Hour = Data.getHours();
    console.log( "Вбудована функція об'єкту Data.getHour js: " + Hour );

    // Спосіб отримати час №2

    let miliSeconds = Date.now();
    let currentHour = parseInt((( miliSeconds / 1000 / 3600) % 24 ) + 3 );            // Київський час (GMT+3), тому + 3
    console.log("Підрахунок з мілесекундами з 1970 року: " + currentHour);            // о_0

    console.log("--------------");

    //let currentHour = 2;

    // Спосіб привітатися №1 
    console.log("Конструкція If-else каже: ");

    if ( 5 < currentHour && currentHour < 11 ) {
        console.log("Доброго ранку!");
    } else if ( 11 < currentHour && currentHour <= 17 ) {
        console.log("Доброго дня!");
    } else if ( 17 < currentHour && currentHour < 23 ) {
        console.log("Доброго вечора!");
    } else if ( 23 <= currentHour ) {
        console.log("Доброї ночі!");
    } else if ( currentHour <= 5 ) {
        console.log("Доброї ночі!");
    } else if ( currentHour == 0 ) {
        console.log("Доброї ночі!");
    } else {
        console.log("Щасливі на час не дивляться!");
    }

    // Спосіб привітатися №2
    console.log("Конструкція switch каже: ");

    
        
    switch (true) {
        case 5 < currentHour && currentHour < 11:
            console.log("Хай цей ранок буде чудовим!");
            break;
        case 11 < currentHour && currentHour <= 17:
            console.log("Хай цей день принесе позитив!");
            break;
        case 17 < currentHour && currentHour < 23:
            console.log("Не сидіть ввечері довго онлайн!");
            break;
        case 23 <= currentHour:
             console.log("Гарних снів!");
            break;
        case currentHour <= 5:
            console.log("Гарних снів!");
            break;
        
        case currentHour == 0:
            console.log("Гарних снів!");
            break;
        default:
        console.log("Бо щастя - воно таке!");
    }