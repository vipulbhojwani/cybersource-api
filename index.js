const express = require('express')


var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var crypto = require('crypto');


var port = process.env.PORT || 8080;


//var indexRouter = require('routes/index');
// var cyberSourceRouter = require('./routes/cybersource');

var SECRET_KEY = "371ad0c595ad44a392c9040d0559277153657b33820b45ea97ec500b8363c4917667a7c4f8a249c5854a637c8faff758c6ccf2f35288467a982126da28af48e911dcdce3ae034fb0b4bc1e86f66a9cf62f4cdf7eb30a436296a7edfd67690a516d31805e5ca84c93b244f1fe283a954b90755ef6544d4f23a241d6fe478a13e7";

var app = express();


// app.use('/encode', indexRouter);
// app.use('/cybersource', cyberSourceRouter);



// var cors = require('cors')



//app.use(cors())


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/dist/app')));

 app.get('/', (req, res) => res.send('Hello World!'))
 
 
 app.get('/encode/:data', function(req, res) {
  
  // let dataToEncode=req.data;

  console.log(req.params.data);
  var signature;
   try{
   signature = generateDigest(req.params.data);
   res.send({signature: signature});
   }
   catch(e)
   {
	   res.send(e);
   }
   
  
  
  
  
//    res.send({signature: req.params.data});
  
  //res.send(req.params.data);

  //res.render('index', { title: 'Express' });
});


function generateDigest(payload) {
	
	console.log("1");
	var buffer = Buffer.from(payload, 'utf8');
	console.log("2");
	
	const hash = crypto.createHmac('sha256', SECRET_KEY);
	
	console.log("3");
	
	hash.update(buffer);
	
	var digest = hash.digest('base64');
	
	return digest;
}




// app.use('/encode', indexRouter);
// app.use('/cybersource', cyberSourceRouter);




app.listen(port);


//module.exports = app;

// var createerror = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieparser = require('cookie-parser');
// var logger = require('morgan');
// var path = require('path');

// const app = express()
// const port = process.env.PORT || 8080

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))




