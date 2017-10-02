'use strict';
var app = app || {};


(function(module){

  //let schools = [];

  function School(schoolObj){
    Object.keys(schoolObj).forEach(key => this[key] = schoolObj[key])}
  //   this.name = schoolObj.title;
  //   this.url = schoolObj.url;
  //   this.about = schoolObj.about;
  // }
  School.all = [];

  School.prototype.toHTML = function(){
    let content = Handlebars.compile($('#school-template').html());
    return content(this);
  }
  module.School = School;

})(app)
