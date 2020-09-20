'use strict';

const request = require('supertest');
const app = require('../../app');

describe('GET /', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ message: 'Hello world!' });
    });
});