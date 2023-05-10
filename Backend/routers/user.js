const {Router} = require('express')
const user =  new Router();


const {AddUser,NewToken} = require("../controllers/Usercontroller")



user.post('/',AddUser);
user.post('/login',NewToken)


module.exports = user;











