var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../app.js');


var categorySchema = new Schema ({
      name: String
});


module.exports = mongoose.model('Category', categorySchema);
