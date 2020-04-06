<<<<<<< Updated upstream
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const classRouter = require('./routes/classes.routes')


const cors = require('cors');

const mongoose = require('mongoose')
const SessionStore = require('connect-mongodb-session')(session)

// to load environmental variables
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(classRouter)

const store = new SessionStore({ // where I have to store my Data...
  uri: process.env.MONGO_URL, // the URL for my DB  Bug: Uri instead of url
  collection: 'dbSession' // will create a new Collection 
})

app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: false, store: store })) //for session 2

app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
  console.log("Connected to DB...")

    app.listen(process.env.PORT || 4000)

}).catch(err => console.log(err))

=======
// Core modules and npm modules
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// Local modules
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// Loading environmental variables
dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Logging requests only in the dev environment
console.log('environment : ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
  app.use(logger('dev'));
}



app.use(indexRouter);
app.use(usersRouter);


// Get port from environment and store in Express.
let port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`running on port ${port}`);
});
>>>>>>> Stashed changes
