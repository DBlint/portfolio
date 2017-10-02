'use strict';

var app = app || {};

(function(module){

  const projectController = {};

  projectController.index = function(){
    if (localStorage.projectData){
      JSON.parse(localStorage.projectData).forEach(function(object){ app.Project.all.push(new app.Project(object)); });
      app.render(app.Project.all);
    }else {
      $.get('data/projects.json', function(result){
        localStorage.setItem('projectData', JSON.stringify(result));
        app.Project.all = result.map(function(obj){
          return new app.Project(obj)
        });
        app.render(app.Project.all);
      });
    }
  }

  //$('#portfolio').on('click', showProjects);
  projectController.showProjects = function(){
    $('.content section').hide();
    $('.projects').show();
  }

//}  wrap the bling into the .index() function.

})(app);
