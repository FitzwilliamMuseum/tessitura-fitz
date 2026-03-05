function additionalDetails() {


    // standard with donation
    const standardDonation = document.querySelectorAll(`[data-tn-price-type-id="95"]`);

    [...standardDonation].forEach(donation => {

        // allow for additional
        donation.classList.add('additional-information');

        let additionContent = document.createElement('div');

        additionContent.classList.add('additional-information__content');
        let additionalText = document.createElement('p');
        additionalText.textContent = 'Gift Aid\' it:  If you complete a Gift Aid declaration as part of your booking, we can treat the whole value of your ticket as a donation and claim an extra 25p in every £1 at no extra cost to you and to support more areas of our work as a charity.';

        additionContent.appendChild(additionalText);

        donation.querySelector('.tn-ticket-selector__pricetype-label-heading').appendChild(additionContent);
    })

    // National Art Pass + Donation
    const artPassDonation = document.querySelectorAll(`[data-tn-price-type-id="97"]`);
    [...artPassDonation].forEach(donation => {
        donation.classList.add('additional-information');

        let additionContent = document.createElement('div');
        let additionalText = document.createElement('p');
        additionalText.textContent = 'Gift Aid\' it:  If you complete a Gift Aid declaration as part of your booking, we can treat the whole value of your ticket as a donation and claim an extra 25p in every £1 at no extra cost to you and to support more areas of our work as a charity.';

        donation.querySelector('.tn-ticket-selector__pricetype-label-heading').appendChild(additionContent);
    });

    // Universal or Pension Credit
    const universalCredit = document.querySelectorAll(`[data-tn-price-type-id="103"]`);
    [...universalCredit].forEach(donation => {
        donation.classList.add('additional-information');

        let additionalText = document.createElement('p');
        additionalText.textContent = 'Free tickets are available for those in receipt of Universal or Pension Credit, Income Support, JSA, ESA or PIP. Proof of eligibility may be required on entry.';

        donation.querySelector('.tn-ticket-selector__pricetype-label-heading').appendChild(additionalText);
    });
}

additionalDetails();