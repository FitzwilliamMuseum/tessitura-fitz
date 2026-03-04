
function addAccordion() {
    // Price IDs
    const priceIds = [
        85, // Pay what you can £7.50
        87, // Pay what you can £5
        74, // Pay what you can flex
        100, // Fitz list
        103, // Universal Credit
        29, // Companion
        97, // National Art Pass + donation
        96, // National Art Pass

    ];

    // Concessions
    let concessions = [];
    priceIds.forEach(priceId => {
        const priceElement = document.querySelector(`[data-price-id="${priceId}"]`);
        if (priceElement) {
            concessions.push(priceElement.parentNode);
            priceElement.parentNode.parentNode.removeChild(priceElement.parentNode);
        }
    })

    // Simple validation to prevent issues
    if (concessions.length === 0) {
        return;
    }

    const priceElement = document.querySelector('.tn-ticket-selector__pricetype-selector');
    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    // Header
    const accordionHeader = document.createElement('div');
    accordionHeader.classList.add('accordion__header');
    accordionHeader.innerHTML = '<h2>Concessions</h2>';


    // Toggle button
    let openState = 0;
    const toggle = document.createElement('button');
    toggle.classList.add('accordion__toggle');
    toggle.innerHTML = '<span class="accordion__toggle-icon"></span>';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'accordion-body');
    toggle.addEventListener('click', () => {
        accordion.classList.toggle('accordion--open');
        openState = !openState;
        toggle.setAttribute('aria-expanded', (openState)?'true':'false');
    })
    accordionHeader.appendChild(toggle);

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


    // Output the whole thing
    priceElement.appendChild(accordion);

}

addAccordion()