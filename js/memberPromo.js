function memberPromo() {
    const message = '<a href="https://tickets.museums.cam.ac.uk/account/login?returnurl=%2fevents">Sign in</a> as a Friend and book your free tickets. Not yet a member? <a href="https://www.fitzmuseum.cam.ac.uk/support-us/become-a-friend">Join today</a>';

    const headings = document.querySelectorAll('.h3.tn-event-detail__ticket-selection-section-heading.tn-event-detail__ticket-selection-section-heading--ticket-selector');

    const p = document.createElement('p');
    p.className = 'member-promo';
    p.innerHTML = message;

    
    [...headings].forEach(heading => {
        if (heading.textContent.replace(/\s+/g, '') === '') {
            heading.textContent = 'Tickets';
        }

        const p = document.createElement('p');
        p.className = 'member-promo';
        p.innerHTML = message;

        heading.after(p);
    });

}

memberPromo();