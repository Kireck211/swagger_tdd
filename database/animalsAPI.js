// get -> call database and retrieve animals
const client = require('./index');

const get = () => {
  return client
    .then((cl) => {
      return cl.query('SELECT NOW() as now');
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};

exports.get = get;
