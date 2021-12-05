class HomeController{

  async index(req, res){
    res.send("Express App: / path is running");
  }

  async validate(req, res){
    res.status(200);
    res.json({res: 'OK!'});
  }

};

module.exports = new HomeController();