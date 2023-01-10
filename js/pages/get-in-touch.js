import {navButton, navBar, navDropDownClick} from '/js/modules/navbar.js';
import {emailCopied} from '/js/modules/emailCopy.js';

const main = document.querySelector('.get-in-touch-card');
const myEmail = main.querySelector('.get-in-touch-email');

// const emailFunct = emailCopied(e.target, '.ff-mail-copy', myEmail, main);

/* Navbar */

navBar.classList.add('appear-about', 'appear');
navButton.addEventListener('click', navDropDownClick); 

/* email-copy */

main.addEventListener('click', (e) => {
    emailCopied(e, '.ff-mail-copy', myEmail, main);
});
