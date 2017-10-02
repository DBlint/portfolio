'use strict';
var app = app || {};


(function(module){

  //let projects = [];

  function Project(projectObj){
    Object.keys(projectObj).forEach(key => this[key] = projectObj[key])}
  //   this.name = projectObj.title;
  //   this.url = projectObj.url;
  //   this.about = projectObj.about;
  // }
  Project.all = [];

  Project.prototype.toHTML = function(){
    let content = Handlebars.compile($('#project-template').html());
    return content(this);
  }


  module.projectWordCount = () => {
    return Project.all
      .map((project) => project.about.split(' '))
      .reduce((sum, words) => {
        return sum + words.length;
      }, 0);
  }

})(app)
