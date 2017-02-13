var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../app.js');
var SavingsAccount = require ('./savingsAccounts');
var Payment = require ('./payments')


var userSchema = new Schema ({
      userName: String,
      password: String,
      email: String,
      balance: { type: Number, default: 0 },
      savingsId: {type: Schema.Types.ObjectId, ref: 'SavingsAccount'},
});



module.exports = mongoose.model('User', userSchema);
