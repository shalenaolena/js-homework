// Task 1--------------------------------
console.log('---Task 1---');

console.log('Loop FOR: ');

const arr = [2, 3, 4, 5];
let start = 1;
for ( let i = 0; i < arr.length; i++ ) {
    start *= arr[i];
}
console.log(start);

//Task 1.2---------------
console.log('Loop WHILE: ');

start = 1;                  //arr and start in first part of Task 1
let i = 0;
while ( i < arr.length ) {
    start *= arr[i];
    i++;
}
console.log(start);

// Task 2--------------------------------
console.log('---Task 2---');

let arr2 = [];
let i = 0;

while ( i <= 15 ) {                         //push data into array
    arr2.push(i);
    i++;
}

for ( i = 0; i < 15; i++ ) {                //write message
    console.log( arr2 [i] + " is even");
    console.log( arr2 [++i] + " is odd");
}


// Task 3--------------------------------
console.log('---Task 3---');

function randArray(k) {                                                            
    let array = [];
    let i = 1;
        while ( i <= k ) {                                          //push data into array
            let data = parseInt(Math.random() * (501 - 1) + 1);     //random 1-500 intenger                    
                array.push(data);
                i++;
        }
    console.log("randArray" + k + " каже: " + array.join(", "));    //message
        
     
}

randArray(6);
           
    



// Task 4--------------------------------
console.log('---Task 4---');

function raiseToDegree(a,b) {
        a = +prompt('Введіть оперант (ціле число)', '3');
        b = +prompt('Введіть ступіть', '4');

        if (a != null && b != null                      //not cancel
            && a != "" && b!= ""                        //not empty
            && (a ^ 0) === a && (b ^ 0) === b )  {      //intenger
                let result = a ** b;
                console.log("raiseToDegree каже: " + a + " у ступені " + b + " = " + result);

            } else {
                alert("Функція працює тільки з цілими числами. Введіть дані корректно і все запрацює");
            }
}

raiseToDegree();


// Task 5--------------------------------
console.log('---Task 5---');

function findMin() {
    console.log("Функція findMin каже, що мінімальне значення => " + Math.min(...arguments) ); 
}

findMin(12, 14, 4, -4, 0.22);

// Task 6--------------------------------


console.log('---Task 6---');

function findUnique(arr) {
    let result;
    let arr2 = [...new Set(arguments)];
    let arr3 = [...arguments];
    
    if ( arr2.length === arr3.length ) {
        console.log("Дублей нет");
        result = true;
        
    } else {
        console.log("Дубли есть");    
        result = false;
    }
    return result;       
    
}

console.log("Вариант 1: " + findUnique(1, 0, 3, 5, 4));
console.log("Вариант 2: " + findUnique(1, 0, 3, 5, 3));

  
// Task 7--------------------------------
console.log('---Task 7---');

function lastElem(arr, num) {
    let result;

    //if (num > arr.length) { num = arr.length }

    if (!num) {                             // если нет num - вернуть последний элемент
        result = arr[arr.length - 1];
    } else if (num >= 1) { 
        let arr2 =[];                                // если num существует и >=1
        if ( num > arr.length) { num = arr.length }
        let i = arr.length - num;  

        for (i; i < arr.length; i++)  {
                arr2.push(arr[i]);
                result = arr2.join(", ");
        }                 
    } else {
        console.log('Error');
    }
        
        return result;
    
}
console.log('lastElem каже: ');
console.log("lastElem([3, 4, 10, -5]): " + lastElem([3, 4, 10, -5]));      // -5                done
console.log("lastElem([3, 4, 10, -5],2): " +lastElem([3, 4, 10, -5],2));   // [10, -5]          done
console.log("lastElem([3, 4, 10, -5],8): " +lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]    done


// Task 8--------------------------------
console.log('---Task 8---');

function makeCapitalLetters(str) {

    return str.split(' ')                                     //str to array by space
    .map(function(elem) { 
        return elem[0].toUpperCase() + elem.substring(1); } ) //to every element of array = first letter (0) + other word part (from 1 to end)
    .join(' ');                                               //insert space again

}
console.log(makeCapitalLetters('i like java script'));

