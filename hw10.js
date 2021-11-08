// ------- TASK 1 ------------done

console.log("---- TASK 1 -----");
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, a, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]



// ------- TASK 2 ------------done

console.log("---- TASK 2 -----");
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]}  = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26
 
// ------- TASK 3 ------------done

console.log("---- TASK 3 -----");
const mul = (...myArgs) => {
    console.log(myArgs);
    let newArr = myArgs.map(item => {
        let result;
        if (typeof item =="number") { result = +item;}
        else{result = 0;
        }
        return result;
    });

    let newArray2 = newArr.filter(function(f) { return f !== 0 })
    console.log(newArray2);

    if (newArray2.length>0) {let result = newArray2.reduce((sum, current) => sum * current);
        return result;
    } else {return 0;}
    
    
 }
 
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

 
// ------- TASK 4 ------------???
let server = {
    data: 0,
    convertToString: function (callback) {
       callback((function () {
          return this.data + "";
       })//.bind(this)
       );
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (function (callback) {
          this.result = callback();
       })//.bind(this);
    }
 };



 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
 
// ------- TASK 5 ------------done


console.log("---- TASK 5 -----");
console.log(object);
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder (key, value) {
 let map = new Map();
 for (let i = 0; i<key.length; i++) {
    map.set(key[i], value[i]);
 }
    return map;
}


let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"



//

