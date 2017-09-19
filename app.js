'use strict';
/* Global var Declarations */
var schools = [];
var projects = [];

$('#portfolio').on('click', showProjects);
function showProjects(){
  $('.content section').hide();
  $('.projects').show();
}
$('#education').on('click', showEducation);
function showEducation(){
  $('.content section').hide();
  $('.education').show();
}
$('#home').on('click', showAll);
function showAll() {
  $('.content section').show();
  $('.template').hide();
}

$('.hamburger').on('click', showNav);
function showNav(){
  $('nav section').toggle(400);
}

function Project(projectObj){
  this.name = projectObj.title;
  this.url = projectObj.url;
  this.about = projectObj.about;
}
function School(schoolObj) {
  this.name = schoolObj.name;
  this.startDate = schoolObj.startDate;
  this.endDate = schoolObj.endDate;
  this.award = schoolObj.award;
}

Project.prototype.toHTML = function(){
  var content = Handlebars.compile($('#project-template').html());
  return content(this);
}
Project.prototype.render = function() {
  projects.forEach(function(project){
    $('.content').append(project.toHTML());
  });
}
School.prototype.toHTML = function(){
  var content = Handlebars.compile($('#school-template').html());
  return content(this);
}
School.prototype.render = function() {
  schools.forEach(function(school){
    $('.content').append(school.toHTML());
  });
}
// schoolObjects.forEach(function(object){
//   schools.push(new School(object));
// });
// projectObjects.forEach(function(object){
//   projects.push(new Project(object));
// })


if (localStorage.projectData){
  JSON.parse(localStorage.projects).forEach(function(object){ projects.push(new Project(object)); });
}else {
  $.get(`data/projects.json`, function(result){
    localStorage.set('projectData', JSON.stringify(result));
    result.forEach(function(object){
      projects.push(new Project(object));
    });
  });
  projects.render();
}


if (localStorage.schoolData){
  JSON.parse(localStorage.schools).forEach(function(object){schools.push(new School(object)); });
}else {
  $.get(`data/schools.json`, function(result){
    localStorage.set('schoolData', JSON.stringify(result));
    result.forEach(function(object){
      schools.push(new School(object));
    });
  });
  schools.render();
}
