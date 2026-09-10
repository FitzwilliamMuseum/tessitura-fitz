/**
 * For all password fields, add a "Show/Hide" button 
 * allowing the user to view their password
 */

let passwordFields = document.querySelectorAll('input[type="password"]');

passwordFields.forEach(function(inputField) {
	let container = document.createElement('div');
	container.className = 'password-field-container';

	let accessibleMessage = document.createElement('div');
	accessibleMessage.setAttribute('aria-live', 'polite');
	accessibleMessage.className = 'visuallyhidden';

	// Setup the button to toggle password visibility
	let toggleButton = document.createElement('button');
	toggleButton.setAttribute('type', 'button');
	toggleButton.setAttribute('class', 'password-toggle-button');
	toggleButton.setAttribute('aria-label', 'Show password');
	toggleButton.addEventListener('click', togglePasswordField);
	toggleButton.innerHTML = 'show';

	// modify the input field
	inputField.setAttribute('autocomplete', 'off');

	// add the new container to the DOM
	inputField.after(container);

	// remove the input field as we'll add it to the container
	inputField.remove();

	container.appendChild(inputField);
	container.appendChild(toggleButton);

});


function togglePasswordField(event) {
	let container = event.target.closest('.password-field-container');
	let passwordField = container.querySelector('.tn-password');
	let accessibleMessage = container.querySelector('');

	if('show' === event.target.innerHTML) {
		passwordField.setAttribute('type', 'text');
		passwordField.setAttribute('autocomplete', 'off');

		event.target.innerHTML = 'hide';
		event.target.setAttribute('aria-label', 'Hide password');
		//Your password is visible
	} else {
		passwordField.setAttribute('type', 'password');
		passwordField.removeAttribute('autocomplete');

		event.target.innerHTML = 'show';
		event.target.setAttribute('aria-label', 'Show password');
		//Your password is hidden
	}
}
