$(document).ready(function(){
	$('#up-btn').click(function(){
		$('#player').animate({top:'-=100px'},1000);
	});
	$('#down-btn').click(function(){
		$('#player').animate({top:'+=100px'},1000);
	});
	$('#left-btn').click(function(){
		$('#player').animate({left:'-=100px'},1000);
	});
	$('#right-btn').click(function(){
		$('#player').animate({left:'+=100px'},1000);
	});
	$('#in-btn').click(function(){
		$('#player').fadeIn();
	});
	$('#out-btn').click(function(){
		$('#player').fadeOut();
	});
	$('#s-btn').click(function(){
		$('#player').effect('slide');
	});
	$('#b-btn').click(function(){
		$('#player').effect('bounce',{time:3},500);
	});
	$(function() {
    	$( "input[type=submit], a, button" )
      	.button()
      	.click(function( event ) {
        event.preventDefault();
      });
  });
});
