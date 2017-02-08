var index = require('../routes/index');
var User = require('../routes/users');
var Objective = require('../routes/objectives');
var Payment = require('../routes/payments');
var Payment = require('../routes/categories');

var mongoose = require('mongoose');

module.exports = {
  seeds: function (){
    var obj = new Objective ({name:'objetivo de andres'});
    //obj.save();
    //-------
    //--//
    var andres = new User ({
        userName: 'andres',
        objective: mongoose.Types.ObjectId(obj.id)
    });
    console.log('a', andres);
    //andres.save();

    //-----
    var incomeAndres = new Payment({
      isIncome:true,
      amount: 12,
      currency:'pesos',
      userId: mongoose.Types.ObjectId(andres.id)

    });
    console.log('a', incomeAndres);
  //  incomeAndres.save();

  }

};
