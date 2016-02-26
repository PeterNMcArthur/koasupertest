var logger = require('koa-logger');
var route = require('koa-router')();
var koa = require('koa');
var app = koa();

route.get('/user', function *() {

  this.body = {
    _id: 'asdi876ad876sdf8ds',
    name: 'Dave'
  };

});

route.get('/dude', function *() {

  this.body = {
    _id: 'asdi876ad876sdf8ds',
    name: 'Dave'
  };

});

app.use(route.routes());

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

if(!module.parent){ app.listen(port); }

module.exports = app;
