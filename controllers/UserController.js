const User = require("../models/User"),
PasswordToken = require("../models/PasswordToken");

class UserController{

  async index(req, res){
    let users = await User.findAll();
    res.json({users});
  }

  async findOne(req, res){
    let id = req.params.id;
    let user = await User.findById(id);

    if(user == undefined){
      res.status(404);
      res.json({res: "User not found."});
    }else{
      res.status(200);
      res.json({user});
    }
  }

  async create(req, res){
    let {name, email, password, role} = req.body;
    console.log(req.body);

    /* form validations */
    if(email == undefined || email == '' || email == ' '){
      res.status(400);
      return res.json({err: 'E-mail cannot be empty.'});
    }
    if(password == undefined || password == '' || password == ' '){
      res.status(400);
      return res.json({err: 'Password cannot be empty.'});
    }
    if(role != undefined){
      if(isNaN(role)){
        res.status(400);
        return res.json({err: 'Role must be a number.'});
      }
      if(role != 0 && role != 1){
        res.status(400);
        return res.json({err: 'Invalid role.'});
      }
    }else{
      role = 0;
    }

    let emailExists = await User.findEmail(email);
    if(emailExists){
      res.status(406);
      return res.json({err: "E-mail already in use."});
    }

    let user = { name, email, password, role };
    let result = await User.insert(user);

    if(result){
      res.status(200);
      return res.json({res: "User created."});
    }else{
      res.status(500);
      return res.json({err: "Internal server error during the user creation."});
    }
  }

  async edit(req, res){
    const {name, email, role} = req.body;
    const user = {id: req.params.id, name, email, role};

    let result = await User.update(user);
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.json({res: 'User updated!'});

      }else{
        res.status(406);
        res.json({result});

      }
    }else{
      res.status(500);
      res.json({err: 'Internal server error!'});
    }
  }

  async delete(req, res){
    const id = req.params.id;

    let result = await User.destroy(id);

    if(result.status){
      res.status(200);
      res.json({res: 'User deleted.'});
    }else{
      res.status(406);
      res.json({result});
    }
  }

  async recoverPassword(req, res){
    const email = req.body.email;

    let result = await PasswordToken.create(email);

    if(result.status){
      /* Send e-mail to user with NodeMailer.send(result.token)*/ 
      res.status(200);
      return res.json({result});

    }else{
      res.status(406);
      return res.json({result});

    }
  }

  async changePassword(req,res){
    let token = req.body.token;
    let password = req.body.password;

    let isTokenValid = await PasswordToken.validate(token);

    if(isTokenValid.status){
      let id = isTokenValid.token.users_id;
      let data = {newPassword: password, token, id}
      await User.changePassword(data);
      res.status(200);
      res.json({res: 'Password changed.'})



    }else{
      res.status(406);
      res.json({err: 'Invalid token.'})
    }
  }
}

module.exports = new UserController();