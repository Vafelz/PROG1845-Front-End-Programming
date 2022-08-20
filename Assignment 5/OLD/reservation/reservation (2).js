"use strict"

$(document).ready( () => {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/

	// Focus on textbox with id 'arrival_date'
	$('#arrival_date').focus()

	// Submit event to validate user entries
	$('#submit').click(() => {
		// Validate textboxes are not empty
		if ($.trim($('input[type="text"]').val()) == "") {
			$('span').text('This field is required.')
			return false
		} // Validate arrival date is not empty
		else if ($('#arrival_date').val().trim() == "") {
			$('#dateSpan').text('This field is required.')
			return false
		} // Validate nights is not empty and numeric
		else if ($('#nights').val().trim() == "" || isNaN($('#nights').val().trim())) {
			$('#nightSpan').text('Must be numeric.')
			return false
		} // Validate name is not empty
		else if ($('#name').val().trim() == "") {
			$('#nameSpan').text('This field is required.')
			return false
		} // Validate email follows emailPattern
		else if ($('#email').val().trim() == "" || emailPattern.test($('#email').val().trim()) == false) {
			$('#emailSpan').text('Must be a valid email address.')
			return false
		} // Validate phone is not empty and numeric
		else if ($('#phone').val().trim() == "" || isNaN($('#phone').val().trim())) {
			$('#phoneSpan').text('Must be a valid phone number.')
			return false
		}
	})
}) // end ready