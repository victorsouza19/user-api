const knex = require("../database/connection"),
User = require("./User");
const { v4: uuidv4 } = require('uuid');

class PasswordToken{
  async create(email){
    let user = await User.findByEmail(email);

    if(user != undefined){
      try {
        let token = uuidv4();
        await knex.insert({
          users_id: user.id, 
          token, 
          used: 0 
        }).table('password_tokens');
        
        return {status: true, token};
  
      } catch (err) {
        console.log(err);
        return {status: false, err};
      }
    }else{
      return {status: false, err: "E-mail not found!"};
    }
  }

  async validate(token){
    try {
      let result = await knex.select().where({token}).table('password_tokens');

      if(result.length > 0){
        let dbToken = result[0];

        if(dbToken.used){
          return {status: false};
        }else{
          return {status: true, token: dbToken};
        }
      }else{
        return false;
      }
    } catch (err) {
      console.log(err);
      return {status: false, err};
    }
  }

  async setUsed(token){
    try {
      await knex.update({used: 1}).where({token}).table('password_tokens');
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PasswordToken();