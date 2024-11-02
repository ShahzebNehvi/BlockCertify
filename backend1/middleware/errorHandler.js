const sendResponse = require("../utils/sendResponse");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  sendResponse(res, 500, "Internal Server Error");
};

module.exports = errorHandler;
