'use strict';
module.exports = function(app) {
  var Student = require('../controllers/student');

  // todoList Routes
  app.route('/student')
    .get(Student.all_student)
    .post(Student.create_student);


  app.route('/student/:Id')
    .get(Student.show_student)
    .put(Student.update_student)
    .delete(Student.delete_student);
};
