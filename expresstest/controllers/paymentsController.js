  var mongoose = require('mongoose');
  var Payment = require ('../routes/payments');

  module.exports = {

    getPayments: function(req, res) {
      mongoose.model('User').findById(req.params.user, function(err,User){
        mongoose.model('Payment').findById(User.paymentId, function (err,Payment){
          res.send(Payment);
        });
      });
    },

    store: function (req,res) {
        mongoose.model('User').findById(req.params.user, function(err, User){
          console.log(req.body);
          var payment = new Payment(req.body);
          payment.userId = User._id;
          payment.save(function(err){
            if (err) {
              console.log(err);
            }
          });
           console.log(payment);
           res.send(payment);
      });

  },

  getMonthlyPayments: function(req, res) {
    var now = new Date();
    var actualDate = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var initialMonthlyDate = new Date (actualDate.getFullYear(), actualDate.getMonth(), 02);
    mongoose.model('User').findById(req.params.user, function(err,User){
      mongoose.model('Payment').find({'_id':{$in: User.paymentId},
                                      'paymentDate': { $gte: initialMonthlyDate , $lte: actualDate}
                                      }, function(err,Payment){

        res.json(Payment);
      });
    });
  },

  getSpecificIncomes: function (req, res) {
    var initialDate = new Date(req.params.initialDate);
    var finalDate = new Date(req.params.finalDate);
    mongoose.model('User').findById(req.params.user, function (err, User){
      mongoose.model('Payment').find({'_id':{$in: User.paymentId},
                                      'paymentDate': { $gte: initialDate , $lte: finalDate},
                                      'isIncome': true,

                                  },
      function(err, Payment) {
        res.send(Payment);
      });
    });
  },

  getSpecificExcomes: function (req, res) {
    var initialDate = new Date(req.params.initialDate);
    var finalDate = new Date(req.params.finalDate);
    mongoose.model('User').findById(req.params.user, function (err, User){
      mongoose.model('Payment').find({'_id': {$in: User.paymentId},
                                      'paymentDate': { $gte: initialDate , $lte: finalDate},
                                      'isIncome': false,

                                  },
      function(err, Payment) {
        res.json(Payment);
      });
    });
  },

  getMonthlyBalance: function(req, res) {
    var now = new Date();
    var actualDate = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var initialMonthlyDate = new Date (actualDate.getFullYear(), actualDate.getMonth(), 02);
    mongoose.model('User').findById(req.params.user, function (err, User){
      mongoose.model('Payment').find({'_id': {$in: User.paymentId},
      'paymentDate': { $gte: initialMonthlyDate , $lte: actualDate}
    },
    function(err, Payment) {
      var incomePayment = 0;
      var expensePayment = 0;
      Payment.forEach(function(payment){
        if(payment.isIncome){
          incomePayment += payment.amount;
        }
        else {
          expensePayment += payment.amount;
        }
      });
        var balance = incomePayment - expensePayment;
        res.json(balance);
    });
  });
}


  }
