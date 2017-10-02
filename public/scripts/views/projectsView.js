'use strict';
var app = app || {};


(function(module){

  app.projectController.index();
  $('.content').append(`<p> Project word count: ${module.projectWordCount()}`);

})(app)
