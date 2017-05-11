// Pam's jQuery fixes for Relaxr website

$('.readmore').click(function() {
	event.preventDefault();
	$('.readmore').hide();
	$('#show-this-on-click').slideToggle();
	$('.readless').show();
});

$('.readless').click(function() {
	event.preventDefault();
	$('.readless').hide();
	$('#show-this-on-click').slideToggle(400, function() {
	$('.readmore').show();	
	});
	
});



$('.learnmore').click(function() {
	event.preventDefault();
	$('#learnmoretext').slideToggle();
	$('.learnmore').hide();
});