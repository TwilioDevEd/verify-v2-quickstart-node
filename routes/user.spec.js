/* eslint-disable prefer-arrow-callback,func-names */
require('dotenv').config({ path: './.env.test' });

const supertest = require('supertest-session');
const app = require('../app');
const { runMigrations } = require('../testUtilities');


function Session() {
  return supertest(app, {
    envs: { NODE_ENV: 'test' },
  });
}


describe('User Resource', function () {
  before(function () {
    return runMigrations();
  });

  beforeEach(function () {
    this.session = Session();
  });
});
