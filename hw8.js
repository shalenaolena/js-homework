//--- TASK 1 ------------------------------------------------------
console.log("-----TASK 1----------------------");

function upperCase (text) {
 let result = /^[A-Z]/.test(text);
//  console.log(result);

    if (result) {
        console.log("String's starts with uppercase character");

    } else {
        
        console.log("String's not starts with uppercase character!!! ");
    }
}

upperCase('regexp');
upperCase('RegExp');

//--- TASK 2 ------------------------------------------------------
console.log("-----TASK 2----------------------");

function checkEmail(email) {

    let result =/^\w([\w!#$&%'*+-/=?^`{|}~.]+\w{1})?@[\w-]+\.[a-z]+$/.test(email);  //по правилам ніби так о_0
        if (result) {
            console.log('Email is correct!');
        } else {
            console.log('Error');
        }
    return result;
}
console.log(checkEmail("Qmail2@gmail.com"));
//--- TASK 3 ----------------------------------NOT--------------------
console.log("-----TASK 3----------------------");
//Не виходить :(((((((((((( Я багато перепробувала. Буду дивитись у розборі. Не можу здогадатися

const str = "cdbBdbsbz";
let re = /[db]{4}|b+/ig;
let result = str.match(re);
	console.log(result);
    
    
    
    //результат ["dbBd", "bB", "d"]
    
//--- TASK 4 -----------------------------------------done-------------
console.log("TASK 4");

//4.1

console.log("Java Script".replace(/(\w+)\s(\w+)/, '$2, $1'));

//4.2   
console.log( "Java Script" .replace (/Script/, "Java") .replace ( /Java/, "Script" ));      //Java Java => Script Java
    

//--- TASK 5 -------------------------------------------done-----------
console.log("-----TASK 5--------");
// 9999-9999-9999-9999

function cardCheck (cardN) {
   // return /9999[ -]?9999[ -]?9999[ -]?9999/.test(cardN);     //конкретний номер...
   return /\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}/.test(cardN);    //просто цифри (16) з тире, пробылом чи без них
}
console.log(cardCheck ("9999-9999-9999-9999"));



//--- TASK 6 -----------------------------------------done-------------
console.log("-----TASK 6--------");
function checkEmail(email) {

    let result =/^[A-Za-z0-9]+((-|_)?\w+)?@[\w-]+\.[a-z]+$/.test(email); 
        if (result) {
            console.log('Email is correct! ;)');
        } else {
            console.log('Error!!! Email is not correct!');
        }
    return result;
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');
checkEmail('-mymail@gmail.com');
checkEmail('_mymail@gmail.com');
checkEmail('911@gmail.com');
checkEmail('9@gmail.com');

//\w включає “_” але за умовами задачі символи “_” і “-” не можуть бути ПЕРШИМИ. Про останні нічого сказано не було.
//але якщо треба: /^[A-Za-z0-9]+((-|_)?[A-Za-z0-9]+)?@[\w-]+\.[a-z]+$/

//--- TASK 7 ------------------------------------------done------------
console.log("-----TASK 7--------");

function checkLogin (login) {
    let result = /^[^\\*][A-Za-z]+[^\\*](\d+)?(\.\d+)?[^\\*](\w+)?[^\\*][^_\\*]$/.test(login); //має бути елегантніший спосіб... але так працює
   
        console.log(`Login is ${result}`);
        console.log(login.match(/\d+(\.\d+)?/g));
        console.log("-------------------");
    
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');