'use strict';
var app = app || {};

(function(module) {
  const repoView = {};


  const ui = function() {
    let $about = $('.content');

    $about.append('<ul></ul>');
    //$about.show().siblings().hide();
  };


  let render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
  //  ui();

    $('.content').append(
      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);
