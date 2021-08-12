/**
 * Helper function that returns "true" if one radio in a group has been selected,
 * and "false" if none have been selected at all.
 *
 * @param radioGroupName
 * @returns {boolean}
 */
function isRadioSelected(radioGroupName) {
    var radios = document.querySelectorAll('input[name="' + radioGroupName + '"]');

    for(var i = 0; i < radios.length; i++) {
        if( radios[i].checked ) {
            return true;
        }
    }

    return false;
}



/**
 * Check that the user has selected an email preference option when the registration
 * form is submitted
 */
document.body.addEventListener('click', function(event) {
    var target = event.target;

    if(target.id === 'tn-account-register-button-register') {
        // check if email radio button has been selected
        if(!isRadioSelected('tn-cust-field-2')) {
            event.preventDefault();

            alert('Please select an option for email updates.');

            document.querySelector('.tn-component__fieldset-radio.ng-scope').scrollIntoView();
        }
    }
});



/**
 * Hide/show the email preference options based on whether the user has selected
 * "yes" or "no" under the "Are you happy to receive email updates" form item
 */
document.body.addEventListener('click', function(event) {
    var target = event.target;
    var interestsContainer = document.querySelector('.tn-interests');

    if(target.id === '2-0' || target.getAttribute('label') === '2-0') {
        //user has selected yes
        interestsContainer.setAttribute('style', 'display: block;');
    } else if(target.id === '2-1' || target.getAttribute('label') === '2-1') {
        // user has selected no
        interestsContainer.setAttribute('style', 'display: none;');
    }
});



/**
 * Hide the email preference options by default
 */
// var emailPreferenceCheckboxes = document.querySelector('.tn-interests');
// if(emailPreferenceCheckboxes !== null) {
//     emailPreferenceCheckboxes.setAttribute('style', 'display: none');
// }



/**
 * Output a "required" label next to the email updates fieldset label
 */
var emailFieldsetText = document.querySelector('.tn-component__fieldset-label.c1.ng-binding');
var requiredText = document.createElement('small');
requiredText.innerHTML = 'Required';
requiredText.setAttribute('aria-hidden', 'true');
requiredText.setAttribute('class', 'tn-required-field pull-right');
emailFieldsetText.parentNode.insertBefore(requiredText, emailFieldsetText.nextSibling);
