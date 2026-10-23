
function addAccordion() {
    // Price IDs for concessions
    const priceIds = [
        85, // Pay what you can £7.50
        87, // Pay what you can £5
        74, // Pay what you can flex
        100, // Fitz list
        103, // Universal Credit
        29, // Companion
        97, // National Art Pass + donation
        96, // National Art Pass
        // 25, // Flexible adult

        // Multi date events

    ];

    [...document.querySelectorAll('.tn-ticket-selector__pricetype-container')].forEach((ticket_container) => {
        // Building concessions array
        let concessions = [];
        priceIds.forEach(priceId => {
            const priceElement = ticket_container.querySelector(`[data-tn-price-type-id="${priceId}"]`);
            if (priceElement) {
                concessions.push(priceElement.parentNode);
                priceElement.parentNode.parentNode.removeChild(priceElement.parentNode);
            }
        })

        // Simple validation to prevent issues
        if (concessions.length === 0) {
            return;
        }

        const priceElement = ticket_container.querySelector('.tn-ticket-selector__pricetype-selector');
        const accordion = document.createElement('div');
        accordion.classList.add('accordion');

        // Header
        const accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion__header');
        accordionHeader.innerHTML = '<h3>Concessions</h3>';


        // Toggle button
        let openState = 0;
        const toggle = document.createElement('button');
        toggle.setAttribute('type', 'button');
        toggle.classList.add('accordion__toggle', 'btn');
        toggle.innerHTML = '<svg height="48" viewBox="0 0 48 48" width="64" xmlns="http://www.w3.org/2000/svg">\n' +
            '        <path fill="black" id="scrolltop-bg" d="M0 0h48v48h-48z"></path>\n' +
            '        <path fill="white" id="scrolltop-arrow" d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"></path>\n' +
            '      </svg>';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'accordion-body');
        toggle.setAttribute('aria-label', 'Toggle content');
        accordionHeader.appendChild(toggle);

        // Toggle action
        accordionHeader.addEventListener('click', () => {
            accordion.classList.toggle('accordion--open');
            openState = !openState;
            toggle.setAttribute('aria-expanded', (openState)?'true':'false');
        });


        accordion.appendChild(accordionHeader);

        // Body
        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion__body');
        accordionBody.setAttribute('id', 'accordion-body');

        const accordionContent = document.createElement('ul');
        accordionContent.classList.add('list-unstyled', 'tn-ticket-selector__pricetype-list');

        concessions.forEach(concession => {
            accordionContent.appendChild(concession);
        })

        accordionBody.appendChild(accordionContent);

        accordion.appendChild(accordionBody);

        // Output the whole thing
        ticket_container.appendChild(accordion);
    })

}

addAccordion()