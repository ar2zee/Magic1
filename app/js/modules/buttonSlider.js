$(document).ready(function(){
	let wrapper = document.getElementById('wrapper');

	let wrapper2 = document.getElementById('wrapper2');

	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');

	let topLayer2 = wrapper2.querySelector('.top');
	let handle2 = wrapper2.querySelector('.handle');

	let skew = 0;
	let delta = 0;

	let btnLeft = document.getElementById('button_left');
	let btnRight = document.getElementById('button_right');

	let btnLeft2 = document.getElementById('button_left2');
	let btnRight2 = document.getElementById('button_right2');

	let width = $('.skewed .top').width();
			
			if(wrapper.className.indexOf('skewed') != -1 && wrapper2.className.indexOf('skewed') != -1){
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
				$(handle).animate({'left': '50vw', 'top': '50%'}, 1500, function(){
				$('.bottom, .top').css('display', 'block');
			});
				// $(topLayer).animate({'width': 100+'vw'}, 1500);
				  $('.skewed .top').animate({'width': width}, 1500);
				$(this).css({'opacity': 0});
				$(this).css({'display': 'none'});
				return false;
			});
				//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				$(btnLeft2).on('click', function(e){
			$(handle2).animate({'left': 2374}, 1500);
			$(topLayer2).animate({'width': 3375}, 1500, function(){
					
			});
			$('#closeBtn2').css({'display': 'block'});
			$('#closeBtn2').animate({'opacity': 1}, 1000);
			return false;
		});

		$(btnRight2).on('click', function(e){
			$(handle2).animate({'left': -334}, 1500);
			$(topLayer2).animate({'width': 666.5}, 1500, function(){

			});
			$('#closeBtn2').css({'display': 'block'});
			$('#closeBtn2').animate({'opacity': 1}, 1000);
			return false;
		});

			$('#closeBtn2').on('click', function(e){
				$(handle2).animate({'left': '50vw', 'top': '50%'}, 1500, function(){
				$('.bottom, .top').css('display', 'block');
			});
				// $(topLayer).animate({'width': 100+'vw'}, 1500);
				  $('.skewed .top').animate({'width': width}, 1500);
				$(this).css({'opacity': 0});
				$(this).css({'display': 'none'});
				return false;
			});


	
});

