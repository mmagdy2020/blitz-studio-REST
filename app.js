const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const classRouter = require('./routes/classes.routes');
const attendanceRouter = require('./routes/attendance.routes'); // Mike
const userRouter = require('./routes/user.route') // Sophia



const cors = require('cors');

const mongoose = require('mongoose')
const SessionStore = require('connect-mongodb-session')(session)

// to load environmental variables
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mounting routers
app.use(classRouter);
app.use(attendanceRouter); //Mike
app.use(userRouter); // Sophia

const store = new SessionStore({ // where I have to store my Data...
  uri: process.env.MONGO_URL, // the URL for my DB  Bug: Uri instead of url
  collection: 'dbSession' // will create a new Collection 
})

app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: false, store: store })) //for session 2

app.use(express.urlencoded({ extended: false }));

let port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
  console.log("Connected to DB...")

    app.listen(port || 4000, () => console.log(`Listening on port ${port}`))

}).catch(err => console.log(err))
