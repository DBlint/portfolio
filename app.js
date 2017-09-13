'use strict';
var schoolList = [];

function School(name, start, finish, degree) {
  this.name = name;
  this.startDate = start;
  this.endDate = finish;
  this.result = degree;

  this.addSchool = function(){
    schoolList.push(this);
  }
}

function Project(name, link, description){
  this.name = name;
  this.url = link;
  this.about = description;

  this.addProject = function() {
    // projects.push(this);
  }
}

var projects = [new Project('Bus Mall', 'https://rjb888.github.io/bus-mall/', 'Market research site for the Bus Mall'), new Project('HomeFit', 'https://famavott.github.io/Home-Workout-Generator/index.html','HomeFit is a web app I helped develop which was designed to allow a user to have a personalized workout generated for them based on their desired results.'), new Project('Salmon Cookies', 'https://rjb888.github.io/cookie-stand/','This was a site designed to help an entrapreneur manage his Salmon Cookie shops')];


Project.prototype.toHTML = function(){
  var $newEntry = $('.template').clone();
  $newEntry.removeClass('template');
  $newEntry.find('h2').text(this.name);
  $newEntry.find('.link').attr('href', this.url);
  $newEntry.find('.description').text(this.about);
  return $newEntry;
}

projects.forEach(function(project){
  $('.content').append(project.toHTML());
});
