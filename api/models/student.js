'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  nombre: {type:String,
           required:'Kindly enter the name of the student' } ,
  
  materias:[{nombre:{type:String},calificacion:{type:Number}}] 
});

module.exports = mongoose.model('Students', StudentSchema);
