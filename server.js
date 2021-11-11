
//----Task 1-------------done
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

//----Task 2-------------ERROR-ERROR-ERROR-json-not done

//У намаганнях створити модуль...

//Спочатку не хотіло навіть npm init сприймати. 

// TypeError: Class extends value undefined is not a constructor or null at Object.<anonymous> (C:\nodejs\node_modules\npm\node_modules\socks-proxy-agent\dist\agent.js:114:44) at Module._compile (node:internal/modules/cjs/loader:1101:14) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10) at Module.load (node:internal/modules/cjs/loader:981:32) at Function.Module._load (node:internal/modules/cjs/loader:822:12) at Module.require (node:internal/modules/cjs/loader:1005:19) at require (node:internal/modules/cjs/helpers:102:18) at Object.<anonymous> (C:\nodejs\node_modules\npm\node_modules\socks-proxy-agent\dist\index.js:5:33) at Module._compile (node:internal/modules/cjs/loader:1101:14) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10) at Module.load (node:internal/modules/cjs/loader:981:32) at Function.Module._load (node:internal/modules/cjs/loader:822:12) at Module.require (node:internal/modules/cjs/loader:1005:19) at require (node:internal/modules/cjs/helpers:102:18) at Object.<anonymous> (C:\nodejs\node_modules\npm\node_modules\make-fetch-happen\lib\agent.js:161:25) at Module._compile (node:internal/modules/cjs/loader:1101:14)

//A FEW HOURS LATER... Перевстановила Node.js

// About to write to C:\Program Files\nodejs\node_modules\my-modules\package.json:

// {
//   "name": "my-modules",
//   "version": "1.0.0",
//   "description": "My first module",
//   "main": "index.js",
//   "scripts": {
//     "test": "personalmodule"
//   },
//   "repository": {
//     "type": "git",
//     "url": "my-modules"
//   },
//   "author": "Me",
//   "license": "ISC"
// }


// Is this OK? (yes) yes
// npm ERR! code EPERM
// npm ERR! syscall open
// npm ERR! path C:\Program Files\nodejs\node_modules\my-modules\package.json
// npm ERR! errno -4048
// npm ERR! Error: EPERM: operation not permitted, open 'C:\Program Files\nodejs\node_modules\my-modules\package.json'
// npm ERR!  [Error: EPERM: operation not permitted, open 'C:\Program Files\nodejs\node_modules\my-modules\package.json'] {
// npm ERR!   errno: -4048,
// npm ERR!   code: 'EPERM',
// npm ERR!   syscall: 'open',
// npm ERR!   path: 'C:\\Program Files\\nodejs\\node_modules\\my-modules\\package.json'
// npm ERR! }
// npm ERR!
// npm ERR! The operation was rejected by your operating system.
// npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
// npm ERR! or that you lack permissions to access it.
// npm ERR!
// npm ERR! If you believe this might be a permissions issue, please double-check the
// npm ERR! permissions of the file and its containing directories, or try running
// npm ERR! the command again as root/Administrator.

// npm ERR! A complete log of this run can be found in:
// npm ERR!     C:\Users\Olena\AppData\Local\npm-cache\_logs\2021-11-11T07_59_03_631Z-debug.log

// C:\Program Files\nodejs\node_modules\my-modules>

//A FEW HOURS LATER.... я зродуміла, що воно свариться ни диск С:// та адмінський доступ до нього.
