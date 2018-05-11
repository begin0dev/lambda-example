const express = require('express');
const serverless = require('serverless-http');

const db = require('./models');
const router = require('./router');

const app = express();
const port = 4000;

// init express setting
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database setting
db.sequelize.sync().then(() => {
  console.log('DB Connection has been established');
}, (err) => {
  console.error('Unable to connect to the DB:', err);
});

// setting router
app.use('/api', router);

// error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.error(err.message);
  next(err);
});

app.use((err, req, res) => {
  console.error(err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

// local port
if (process.env.NODE_ENV === 'local') {
  app.listen(port, (err) => {
    if (err) return console.log(err);
    return console.log(`Server is running on port ${port}`);
  });
}

module.exports.handler = serverless(app);
