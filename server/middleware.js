const jsonwebtoken = require('jsonwebtoken')

exports.malformedUrl = (req, res, next) => {
  var err = null;
  try {
    decodeURIComponent(req.path)
  }
  catch (e) {
    err = e;
  }
  if (err) {
    return res.redirect(['https://', req.get('Host'), '/404'].join(''));
  }
  //Once the error handler is done, next() will jump to the next function
  next()
}

exports.verifyUserAuth = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
      if (err) req.data = undefined
      req.data = decode
      next()
    })
  } else {
    req.data = undefined
    next()
  }
}
