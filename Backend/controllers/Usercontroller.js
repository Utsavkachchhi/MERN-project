const User = require("../model/Usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//Add new User

const AddUser = async (req, res) => {

  if (!req.body.name) {
    return res.status(200).send({success: false, message: 'name is required!'});
  }

  if (!req.body.email) {
    return res.status(200).send({success: false, message: 'email is required!'});
  }

  if (!req.body.mobile) {
    return res.status(200).send({success: false, message: 'mobile is required!'});
  }

  if (!req.body.password) {
    return res.status(200).send({success: false, message: 'password is required!'});
  }

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile : req.body.mobile,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user = await user.save();
  
  if (!user) return res.status(400).send("the user cannot be created!");
  const token = jwt.sign({userId: user.id,},"secret",{ expiresIn: "1d" });

  res.status(200).send({
    success: true,
    message: 'Register successful!',
    data: {
      id: user._id,
      email: user.email,
      mobile: user.mobile,
      token:token
    }
    
  });
};

//Token Generate

const NewToken = async (req, res) => {
  // const { email } = req.body;

  const user = await User.findOne({ email: req.body.email });


  // const secret = process.env.JWT_SECRET_KEY;
  if (!user) {
    return res.status(200).send({success: false, message: 'user not found!'});
  }
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign({userId: user.id},`${process.env.JWT_SECRET_KEY}`,{ expiresIn: "1d" });
  // res.status(200).send({id:user._id,email: user.email, token: token,mobile:user.mobile });
    res.status(200).send({
      success: true,
      message: 'Login successful!',
      data: {
        id: user._id,
        email: user.email,
        token: token,
        mobile: user.mobile
      }
      
    });
  } else {
    return res.status(200).send({success: false, message: 'Invalid password!'});
  }
};

module.exports = { AddUser, NewToken };
