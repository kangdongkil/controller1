$(document).ready(function(){
	$('.button').selectable();
	$('#up-btn').click(){
		$('#player').animate({top:'-=10px'},1000)
	});
});
