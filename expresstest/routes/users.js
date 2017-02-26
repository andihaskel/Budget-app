var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../app.js');
var SavingsAccount = require ('./savingsAccounts');
var Payment = require ('./payments')


var userSchema = new Schema ({
      userName: {type: String, required: true},
      password: {type: String, required: true},
      email: {type: String, required: true},
      dateCreated: {type: Date, default: new Date()},
      savingsId: {type: Schema.Types.ObjectId, ref: 'SavingsAccount', default: new SavingsAccount()},
});



module.exports = mongoose.model('User', userSchema);
