const http = require('http');
const mdt = require('./myfirstmodule');

// use my own module
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'text/html'});
    resp.write('My Date Time: '+ mdt.myDateTime());
    resp.end();
    console.log('server runing....');
}).listen(8080);
