
//----Task 1-------------
// const os = require("os");
// const path = require('path');
// const http = require("http");

// http.createServer( function (request, response) {  

//    response.writeHead(200, {'Content-Type': 'text/html'});
   
//    if (request.method == "GET") {

//     let sec = os.uptime();
//     let min = sec/60;

//     response.write(`
//     <h1>Task 1:</h1>
//     <p>Current user name: ${os.userInfo().username}</p>
//     <p>OS Type: ${os.type()}</p>
//     <p>System work (min): ${min}</p>
//     <p>Current work directory: ${path.resolve(__dirname)}</p>
//     <p>Server file name: ${path.basename(__filename)}</p>
//     `); 
    
//     response.end('<h3>Done</h3>');
//    }   
// }).listen(5000);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:5000/');

//----Task 2-------------
