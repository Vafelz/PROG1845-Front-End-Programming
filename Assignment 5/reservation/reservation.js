"use strict"

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
	const userEmail = $('#email').val()

	$('#arrival_date').focus()
	$('form').serialize()
	$('#submit').click(function() {
		// Check all text boxes
		for ()
		$('input[type=text]')

		alert(userEmail)
	})
}) // end ready