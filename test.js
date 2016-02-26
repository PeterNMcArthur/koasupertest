var http = require('http');
var app = require("./server");
var request = require("supertest");

describe("Our amazing site", function () {

  it('respond with json', function(done){

    request(app.listen())
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

});
