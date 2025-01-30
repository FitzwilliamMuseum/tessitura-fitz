/**
 * Checks if at least one newsletter checkbox is selected
 * @returns {boolean} True if at least one checkbox is selected
 */
const isCheckboxSelected = () => {
    const checkboxes = [...document.querySelectorAll('.tn-interests input[name="SelectedInterests.InterestsSelected"]')];
    return checkboxes.some(checkbox => checkbox.checked);
};

/**
 * Form validation handler
 * Prevents form submission if no newsletter is selected
 */
document.body.addEventListener('click', event => {
    const { target } = event;

    if (target.id === 'tn-account-register-button-register') {
        if (!isCheckboxSelected()) {
            event.preventDefault();
            alert('Please select at least one newsletter option.');
            document.querySelector('.tn-interests').scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    }
});
/**
 * Hide/show the email preference options based on whether the user has selected
 * "yes" or "no" under the "Are you happy to receive email updates" form item
 */
document.body.addEventListener('click', function(event) {
    var interestsContainer = document.querySelector('.tn-interests');

    const postConsent = document.querySelector('input[name="tn-cust-field-contact_perm_kvp_5-1"]');
    const emailConsent = document.querySelector('input[name="tn-cust-field-contact_perm_kvp_2-1"]');

    if(postConsent.classList.contains('ng-valid-parse') || emailConsent.classList.contains('ng-valid-parse')) {
        interestsContainer.setAttribute('style', 'display: block');
    } else {
        interestsContainer.setAttribute('style', 'display: none');
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
if(document.querySelector('.tn-account-create-page')) {
    var intervalID = setInterval(
        makeEmailSettingsRequired,
        500
    );

    function makeEmailSettingsRequired() {
        console.log('check');
        var emailFieldsetText = document.querySelector('.tn-component__fieldset-label.c1.ng-binding');

        if(emailFieldsetText) {
            console.log('clear');
            clearInterval(intervalID);
            var requiredText = document.createElement('small');
            requiredText.innerHTML = 'Required';
            requiredText.setAttribute('aria-hidden', 'true');
            requiredText.setAttribute('class', 'tn-required-field pull-right');
            emailFieldsetText.parentNode.insertBefore(requiredText, emailFieldsetText.nextSibling);
        }
    }
}