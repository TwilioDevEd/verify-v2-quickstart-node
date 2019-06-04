const express = require('express');
const { ensureLoggedIn } = require('connect-ensure-login');
const db = require('../models');

const router = express.Router();

router.get('/', ensureLoggedIn(), async (req, res) => {
  const users = await db.User.findAll();
  res.render('users', { title: 'Users', users });
});

module.exports = router;
