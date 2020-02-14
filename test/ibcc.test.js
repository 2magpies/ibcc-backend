const expect = require('chai').expect;
const supertest = require('supertest');

const should = require('chai').should();

const api = supertest('http://localhost:3001');

// Events test
describe('GET /events', () => {
  it('should return all events', done => {
    api
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('Array');
        done();
      });
  });
});

describe('GET /events/:name', () => {
  it('should return an event with a specific name', done => {
    api
      .get('/events/Carnival')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('Array');
        done();
      });
  });
});
