//Lets require/import the HTTP module
var server = require('express')();
var db = require('./db/db');

//Lets define a port we want to listen to
var PORT=8081; 

server.use(require('express-promise')());

server.get('/', function(request, response) {
  response.set('Content-Type', 'text/html');
  var html = '<html>\n';
  html += '  <head></head>\n';
  html += '  <body>\n';
  html += '    <a href="query/select * from test;">acde</a>\n';
  html += '  </body>\n';
  html += '</html>';
  response.send(html);
});

server.get('/test', function(request, response) {
  response.end('YAY!!');
});

server.get('/query/:query', function(request, response) {
  var queryString = request.params.query;
  console.log(queryString); // eslint-disable-line no-console
  response.json({
    query: queryString,
    test: 'blah1',
    result: db.query(queryString)
  });
});

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT); // eslint-disable-line no-console
});
