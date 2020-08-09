//get express, mongoose and body parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//get model of report
const Report = require('./routes/APIs/Report');

//start express appllication
const app = express();

app.use(bodyParser.json());

//get databse key
const db = require('./config/keys').mongoURI;

//connect to database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

//connect to routes folder for API requests
app.use('/api/report', Report);

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//get port
const port = process.env.PORT || 5000;

//listen to port
app.listen(port, () => console.log(`listening to port ${port}`));
