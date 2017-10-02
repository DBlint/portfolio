'use strict';

var app = app || {};

(function(module){

  const schoolController = {};

  schoolController.index = function() {if (localStorage.schoolData){
    JSON.parse(localStorage.schoolData).forEach(function(object){module.School.all.push(new module.School(object)); });
    module.render(module.School.all);
  }else {
    $.get('data/schools.json', function(result){
      localStorage.setItem('schoolData', JSON.stringify(result));
      result.forEach(function(object){
        module.School.all.push(new module.School(object));
      });
      module.render(module.School.all);
    });
  }}

  // $('#education').on('click', showEducation);
  schoolController.showEducation = function(){
    $('.content section').hide();
    $('.education').show();
  }



//}  wrap the bling into the .index() function.

})(app);
