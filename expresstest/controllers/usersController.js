var mongoose = require('mongoose');



module.exports = {

  getUsers: function(req,res) {

    mongoose.model('User').findById(req.params.user, function(err, User){
      res.send(User);
    });

  },

  login: function(req,res,next) {
    mongoose.model('User').find({'userName': req.user, 'password': req.password}, function(err,User) {
        if(err){
          res.status(500).send();
        }
        if(!User){
          res.status(404).send();
        }
        if(User){
          next();
        }
    });
  }

}
