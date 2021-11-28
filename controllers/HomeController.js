class HomeController{

  async index(req, res){
    res.send("Express App: / path is running");
  }

};

module.exports = new HomeController();