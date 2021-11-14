"use strict"

$(document).ready( () => {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/

	// Focus on textbox with id 'arrival_date'
	$('#arrival_date').focus()

	// Submit event to validate user entries
	$('#submit').click(() => {
		// Check to validate textboxes are not empty
		if ($.trim($('input[type=text]').val()) == "") {
			alert("This field is required.")
			return false
		} else if (isNaN($('#nights').val().trim())) {
			alert("Must be numeric.")
			return false
		} else if (emailPattern.test($('#email').val().trim()) == false) {
			alert("Must be a valid email address.")
			return false
		}
	})
}) // end ready