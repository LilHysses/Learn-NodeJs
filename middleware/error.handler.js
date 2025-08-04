const { stack } = require("../routes/user");


function errorLogs (err, req, res, next) {
  console.log('errorlogs');
  console.error(err);
  next(err);
}

function handlerError(err, req, res, next) {
  console.log('handlerError')
  res.status(501);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

module.exports = {
  errorLogs,
  handlerError
}
