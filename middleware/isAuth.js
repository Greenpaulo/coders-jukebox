const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = (req, res, next) => {
  // Check for an authorization header in the incoming request
  const authHeader = req.get('Authorization');
  // If there is no auth header than set flag to false and let it pass through
  if (!authHeader) {
    req.isAuth = false;
    return next()
  }
  // If there is a header than check for a token
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next()
  }
  // If token exists check its valid
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, keys.jwtSecret)
  } catch (err) {
    req.isAuth = false;
    return next()
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next()
  }
  req.isAuth = true;
  // Jwt.verify returns an object with decoded userId
  req.userId = decodedToken.userId;
  next(); 
}