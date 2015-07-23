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
				$(this).fadeIn('slow');
			} else {
				if ($(this).hasClass(category)) {
					$(this).fadeIn('slow');
				} else {
					$(this).hide();
				}
			}
		});
	});

	return false; 
});