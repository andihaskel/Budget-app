var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../app.js');
var User = require ('./users');

var savingsAccountSchemma = new Schema ({
      name: String,
      balance: Number,
      userId: {type: Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model('SavingsAccount', savingsAccountSchemma);
