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

});
