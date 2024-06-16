// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end( 'Hello world'); 

// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// typ1 name import method
import {a,b,c,d,e} from"./mymodule.js"
console.log(a,b,c,d,e)
//  type 2 defult method
import obj from"./mymodule.js"
console.log(obj)