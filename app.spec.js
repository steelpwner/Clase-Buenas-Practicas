require('iconv-lite').encodingExists('foo')
const app = require("./definitions");
const request = require("supertest");

describe('Root path /', () => {
  test('Our First Test!', () => {
    request(app)
    .get("/")
    .then(response => {
        expect(response.statusCode).toBe(200)
        done();
    })
  });
});