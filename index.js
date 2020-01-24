const express = require('express')


var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var crypto = require('crypto');


var port = process.env.PORT || 8080;


var indexRouter = require('routes/index');
// var cyberSourceRouter = require('./routes/cybersource');

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
 
 
 app.get('/encode/:data', function(req, res, next) {
  
  // let dataToEncode=req.data;

  console.log(req.params.data);
  
//  res.send({signature: generateDigest(req.params.data)});
  
    res.send({signature: req.params.data});
  
  //res.send(req.params.data);

  //res.render('index', { title: 'Express' });
});


// function generateDigest(payload) {

	// var buffer = Buffer.from(payload, 'utf8');
	
	// const hash = crypto.createHmac('sha256', SECRET_KEY);
	
	// hash.update(buffer);
	
	// var digest = hash.digest('base64');
	
	// return digest;
// }




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




