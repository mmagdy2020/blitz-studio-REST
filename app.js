const express = require('express');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const mongoose = require('mongoose')
const MongoDBStore = require('connect-mongodb-session')(session)

const app = express();


const store = new MongoDBStore({ // where I have to store my Data...
  uri: process.env.mongoCLoud_url, // the URL for my DB  Bug: Uri instead of url
  collection: 'dbSession' // will create a new Collection 
})

app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: false, store: store })) //for session 2

app.set('view engine', 'jade');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// view engine setup

app.use(express.urlencoded({ extended: false }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect(process.env.mongoCLoud_url, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
  console.log("Connected to DB...")

    app.listen(process.env.PORT || 3000)

}).catch(err => console.log(err))
