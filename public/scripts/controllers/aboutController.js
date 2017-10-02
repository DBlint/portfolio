'use strict';

var app = app || {};

(function(module){

  const aboutController = {};

  aboutController.index = function(){
    app.projectController.index();
    app.schoolController.index();
  }

  //$('#home').on('click', showAll);
  aboutController.showAll = function() {
    $('.content section').show();
  }

  //}  wrap the bling into the .index() function.
  module.aboutController = aboutController;

})(app);
