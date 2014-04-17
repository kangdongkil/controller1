$(document).ready(function(){
	$('#up-btn').click(function(){
		$('#player').animate({top:'-=10px'},1000);
	});
	$('#down-btn').click(function(){
		$('#player').animate({top:'+=10px'},1000);
	});
	$('#left-btn').click(function(){
		$('#player').animate({left:'-=10px'},1000);
	});
	$('#right-btn').click(function(){
		$('#player').animate({left:'+=10px'},1000);
	});

});
