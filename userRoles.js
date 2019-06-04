const ConnectRoles = require('connect-roles');

const userRoles = new ConnectRoles({
  failureHandler(req, res, action) {
    if (action === 'access secret content') {
      return res.redirect('/verify');
    }
    return res.render('access-denied', { title: 'Access Denied' });
  },
});

userRoles.use('access secret content', (req) => {
  if (req.user.role === 'access secret content') {
    return true;
  }
  return false;
});

module.exports = userRoles;
