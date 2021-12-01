const knex = require("../database/connection"),
jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken  != undefined){
      const bearer = authToken.split(' ');
      let token = bearer[1];
      try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        if(decoded.role == 1){
          next();
        }else{
          res.status(401);
          return res.json({err: 'Unauthorized request, you do not have the necessary permission.'});
        }
        
      } catch (error) {
        res.status(401);
        return res.json({err: 'Unauthorized request, please login.'});
      }
      

    }else{
      res.status(401);
      return res.json({err: 'Unauthorized request, please login.'});
    }
}