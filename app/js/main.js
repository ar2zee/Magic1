$(document).ready(function(){

// Collapse Button for Materialize Nav
$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      // onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      // onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );

// Resize page to full height of window
$('.window-height').css('height', $(window).outerHeight() - $('nav').outerHeight()); 
 $(window).resize(function() {      
    $('.window-height').css('height', $(window).outerHeight()- $('nav').outerHeight()); 
  }); 
 
  /* PARALLAX LIBRARY*/
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
//////////////////////////////////////////


/*PRELOADER*/
setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
////////////////////////////////////////



});


