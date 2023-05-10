const User = require("../model/Usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
//Add new User

const AddUser = async (req, res) => {
  console.log(req.body);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile : req.body.mobile,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created!");

  res.send(user);
};

//Token Generate

const NewToken = async (req, res) => {
  // const { email } = req.body;

  const user = await User.findOne({ email: req.body.email });

  console.log(req.body);

  const secret = process.env.secret;

  if (!user) {
    return res.status(400).send("The user not found");
  }

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
      {
        userId: user.id,
      },
      "secret",
      { expiresIn: "1d" }
    );
    res.status(200).send({id:user._id,email: user.email, token: token,mobile:user.mobile });
  } else {
    res.status(400).send("password is wrong please enter correct password!");
  }
};

module.exports = { AddUser, NewToken };
