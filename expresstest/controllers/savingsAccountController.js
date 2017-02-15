var mongoose = require ('mongoose');


module.exports = {
  getSavingsAccount: function (req,res) {
    mongoose.model('User').findById(req.params.user, function(err, User) {
      if(err){
        return handleError(err);
      }
      mongoose.model('SavingsAccount').findById(User.savingsId, function (err, SavingsAccount){
        if(err){
          return handleError(err);
        }
        res.send(SavingsAccount);
      });
    });
  },

  }
  //
  // addMoney: function (req,res) {
  //         var date = req.params.Date;
  //
  //         mongoose.model('User').findById(req.params.user, function(err, User) {
  //           if(err){
  //             return handleError(err);
  //           }
  //           mongoose.model('SavingsAccount').findById(User.savingsId, function (err, Savings){
  //             Savings.balance += Objective.currentAmount;
  //
  //           })
  //       })
