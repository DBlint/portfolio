'use strict'

var app = app || {};

page('/', app.aboutController.showAll);
page('/schools', app.schoolController.showEducation);
page('/projects', app.projectController.showProjects);
//page('/repos', somecontroller to show repos from GH);
//page('/about', some controller to show the about me);

page();
