const knex = require("../database/connection"),
{ v4: uuidv4 } = require('uuid');

class PasswordToken{
  async create(email){
    let user = await this.findByEmail(email);

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

  async findByEmail(email){
    try {
      let result = await knex.select(["id", "name", "email", "role"])
      .table('users')
      .where({email});

      if(result.length > 0){
        return result[0];
      }else{
        return undefined;
      }
      

    } catch (error) {
      console.log(err);
      return undefined;
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