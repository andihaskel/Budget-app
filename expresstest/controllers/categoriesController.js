var mongoose = require ('mongoose');


module.exports = {

  getCategories: function(req, res) {
    mongoose.model('Category').find(function(err,Category){
      res.send(Category);
    });
  },

  store: function(req,res) {
    var category = new Category(req.body);

    category.save(function (err) {
      if (err) return handleError(err);
    });
    console.log(category);
  }
}
