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

       $('.modal').modal();
       $('.parallax').parallax();

// Resize page to full height of window
// $('.window-height').css('height', $(window).outerHeight()); 
//  $(window).resize(function() {      
//     $('.window-height').css('height', $(window).outerHeight()); 
//   }); 
 


/*PRELOADER*/
setTimeout(function(){
		$('body').addClass('loaded');
	}, 600);

////////////////////////////////////////


// PARTICLES INIT
particlesJS.load('particles-js', 'js/modules/particles.json', function(){});
////////////////////////////////////
 


});



