$(document).ready(function() {
	// Your validation code will go in there.
	// Write your validation functions, and bind events
	// in a jQuery DOM ready callback

	REGEXP = {
		'name': /^[a-zA-Z]+$/,
		'email': /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	}

	$('input[type=text], input[type=email]').on('keyup', function() {
		var field = $(this);
		var id = field.attr('id');
		var value = field.val();
		var regexp = REGEXP[id];

		if (regexp.test(value)) {
			field.parent().removeClass('has-error').addClass('has-success');
		} else {
			field.parent().removeClass('has-success').addClass('has-error');
		}
		switchSubmit();
	});

	function switchSubmit() {
		var isChecked = $("#tos").is(':checked');
		if (isChecked && allFieldsValid()) {
			$('button[type=submit]').removeAttr('disabled').text('Submit');
		} else {
			$('button[type=submit]').attr('disabled','').text('Please fill all fields');
		}	
	}

	function allFieldsValid() {
		return $('.has-success').length == 7;
	}

});