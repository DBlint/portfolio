'use strict';
/* Global var Declarations */
var schools = [];
var projects = [];

/* Stuff to handle things on the page, manipulate the DOM, etc.  */
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
// var rawProjectTemp = $('#project-template').html();
var actualProjectTemp = Handlebars.compile($('#project-template').html());

// var rawSchoolTemp = $(`#school-template`).html();
var actualSchoolTemp = Handlebars.compile($(`#school-template`).html());

 /* Stuff to handle the data, and append to page  */
// function School(schoolObj) {
//   this.name = schoolObj.name;
//   this.startDate = schoolObj.startDate;
//   this.endDate = schoolObj.endDate;
//   this.award = schoolObj.award;
// }
//
// function Project(projectObj){
//   this.name = projectObj.title;
//   this.url = projectObj.url;
//   this.about = projectObj.about;
// }

// School.prototype.toHTML = function(){
//   var $newSchool = $('.template.education').clone();
//   $newSchool.removeClass('template');
//   $newSchool.attr('data-education', '')
//   $newSchool.find('h2.name').text(this.name);
//   $newSchool.find('p.startDate').text(this.startDate);
//   $newSchool.find('p.endDate').text(this.endDate);
//   $newSchool.find('p.award').text(this.award);
//   return $newSchool;
// }


// Project.prototype.toHTML = function(){
//   var $newEntry = $('.template.projects ').clone();
//   $newEntry.removeClass('template');
//   $newEntry.attr('data-projects', '');
//   $newEntry.find('h2').text(this.name);
//   $newEntry.find('.url').attr('href', this.url);
//   $newEntry.find('.description').text(this.about);
//   return $newEntry;
//}
// projectObjects.forEach(function(project){
//   projects.push(new Project(project));
// });
//
// schoolObjects.forEach(function(school){
//   schools.push(new School(school));
// });

schoolObjects.forEach(function(school){
  $('.content').append(actualSchoolTemp(school));
});

projectObjects.forEach(function(project){
  $('.content').append(actualProjectTemp(project));
});

/*

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article){
  $('#articles').append(article.toHtml());
});
*/
