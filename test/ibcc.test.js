const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:3001');

// Events test
describe('GET /events', () => {
  it('should return all events', done => {
    api
      .get('/events')
      .set('Accept', 'applications/json')
      .end((err, res) => {
        expect(res.body).to.be.an('Array');
        done();
      });
  });
});
