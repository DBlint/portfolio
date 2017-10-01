'use strict';
var app = app || {};


(function(module){
  //this is a render for all the things. It's in this JS file because it has no other home.
  function render(dataArray){
    dataArray.forEach(function(singleData){
      $('.content').append(singleData.toHTML());
    });
  }

})(app)
