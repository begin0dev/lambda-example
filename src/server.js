const express = require('express');
const serverless = require('serverless-http');

const db = require('./models');
const router = require('./router');

const app = express();
const port = 4000;

// database setting
db.sequelize.sync().then(() => {
  console.log('DB Connection has been established');
}, (err) => {
  console.error('Unable to connect to the DB:', err);
});

// init express setting
app.use(express.json());

// setting router
app.use('/api', router);

// error handler
app.use((err, req, res, next) => {
  console.error('---------------- ERROR ----------------');
  console.error(err.message);
  // TODO slack 추가 필요 production 일 때만
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
  next();
});

// local port
if (process.env.NODE_ENV === 'local') {
  app.listen(port, (err) => {
    if (err) return console.log(err);
    return console.log(`Server is running on port ${port}`);
  });
}

module.exports.handler = serverless(app);
