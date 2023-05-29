 const mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect("mongodb://localhost:27017/MERN", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then( () => console.log("connection successfull..."))
.catch( (err) => console.log(err));
