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
					
			});
			$('#closeBtn').css({'display': 'block'});
			$('#closeBtn').animate({'opacity': 1}, 1000);
			return false;
		});

		$(btnRight).on('click', function(e){
			$(handle).animate({'left': -334}, 1500);
			$(topLayer).animate({'width': 666.5}, 1500, function(){

			});
			$('#closeBtn').css({'display': 'block'});
			$('#closeBtn').animate({'opacity': 1}, 1000);
			return false;
		});

			$('#closeBtn').on('click', function(e){
				$(handle).animate({'left': 51+'vw'}, 1500, function(){
				$('.bottom, .top').css('display', 'block');
			});
				$(topLayer).animate({'width': 100+'vw'}, 1500);
				$(this).css({'opacity': 0});
				$(this).css({'display': 'none'});
				return false;
			});
			


	
});

