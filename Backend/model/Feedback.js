const mongoose = require("mongoose");


var emailValidator = function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};


const FeedbackSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, "EmailId required"],
    trim: true,
    validate: [emailValidator, "Enter proper Email Id"],
    lowercase: true,
  },

  mobile: {
    type: Number,
    required: [true, "Contact number is required"],
  },

  message: {
    type: String,
    required: true,
  },
});

//collection

const Feedback = new mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
