'use strict'

var app = app || {};
page('/', app.aboutController.index);
page('/schools', app.schoolController.showEducation);
page('/projects', app.projectController.showProjects);
//page('/repos', app.repoView.index);
//page('/about', some controller to show the about me);

page();
