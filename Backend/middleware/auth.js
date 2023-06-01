const jwt = require('jsonwebtoken');
require("dotenv").config();

const authenticateToken = (req, res, next) => {
     const token = req.header('Authorization');
     if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
      }

    try{
        console.log("token",token);

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("decode",decoded);
        // req.user = decoded;
    }
    catch(error){
        console.log('error',error);
        return res.status(401).send("Invalid Token");

    }

    return next();

   
  
  };
  
  module.exports = authenticateToken;