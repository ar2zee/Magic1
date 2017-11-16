$(document).ready(function(){


//////////////////////////////////////////////////////
var currentTime = new Date();
var year = currentTime.getFullYear();


$('#current_year').text(year);

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
      {selector: '.section3', offset: ($('.section3').offset().top)/4, callback: function(el) {
        ($('.section3').animate({'opacity': 1})),600 ;
      } },
     
      {selector: '.section4', offset: ($('.section4').offset().top)/4, callback: function(el) {
        ($('.section4').animate({'opacity': 1})),600 ;
      }}

    ];
    Materialize.scrollFire(options);

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



function initMap() {
        // Create a map object and specify the DOM element for display.
          
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.0332195, lng: -90.0226464},
           zoom: 11,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#fff1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
          ]
        });

        var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1jjsMkSQcq_sGfa59ilVKXGHWIQkyDw4xG-vojYT4'
    }

  });
  layer.setMap(map);


       
       
};
