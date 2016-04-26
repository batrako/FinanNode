var express = require('express');
var router = express.Router();

var ctrlMain=require('../controllers/main.js');


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/account', ctrlMain.account);


module.exports = router;
