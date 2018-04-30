'use strict';


var mongoose = require('mongoose'),
  Student = mongoose.model('Students');

exports.all_student = function(req, res) {
  Student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};




exports.create_student = function(req, res) {
  var new_student = new Student(req.body);
  new_student.save(function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.show_student = function(req, res) {
  Student.findById(req.params.Id, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.update_student = function(req, res) {
  Student.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.delete_student = function(req, res) {


  Student.remove({
    _id: req.params.Id
  }, function(err, student) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};