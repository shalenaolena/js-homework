//Task 2
const userName = "Olena";
  alert(userName);

//Task 3
let variable1 = "Перше значення";
let variable2 = "Друге значення";
  document.write(variable1 + "<br>" + variable2 + "<br><hr>");
  variable1 = variable2;
  document.write(variable1 + "<br>" + variable2);

//Task 4
let user = {     
    name: "Olena",  
    age: 16,
    isMan: false,
    variableUndefined: undefined,
    variableNull: null
    };
    
    console.log("***Task 4***");
    console.log(user.name + " " + user.age);
    console.log(typeof user.isMan);
    console.log(typeof user.variableUndefined);
    console.log(typeof user.variableNull); //это объект :() Не понятно, как выполнить задание.

//Task 5

let isAdult = confirm("Are you over 18 years old?")

  console.log("***Task 5***");
  console.log("user is already 18: " + isAdult);

//Task 6

  const firstName = "James";
  const Surname = "Bond";
  const group = "Lv-636";
  const yearOfBirth = 1920;
  const isMarried = false;
  const children = null;
  const nationality = undefined;

      console.log("***Task 6***");
      console.log(yearOfBirth + " - " + typeof yearOfBirth);
      console.log(isMarried + " - " + typeof isMarried);
      console.log(firstName + " - " + typeof firstName);
      
      console.log(children + "- null");
      console.log(nationality + " - " + typeof nationality);
    
//Task 7
  let login = prompt("Enter login","Login");
  let email = prompt("Enter email","email");
  let password = prompt("Enter password","password"); 

    alert("Dear " + login +", your email is " + email + ", your password is " + password);

//Task 8
  let daysInMonth = prompt("How many days in a month?","30");
  let secondsInHour = 60 * 60;
  let secondsInDay = secondsInHour * 24;
      let secondsInMonth = secondsInDay * daysInMonth;

      alert("В часе " + secondsInHour +" секунд. В сутках " + secondsInDay + " секунд. Если в месяце " + daysInMonth + " дней, то секунд в нем - " + secondsInMonth);