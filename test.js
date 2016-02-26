var http = require('http');
var app = require("./server");
var request = require("supertest");
// var expect = require("chai")


describe("Routes", function () {

  var routes = app.listen(3000);

  describe('API Routes', function(){

    it('Test for user routes', function(done){

      request(routes)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

    it('tests for dude routes', function(done){

      request(routes)
        .get('/dude')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

  });
  routes.close();

});
