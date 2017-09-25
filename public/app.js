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
School.prototype.toHTML = function(){
  var content = Handlebars.compile($('#school-template').html());
  return content(this);
}
function render(dataArray){
  dataArray.forEach(function(singleData){
    $('.content').append(singleData.toHTML());
  });
}
if (localStorage.projectData){
  JSON.parse(localStorage.projectData).forEach(function(object){ projects.push(new Project(object)); });
  render(projects);
}else {
  $.get('data/projects.json', function(result){
    localStorage.setItem('projectData', JSON.stringify(result));
    result.forEach(function(object){
      projects.push(new Project(object));
    });
    render(projects);
  });
}
if (localStorage.schoolData){
  JSON.parse(localStorage.schoolData).forEach(function(object){schools.push(new School(object)); });
  render(schools);
}else {
  $.get('data/schools.json', function(result){
    localStorage.setItem('schoolData', JSON.stringify(result));
    result.forEach(function(object){
      schools.push(new School(object));
    });
    render(schools);
  });
}
