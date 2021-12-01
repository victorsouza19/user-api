const knex = require("../database/connection"),
PasswordToken = require("./PasswordToken"),
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
        return {status: true, user: result[0]};
      }else{
        return {status: false};
      }
      
    } catch (error) {
      console.log(err);
      return {status: false};
    }
  }

  async update(user){
    const {id, name, email, role} = user;
    
    let userData = await this.findById(id);

      if(userData != undefined){
        let userEdit = {};

        if(email != undefined){
          if(email != userData.email){
            let result = await this.findEmail(email);

            if(result == false){
              userEdit.email = email;
            }else{
              return {status: false, err: "E-mail already in use!"}
            }
          }
        }

        if(name != undefined){
          userEdit.name = name;
        }

        if(role != undefined){
          if(isNaN(role)){
            return {status: false, err: "Role must be a number."}
          }else{
            if(role != 0 && role != 1){
              return {status: false, err: "Invalid role."}
            }else{
              userEdit.role = role;
            }
          } 
        } 

        try {
          await knex.update(userEdit).where({id}).table('users');
          return {status: true}
        } catch (error) {
          return {status: false, err}
        }

      }else{
        return {status: false, err: "User not found!"}
      }
  }

  async destroy(id){
    let user = await this.findById(id);

    if(user != undefined){
      try {
        await knex.delete().where({id}).table('users');
        return {status: true};

      } catch (err) {
        return {status: false, err};
      }
    }else{
      return {status: false, err: 'User not found, cannot be deleted.'};
    }   
  }

  async changePassword(data){
    const {newPassword, token, id} = data;

    let hashedPassword = await bcrypt.hash(newPassword, 8);
    await knex.update({password: hashedPassword}).where({id: id}).table('users');
    await PasswordToken.setUsed(token);
  }
}

module.exports = new User();