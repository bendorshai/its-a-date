var koa = require('koa');
var flow = require('./model/flow.js');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);


// compiler Configuration:
// UTC-variable: 
// Date format: dd/mm/yyyy or mm/dd/yyyy
// Ambiguity factor: skip or fail