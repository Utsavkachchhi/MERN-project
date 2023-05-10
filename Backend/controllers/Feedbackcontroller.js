const Feedback = require("../model/Feedback");

const AddFeedback = async(req,res) => {
      const data = await Feedback.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        message: req.body.message,
      });
    return  await res.status(200).json(data);

}


module.exports = { AddFeedback };
