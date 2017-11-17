window.onload = function() {


setTimeout(function(){
  
var lineDrawing = anime({
    targets: 'path.lines ',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 8000,
     delay: function(el, i) { return i * 250 },
      begin: function(anim) {
      $('path.lines').css("stroke", "red");
      // document.querySelector('path').setAttribute("fill", "red");
    },
      complete: function(anim) {
      $('path.lines').css({"fill": "red"});
    },
    // loop: true,
    direction: 'normal',
    // direction: alternate
    // autoplay: false
    });
  }, 600);
};

