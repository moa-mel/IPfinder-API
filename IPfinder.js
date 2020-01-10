let http = require('http');
let fs = require('fs');
let path = require('path');
let API = require('./IPfinderAPI.js')
const ip = '127.0.0.1';  //localhost
const port = 3000;
const iplocate = require('node-iplocate');
let url = require('url');

http.createServer(function(request, response){
    
    let queryData = url.parse(request.url, true).query;
    console.log(queryData);
    iplocate(queryData.ip).then(function(results){
        let output = { 
            "IP Address": results.ip,
            "Country": results.country + " (" + results.country_code + ")",
            "Continent": results.continent,
            "State": results.state +"(" + results.state_code +")",
            "Organisation": results.org + " (" + results.asn + ")",
            "Longitude":results.longitude,
            "Latitude":results.latitude
        }
        
        response.writeHead(200,{'Content-Type' : 'application/json'});
        response.write( JSON.stringify(output));
        response.end()
    });
          
}).listen(port,ip);
    
console.log('Running at ' + ip + ':' + port + '/');