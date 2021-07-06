const users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
const  {CLIENT_URL} =process.env.CLIENT_URL
const sendEmail = require("./sendMail")
const UserController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please Enter all the Fields" });
      }
      if (!validateEmail(email)) {
        return res.status(400).json({ msg: "invalid Email Address" });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be must be more than 6 charaters" });
      }
      const user = await users.findOne({ email });
      if (user) return res.status(400).json({ msg: "User Already Exist" });

      const passwordHash = await bcrypt.hash(password, 12);
    
      const newUser = {
        name,
        email,
        password: passwordHash,
      };

      const Activation_Token = createActivationToken(newUser)
      const url=`${CLIENT_URL}/user/activate/${Activation_Token}`
      sendMail(email,url)
      res.json({ msg: "Register Successfull Please activate your mail to Login " });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const createActivationToken=(payload)=>{
    return jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{
        expiresIn:'5m'
    })
}
const createAccessToken=(payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'15m'
    })
}
const createRefreshToken=(payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:'7D'
    })
}

module.exports = UserController;
