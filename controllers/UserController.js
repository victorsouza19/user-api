const User = require("../models/User");

class UserController{

  async index(req, res){
    let users = await User.findAll();
    res.json(users);
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
}

module.exports = new UserController();