const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorisation");
    if (!token) return res.status(400).json({ msg: "Invalid Authorisation" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, users) => {
      if (err) return res.status(400).json({ msg: "Invalid Authorisation" });
      req.users = users;
      next();
    });
  } catch (err) {}
};

module.exports = auth;
