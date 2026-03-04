function passwordToggle() {
    const passwordLogin = document.getElementById('PatronAccountLogin_Password');

    if (passwordLogin) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('show-password');
        passwordLogin.parentNode.insertBefore(wrapper, passwordLogin);
        wrapper.appendChild(passwordLogin);

        const toggle = document.createElement('button');
        toggle.classList.add('toggle');
        toggle.textContent = 'Show';
        wrapper.appendChild(toggle);

        toggle.addEventListener('click', () => {
            if( toggle.innerHTML == 'Show' ) {
                toggle.innerHTML = 'Hide'
                passwordLogin.type="text";
            } else {
                toggle.innerHTML = 'Show'
                passwordLogin.type="password";
            }
        })
    }
}

passwordToggle();