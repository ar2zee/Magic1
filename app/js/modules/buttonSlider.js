document.addEventListener('DOMContentLoaded', function(){
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
			

		btnLeft.addEventListener('click', function(e){
			$(handle).animate({'left': 2374}, 5000);
			$(topLayer).animate({'width': 3375}, 5000);
			console.log($(handle).offset().left);
		});

		btnRight.addEventListener('click', function(e){
			$(handle).animate({'left': -334}, 5000);
			$(topLayer).animate({'width': 666.5}, 5000);

				
				console.log($(handle).offset().left);
		});

			


    setInterval(checkPosition ,100);

    function checkPosition(){
    	if($(handle).offset().left <= -442 || $(handle).offset().left >= 1800) {
				$('#closeBtn').animate({'opacity': 1}, 5000);		
		}

		if($(handle).offset().left >= 2100) {
			$('.btn_position').css({ 'left': 'unset' , 'right': 23});
		}
    }
		
});


			
