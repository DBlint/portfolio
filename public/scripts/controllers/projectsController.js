'use strict';

var app = app || {};

(function(module){

  const projectController = {};

  projectController.index = function(){
    if (localStorage.projectData){
      JSON.parse(localStorage.projectData).forEach(function(object){ module.Project.all.push(new module.Project(object)); });
      module.render(module.Project.all);
    }else {
      $.get('data/projects.json', function(result){
        localStorage.setItem('projectData', JSON.stringify(result));
        module.Project.all = result.map(function(obj){
          return new module.Project(obj)
        });
        module.render(module.Project.all);
      });
    }
  }

  //$('#portfolio').on('click', showProjects);
  projectController.showProjects = function(){
    $('.content section').hide();
    $('.projects').show();
  }

  //}  wrap the bling into the .index() function.
  module.projectController = projectController;

})(app);
