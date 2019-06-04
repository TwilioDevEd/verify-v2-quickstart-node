const { ensureLoggedIn } = require('connect-ensure-login');
const express = require('express');
const userRoles = require('../userRoles');

const router = express.Router();

router.get(
  '/',
  ensureLoggedIn(),
  userRoles.can('access secret content'),
  (req, res) => {
    res.render('index', { title: 'Secrets', user: req.user });
  },
);

module.exports = router;
