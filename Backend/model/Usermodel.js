const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  mobile : {
    type : String,
    required : true,
  },

  password: {
    type: String,
    required: true,
  },

  is_deleted: {
    type: Number,
    min:0,
    max:1,
    default:0
}
});

//collection

const User = new mongoose.model("User", userSchema);

module.exports = User;
