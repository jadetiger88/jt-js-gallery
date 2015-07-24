$(document).ready(function() {

	// Process the click
	$('.container  ul li a').on('click', function() {

		// Update the active link status 
		$('.active-link').removeClass('active-link');
		$(this).addClass('active-link');
		$('#category').text($(this).text());

		// Show or hide the images based on the category
		var category = $(this).text().toLowerCase().replace(' ', '-');
		$('#gallery img').each(function(){
			if (category == "all-projects") {
				$(this).parent().parent().fadeIn('slow');
			} else {
				if ($(this).hasClass(category)) {
					$(this).parent().parent().fadeIn('slow');
				} else {
					$(this).parent().parent().hide();
				}
			}
		});
	});

	$('a img').on('mouseenter', function() {
		$(this).parent().siblings(".overlay").fadeIn(500);
	});

	$('a img').on('mouseleave', function() {
		$(this).parent().siblings(".overlay").fadeOut(500);
	});

	return false; 
});