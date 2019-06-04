const express = require('express');
const passport = require('passport');
const db = require('../models');

const router = express.Router();
const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
  res.render('login', { title: 'Login', errors: {} });
});

async function login(req, user) {
  await new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

loginRouter.post('/', (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    if (err) {
      return next(err);
    }
    if (user !== false) {
      await login(req, user);
      return res.redirect('/');
    }
    const errors = { wasValidated: true };
    const { username, password } = req.body;

    // eslint-disable-next-line no-param-reassign
    user = await db.User.findOne({ where: { username } });

    if (user === null) {
      errors.username = 'Username does not exist.';
    } else if (!user.isValidPassword(password)) {
      errors.password = 'Incorrect password';
    }

    return res.render('login', { errors });
  })(req, res, next);
});

router.use('/login', loginRouter);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
