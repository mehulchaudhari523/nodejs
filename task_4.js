const http = require('http');
const fs = require('fs');

// read file
http.createServer((req,resp)=>{
    fs.readFile('demo_1.html',(err,data)=>{
        resp.writeHead(200,{'Content-Type':'text/html'});
        resp.write(data);
        return resp.end();
    });
}).listen(8080);