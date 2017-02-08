var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../app.js');
var User = require('./users');


var paymentSchema = new Schema ({
      name: String,
      isIncome: {type: Boolean, required: true},
      amount: {type: Number, required: true},
      currency: {type: String},
      isMonthly: Boolean,
      paymentDate: {type:Date, default: function(){return new Date()}},
      categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
      userId : {type: Schema.Types.ObjectId, ref: 'User'}

});


module.exports = mongoose.model('Payment', paymentSchema);
