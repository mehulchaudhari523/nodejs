const http = require('http');
const url = require('url');

// get query request
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'text/html'});
    var q = url.parse(req.url,true).query;
    var text = q.year + '' + q.month;
    resp.end(text);
}).listen(8080);