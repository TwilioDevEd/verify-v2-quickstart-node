/* eslint-disable camelcase,prefer-arrow-callback */
const express = require('express');
const { promisify } = require('util');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.user !== undefined) {
    return res.redirect('/');
  }
  return res.render('register', { title: 'Register', errors: {} });
});

router.post('/', async (req, res) => {
  const {
    username,
    password,
    confirmPassword,
    fullPhone: phoneNumber,
    verificationMethod,
  } = req.body;

  const errors = {};
  const user = await db.User.findOne({ where: { username } });

  if (user !== null) {
    errors.username = 'Username already exists.';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password does not match.';
  }

  if (phoneNumber === undefined || phoneNumber === '') {
    errors.phoneNumber = 'Phone Number is required.';
  }

  if (Object.keys(errors).length === 0) {
    const hashed_password = db.User.generateHash(password);

    try {
      await db.User.create({
        username,
        password: hashed_password,
        phoneNumber,
        verificationMethod,
      });
    } catch (e) {
      res.status(500).send(e.toString());
    }

    await promisify(passport.authenticate('local'))(req, res);

    res.redirect('/');
  } else {
    errors.wasValidated = true;
    res.status(400).render('register', { title: 'Register', errors });
  }
});

module.exports = router;
