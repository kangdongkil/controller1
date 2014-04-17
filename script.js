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
		$('#player').effect('bounce',{time:5},500);
	});
	$('#e-btn').click(function(){
		$('#player').effect('explode');
	});
	$('.button').mouseenter(function() {
       		$(this).animate({height: '+=5px'});
	});
	$('.button').mouseleave(function() {
       		$(this).animate({height: '-=5px'});
   	});
   	$('.button').mouseenter(function() {
       		$(this).css('background-color','#F7D358');
   	});
   	$('.button').mouseleave(function() {
       		$(this).css('background-color','white');
   	});
   	$('#player').mouseenter(function(){
   		$('#player').fade To('fast',1);
   	});
});
