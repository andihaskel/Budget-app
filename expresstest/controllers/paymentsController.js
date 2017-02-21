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

  getSpecificPayment: function(req, res) {
    mongoose.model('Payment').findById(req.params.payment, function (err,Payment){
      if(err){
        console.log(err);
      }
      res.send(Payment);
    });
  },

  editPayment: function (req, res) {
    var now = new Date();
    var actualDate = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var initialMonthlyDate = new Date (actualDate.getFullYear(), actualDate.getMonth(), 02);

    var query = {"_id": req.params.payment};
    console.log(query);

    var update = {name: req.body.name, amount: req.body.amount, isMonthly: req.body.isMonthly, categoryId: req.body.categoryId};
    var options = {new: true};
Payment.findOneAndUpdate(query, update, options, function(err, Payment) {
  if (err) {
    console.log('got an error');
  } else if ((Payment.paymentDate > initialMonthlyDate) && (Payment.paymentDate < actualDate)) {
      console.log(Payment);
  } else {
    res.code(404).send();
    console.log('el payment no es de este mes');
  }


  console.log('edito payment');

});

  },

  delete: function (req,res) {
        console.log('entro a delete');
    mongoose.model('Payment').findById(req.params.payment, function(err, Payment){
        if(err){
          console.log(err);
        } else {
          Payment.remove(function(err){});
        }
    })

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
    // console.log({$gte: initialMonthlyDate , $lte: actualDate});
    mongoose.model('User').findById(req.params.user, function(err,User){
      mongoose.model('Payment').find({
        'userId': User._id,
        'paymentDate': { $gte: initialMonthlyDate , $lte: actualDate}
      }, function(err,Payment){

        res.json(Payment);
      });
    });
  },


  getFixedPayments: function(req,res) {
    mongoose.model('User').findById(req.params.user, function(err,User){
      mongoose.model('Payment').find({
        'userId': User._id,
        'isMonthly': true
      }, function(err,Payment){
        console.log(Payment);
        res.json(Payment);
      });
    });
  },

  getPaymentsForSpecificDate: function (req, res) {
    var now = new Date(req.params.date);
    var initialDate = new Date(now.getFullYear(), now.getMonth(), 02)
    var finalDate = new Date(now.getFullYear(), now.getMonth() + 1, 02);
    console.log(initialDate);
    console.log(finalDate);
    mongoose.model('User').findById(req.params.user, function (err, User){
      mongoose.model('Payment').find({
        'userId': User._id,
        'paymentDate': { $gte: initialDate , $lte: finalDate}
    },
    function(err, Payment) {
      res.send(Payment);
    });
  });
},



getMonthlyBalance: function(req, res) {
  var now = new Date();
  var actualDate = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var initialMonthlyDate = new Date (actualDate.getFullYear(), actualDate.getMonth(), 02);
  mongoose.model('User').findById(req.params.user, function (err, User){
    mongoose.model('Payment').find({'userId': User._id,
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
    var fill = (expensePayment * 100) / incomePayment;
    var balance = incomePayment - expensePayment;
    res.json({fill: fill, balance: balance});
  });
});
}

// transferBalanceToSavings: function() {
//
//
// }


}
