const http = require('http');

// create http server
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'text/html'});
    resp.end('Hello World..!!');
    console.log('Server runing..');
}).listen(8080);
