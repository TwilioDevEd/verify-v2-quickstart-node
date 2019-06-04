require('dotenv').config({ path: './.env' });

const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const path = require('path');
const { Strategy } = require('passport-local');
const flash = require('flash');
const cookieSession = require('cookie-session');
const usersRouter = require('./routes/users');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const verifyRouter = require('./routes/verify');
const registerRouter = require('./routes/register');
const db = require('./models');
const userRoles = require('./userRoles');

const app = express();

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// initialize authentication middleware
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, done) => {
  db.User.findByPk(id).then((user) => { done(null, user); });
});
passport.use(new Strategy(
  ((username, password, done) => {
    // log.debug({ username, password });
    // log.debug(process.env.NODE_ENV);
    db.User.findOne({
      where: { username },
    })
      .then((user) => {
        // log.debug(user);
        if (user !== null) {
          if (user.isValidPassword(password)) {
            return done(null, user);
          }
        }

        return done(null, false);
      });
  }),
));

app.use(cookieSession({
  secret: 'replace me in production',
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(userRoles.middleware());

app.use(flash());
app.use((req, res, next) => {
  res.locals.current_url = req.path;
  next();
});
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/register', registerRouter);
app.use('/users', usersRouter);
app.use('/verify', verifyRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
