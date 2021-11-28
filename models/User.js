const knex = require("../database/connection"),
bcrypt = require('bcrypt');

class User{

  async findAll(){
    try {
      let result = await knex.select(["id", "name", "email", "role"]).table('users');
      return result;

    } catch (error) {
      console.log(err);
      return [];
    }
  }

  async findById(id){
    try {
      let result = await knex.select(["id", "name", "email", "role"])
      .table('users')
      .where({id});

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

  async insert(user){
    try {
      let {email, password, name, role} = user;

      let hashedPassword = await bcrypt.hash(password, 8);
      await knex.insert({email, password: hashedPassword, name, role}).table('users');
      return true;
      
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async findEmail(email){
    try {
      let result = await knex.select("*").from("users").where({email});
      if(result.length > 0){
        return true;
      }else{
        return false;
      }
      
    } catch (error) {
      console.log(err);
      return false;
    }
  }
}

module.exports = new User();