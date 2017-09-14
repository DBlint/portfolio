'use strict';
var schoolList = [];

$('#portfolio').on('click', showTab);

function showTab(event){

}

function School(name, start, finish, degree) {
  this.name = name;
  this.startDate = start;
  this.endDate = finish;
  this.award = degree;

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

var schools = [new School('Cascadia College', '7/7/77', '7/7/80','Javascript Certificate'), new School('Code Fellows', '8/7/17', '', '')];

School.prototype.toHTML = function(){
  var $newSchool = $('.template.education').clone();
  $newSchool.removeClass('template');
  $newSchool.find('h2.name').text(this.name);
  $newSchool.find('p.startDate').text(this.startDate);
  $newSchool.find('p.endDate').text(this.endDate);
  $newSchool.find('p.award').text(this.award);
  return $newSchool;
}


Project.prototype.toHTML = function(){
  var $newEntry = $('.template.projects ').clone();
  $newEntry.removeClass('template');
  $newEntry.find('h2').text(this.name);
  $newEntry.find('.link').attr('href', this.url);
  $newEntry.find('.description').text(this.about);
  return $newEntry;
}
schools.forEach(function(school){
  $('.content').append(school.toHTML());
});

projects.forEach(function(project){
  $('.content').append(project.toHTML());
});
