$(document).ready(function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;
	let btnLeft = document.getElementById('button_left');
	let btnRight = document.getElementById('button_right');
			
			if(wrapper.className.indexOf('skewed') != -1 ){
						skew = 1000;
				}	

		$(btnLeft).on('click', function(e){
			$(handle).animate({'left': 2374}, 1500);
			$(topLayer).animate({'width': 3375}, 1500, function(){
				$('#closeBtn1, #closeBtn2').css({'display': 'block'});
				$('.bottom, .top').css('display', 'none');
				$('#closeBtn1, #closeBtn2, .btn_position').animate({'opacity': 1}, 1000, function(){
					$('#closeME').css({'display': 'none'});
					$('#what-we-do').css({'display': 'block', 'opacity': 1});

				});
			});

			return false;
		});

		$(btnRight).on('click', function(e){
			$(handle).animate({'left': -334}, 1500);
			$(topLayer).animate({'width': 666.5}, 1500, function(){
				$('#closeBtn1, #closeBtn2').css({'display': 'block'});
				$('.bottom, .top').css('display', 'none');
				$('#closeBtn1, #closeBtn2, .btn_position').animate({'opacity': 1}, 1000, function(){
					$('#closeME').css({'display': 'none'});
					$('#who-we-are').css({'display': 'block', 'opacity': 1});

				});
			});

			return false;
		});

			

			$('#closeBtn1, #closeBtn2').on('click', function(e){
				$(handle).animate({'left': 51+'vw'}, 1500, function(){
				$('#closeBtn1, #closeBtn2').css({'opacity': 0});
				$('#closeBtn1, #closeBtn2').css({'display': 'none'});
				$('.bottom, .top').css('display', 'block');
				$('#what-we-do').css({'display': 'none', 'opacity': 0});
				$('#who-we-are').css({'display': 'none', 'opacity': 0});
				$('.bottom, .top').animate('opacity', 1);
				$('#closeME').css({'display': 'block'});

				console.log('bitton pressed inside');
			});
				$(topLayer).animate({'width': 100+'vw'}, 1500);
				
				console.log('bitton pressed outside');
				
				return false;
			});
			
  $('.carousel').carousel();

             // Init Carousel Slider
            $('.carousel.carousel-slider').carousel({fullwidth:false, indicators:true});

 $('.slider').slider();
	
});

