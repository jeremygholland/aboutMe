$(document).ready(function(){
	$('#resumeStuff').hide();
	$('#projectStuff').hide();
	$('#resume').click(function(){
		$('#resume').toggleClass('woo');
		$('#projects').removeClass('woo');
		$('#resumeStuff').toggle('slow');
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
				}
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
		}
		
	});
	$('#projects').click(function(){
		$('#projects').toggleClass('woo');
		$('#resume').removeClass('woo');
		$('#projectStuff').toggle('slow');
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
		}
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
		}
	})
});