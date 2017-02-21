var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../app.js');
var User = require ('./users');
var savingAccount = require ('./savingsAccounts')

var objectiveSchema = new Schema ({
      name: String,
      amountToSave:{type:Number, required:true},
      amountToSavePerMonth: Number,
      currentAmount: {type:Number, required: true},
      isAchived: Boolean,
      achiveIn: Number,
      userId: {type: Schema.Types.ObjectId, ref: 'User'},

});


module.exports = mongoose.model('Objective', objectiveSchema);
