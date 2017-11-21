var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url == '/produtos'){
        res.end("<html><h1>Listando os produtos</h1></html>");
    } else {
        res.end("<html><h1>Home</h1></html>");
    }
    
});

server.listen(3000);

console.log('servidor rodando');