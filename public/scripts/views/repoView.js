'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $about = $('.content'); // Best practice: Cache the DOM query if it's used more than once.

    $about.append('<ul></ul>');
    //$about.show().siblings().hide();
  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.

  let render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('.content').append(
      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);