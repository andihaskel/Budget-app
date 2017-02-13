var mongoose = require ('mongoose');
var Objective = require ('../routes/objectives');


module.exports = {

  getObjectives: function (req, res){
    mongoose.model('User').findById(req.params.user, function (err, User){
      console.log(User);
      console.log(mongoose.Types.ObjectId(User.id));
      mongoose.model('Objective').find({'userId': mongoose.Types.ObjectId(User.id)}, function(err,Objective){
        res.send(Objective);
      });

    });

  },

  store: function(req){
    mongoose.model('User').findById(req.params.user, function(err, User) {
      var objective = new Objective(req.body);
      console.log(req.body);
      objective.userId = User;
      objective.save(function (err) {
        if (err) console.log(err);
      });
    });
  },

  delete: function(req,res) {
    mongoose.model('Objective').findById(req.params.objective, function(err, Objective) {
      if(err){
        console.log('error objective');
      }
      mongoose.model('User').findById(Objective.userId,function(err, User){
        if(err){
          console.log('error user');
        }
        mongoose.model('SavingsAccount').findById(User.savingsId, function(err, SavingsAccount){
          if (err){
            console.log('error savings account')
          }
          SavingsAccount.balance = SavingsAccount.balance + Objective.currentAmount;
          SavingsAccount.save();
        });
      });
      Objective.remove(function(err) {

      });
    });
  },

  addMoneyFromSavings: function(req, res){
    mongoose.model('Objective').findById(req.params.objective, function(err, Objective) {
      mongoose.model('SavingsAccount').findById(req.body.savings, function(err, SavingsAccount){

        var objective = Objective;
        var savings = SavingsAccount;
        objective.currentAmount = parseInt(objective.currentAmount)+ req.body.amountForObjective;
        savings.balance = savings.balance - req.body.amountForObjective;

        objective.save(function (err) {
          if (err) return handleError(err);
        });
        savings.save(function (err) {
          if (err) return handleError(err);
        });

      });
    });
  },

  getSpecificObjective: function(req,res){
    mongoose.model('Objective').findById(req.params.objective, function(err,Objective){
      if(err){
        handleError(err);
      } else{
        res.send(Objective);
      }
    });
  }

};
