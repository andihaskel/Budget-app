var mongoose = require('mongoose');
var User = require ('../routes/users');
var moment = require('moment');



module.exports = {

  getUsers: function(req,res) {

    mongoose.model('User').findById(req.params.user, function(err, User){
      res.send(User);
    });

  },

  getActiveMonths: function (req,res) {
    var now = new Date();
    var actualDate = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var activeDates = [];
    mongoose.model('User').findById(req.params.user, function(err, User){

      for (var m = moment(User.dateCreated); m.diff(actualDate, 'days') <= 0; m.add(1, 'days')) {
        if(activeDates.indexOf(m.format('YYYY-MM')) == -1) {
                activeDates.push((m.format('YYYY-MM')));
        }
      }
      res.send(activeDates);
    });

  },


  login: function(req,res,next) {
    console.log('login');
    mongoose.model('User').findOne({'email': req.body.email, 'password': req.body.password}, function(err,User) {
        if(err){
          res.status(500).send();
        }
        if(!User){
          res.code(404).send();
        }
        if(User){
          console.log('user', User);
          res.send(User);
        }
    });
  },

  createUser: function(req,res) {
      var newUser = new User (req.body);
      console.log(newUser);
      newUser.save(function(err){
        if(err){
          console.log('error',err);
        }
      });
  }



}
