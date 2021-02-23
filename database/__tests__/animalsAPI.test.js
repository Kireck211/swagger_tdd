const api = require('../animalsAPI');

jest.mock('../index.js');

describe('animalsAPI', () => {
  describe('get', () => {
    it('should send an array', (done) => {
      api
        .get()
        .then((result) => {
          expect(Array.isArray(result)).toBe(true);
          done();
        })
        .catch(done);
    });
  });

  describe('put', () => {
    it('should call update on the database', () => {});
  });
});
