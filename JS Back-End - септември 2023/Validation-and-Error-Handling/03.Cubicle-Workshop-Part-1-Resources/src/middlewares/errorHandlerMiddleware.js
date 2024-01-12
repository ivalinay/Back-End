const { extractErrorMsgs } = require("../utils/errorHandle");

module.exports = (err, req, res, next) => {
  const errorMessages = extractErrorMsgs(err);
 console.log({errorMsgFromMiddleware: errorMessages});
  res.render('404', {errorMessages})
};
