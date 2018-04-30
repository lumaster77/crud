var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Student = require('./api/models/student'),//creamos el modelo
  bodyParser = require('body-parser');

  //mongoose intance connection url connetcion
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/escuela');

  app.use(bodyParser.urlencoded({ extended:true}));
  app.use(bodyParser.json());

  var routes = require('./api/routes/student');
  routes(app);

app.listen(port);

console.log('todo listo RESTful API server started on: ' + port);
