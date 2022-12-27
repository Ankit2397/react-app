var HTTP = requires('http');  
   
// it creates the server object:  
http.createServer(function (req, res)   
{  
   
    // it will write the response to the client  
    res.write('JavaTpoint');  
   
    // End the response  
    res.end();  
   
// The server object listens at port 8080  
}).listen(8080);  