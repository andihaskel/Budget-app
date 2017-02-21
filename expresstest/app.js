var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

// var session = require('express-session');



var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost:27017', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});

var index = require('./routes/index');
var User = require('./routes/users');
var Objective = require('./routes/objectives');
var Payment = require('./routes/payments');
var Category = require('./routes/categories');
var SavingsAccount = require ('./routes/savingsAccounts');



// var hola = new User ({
//     userName: 'andres'
// });
// hola.save();
  //
  // var cat1 = new Category ({name:'category de andres'});
  // cat1.save();
  // var payment1= new Payment ({
  //   name: 'vegetales',
  //   isIncome: true,
  //   isMonthly: true,
  //   categoryId:cat1._id,
  //   amount: 30,
  // });
  //   // User.paymentId.push(mongoose.Types.ObjectId(payment1._id));
  // payment1.save(function(err, Payment) {
  //   var user1 = new User({
  //     'userName': 'andi',
  //     'initialCycleDate': 8,
  //     'paymentId': mongoose.Types.ObjectId(payment1._id)
  //   });
  //   user1.save(function (err,User){
  //     if(err) {console.log(err)};
  //   });
  // });





// var ejemplo2 = new SavingsAccount({
//   balance: 300
// });
// ejemplo2.save(function(err, savingsAccount){
//   var objEjemplo2 = new Objective({
//       name: 'ejemplo2',
//       currentAmount: 100,
//       savingsId: mongoose.Types.ObjectId(savingsAccount.id)
//   });
//   objEjemplo2.save();
//   var user1 = new User({
//     savingsId: mongoose.Types.ObjectId(savingsAccount.id),
//     name: 'andi'
//   });
//   user1.save();
// });




//
// //-----
// var incomeAndres = new Payment({
//   isIncome:true,
//   amount: 12,
//   currency:'pesos',
//   userId: mongoose.Types.ObjectId(andres.id)
//
// });
// incomeAndres.save();


var app = express();
var server = http.createServer(app);

// server.listen(3000,'localhost',function(){
//  server.close(function() {
//  });
// });

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({secret: 'max', saveUnitialized: false, resave: false }));

app.use('/', index);

//app.use('/categories', categories);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {

  };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
