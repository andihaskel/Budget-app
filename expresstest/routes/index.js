var express = require('express');
var router = express.Router();

var cron = require('node-cron');


var savingsAccountController = require ('../controllers/savingsAccountController');
var categoryController = require ('../controllers/categoriesController');
var objectiveController = require ('../controllers/objectivesController');
var paymentController = require ('../controllers/paymentsController');
var userController = require ('../controllers/usersController');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:user', function(req, res, next) {
    userController.getUsers(req,res);
});

cron.schedule('0 0 1 * *', paymentController.transferBalanceToSavings );

router.get('/categories', categoryController.getCategories);

router.post('/categories', categoryController.store);

router.get('/:user/objectives', objectiveController.getObjectives);

router.post('/:user/objective', objectiveController.store);

router.delete('/objective/:objective', objectiveController.delete);

router.delete('/payment/:payment', paymentController.delete);

router.put('/:objective/addMoney', objectiveController.addMoneyFromSavings);

router.get('/:user/payments', paymentController.getPayments);

router.get('/:user/payments/monthlyPayments', paymentController.getMonthlyPayments);

router.get('/:user/payments/fixedPayments', paymentController.getFixedPayments);

router.get('/:user/payments/balance', paymentController.getMonthlyBalance);

router.get('/:user/payments/:date', paymentController.getPaymentsForSpecificDate);



router.post('/:user/payment', paymentController.store);

router.post('/user/newUser', userController.createUser);

router.post('/login', userController.login);


//router.put('/:user/savings/addMoney/:Date', savingsAccountController.addMoney);

router.get('/:objective/', objectiveController.getSpecificObjective);

router.get('/payment/:payment', paymentController.getSpecificPayment);

router.put('/payment/:payment', paymentController.editPayment);


router.get('/:user/savings', savingsAccountController.getSavingsAccount);

router.get('/:user/monthsActive', userController.getActiveMonths);




exports.index = function(req, res){
  res.render('index', { title: 'ejs' });};

module.exports = router;
