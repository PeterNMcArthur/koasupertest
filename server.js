var logger = require('koa-logger');
var route = require('koa-router')();
var koa = require('koa');
var app = koa();
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:27017/people');

var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {

  var peopleSchema = mongoose.Schema({
    name: String
  }, { collection: "people"});

  var people = mongoose.model('people', peopleSchema);

  var james = new people({
    name: "Tonny"
  });

  james.save(function (err) {if (err) console.log ('Error on save!')});

  people.find(function(err, person) {
    console.log(person);
  });

});

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

app.listen(9000);

app.use(route.routes());

// module.exports = app;
