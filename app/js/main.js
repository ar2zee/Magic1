setTimeout(function(){
    $('body').addClass('loaded');
  }, 600);


$(document).ready(function(){


//////////////////////////////////////////////////////
var currentTime = new Date();
var year = currentTime.getFullYear();


$('#current_year').text(year);

//////////////////////////////////////////////////////////

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
       $('select').material_select();
       $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15, // Creates a dropdown of 15 years to control year,
          today: 'Today',
          clear: 'Clear',
          close: 'Ok',
          closeOnSelect: false // Close upon selecting a date,
        });


    var options = [
      {selector: '.section1', offset: ($('.section1').offset().top)/2, callback: function(el) {
        ($('.section1').animate({'opacity': 1})),600 ;
        
        
      } },
      {selector: '.section2', offset: ($('.section2').offset().top)/2, callback: function(el) {
      ($('.section2, .brand-logo').animate({'opacity': 1})),600 ;
        
      } },
      {selector: '.section3', offset: ($('.section3').offset().top)/5, callback: function(el) {
        ($('.section3').animate({'opacity': 1})),600 ;
      } },
     
      {selector: '.section4', offset: ($('.section4').offset().top)/4, callback: function(el) {
        ($('.section4').animate({'opacity': 1})),600 ;
      }}

    ];
    Materialize.scrollFire(options);
///////////////////////////////////////////////////////////////////////////////
 





// PARTICLES INIT
particlesJS.load('particles-js', 'js/modules/particles.json', function(){});
////////////////////////////////////
 
});  // END OF Jquery ready document





       
      
