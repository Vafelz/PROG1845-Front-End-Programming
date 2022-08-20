"use strict"

const allInputs = document.querySelectorAll('input[type="text"]')

function validateInputs() {
	
}

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
	$('#arrival_date').focus()
	$('#submit').click(() => {
		for (let i = 0; i < allInputs; i++) {
			const inputs = allInputs[i]
			alert(inputs)
		}
	})
}); // end ready