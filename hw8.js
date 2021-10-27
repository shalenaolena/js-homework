//--- TASK 1 ------------------------------------------------------

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
function checkEmail(email) {

    let result =/^[\w!#$&%'*+-/=?^_`{|}~.]+@[\w-_]+\.\w+$/.test(email);
        if (result) {
            console.log('Email is correct!');
        } else {
            console.log('Error');
        }
}
checkEmail("Qmail2@gmail.com");
//--- TASK 3 ------------------------------------------------------
//Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, 
//за якою йде одна чи більше b, за якими одна d. 
//Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	// Приклад роботи:   
    // Для стрінги "cdbBdbsbz"
    
const str = "cdbBdbsbz";
let re = /db+d?/ig;
let result = str.match(re);
	console.log(result);
    
    
    
    //результат ["dbBd", "bB", "d"]
    
//--- TASK 4 ------------------------------------------------------
//--- TASK 5 ------------------------------------------------------
//--- TASK 6 ------------------------------------------------------
//--- TASK 7 ------------------------------------------------------
