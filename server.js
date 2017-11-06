// content of index.js

var fs = require('fs');
var logs;

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    
   
    
  console.log(request.url)
  response.end(logs);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


fs.readFile('log.txt', 'utf8', function(err, data) {
              if (err) throw err;
            //  console.log('OK: ' + filename);
        //      console.log(data)
             logs = data;
            });


setInterval( function () { 
    
        fs.readFile('log.txt', 'utf8', function(err, data) {
              if (err) throw err;
            //  console.log('OK: ' + filename);
        //      console.log(data)
             logs = data;
            });
    
}, 150000);






