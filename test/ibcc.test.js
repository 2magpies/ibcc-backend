const expect = require('chai').expect;
const supertest = require('supertest');

const should = require('chai').should();

const api = supertest('http://localhost:3001');

// Events test

//SHOW ALL
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

//SHOW BY SPECIFIC
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

//CREATE
describe('POST /events', () => {
  let newEvent = {
    name: 'TestEvent',
    time: '12:00am',
    timezone: 'PST',
    price: 80
  };

  before(done => {
    api
      .post('/events')
      .set('Accept', 'application/json')
      .send(newEvent)
      .end(done);
  });

  it('Should add a new event to the collection and return it', done => {
    api
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const eventToFind = res.body.find(
          event => event.name === newEvent.name
        );
        expect(eventToFind).to.be.an('object');
        done();
      });
  });
});

//DELETE
describe('DELETE /events/:name ', () => {
  let eventToDelete;
  before(done => {
    api
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const events = res.body;
        eventToDelete = events[events.length - 1].name;
        done();
      });
  });

  before(done => {
    api
      .delete(`/events/${eventToDelete}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        done();
      });
  });

  it('should remove event from original array', done => {
    api
      .get('/events')
      .set('Accept', 'application/json')
      .end((err, res) => {
        const deleteEvent = res.body.find(event => event.name === eventToDelete);
        expect(deleteEvent).to.equal(undefined);
        done();
      });
  });
});

//PUT
describe('PUT /events/:name', () => {
  let updateEvent = {
    name: 'TestEvent',
    time: '5:00pm'
  };

  before(done => {
    api
      .put(`/events/${updateEvent.name}`)
      .set('Accept', 'application/json')
      .send(updateEvent)
      .end(done);
  });

  it('should update event by name', done => {
    api
      .get(`/events/${updateEvent.name}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body.name).to.equal(updateEvent.name);
      });
    done();
  });
});
