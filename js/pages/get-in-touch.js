import {navButton, navBar, navDropDownClick} from '/js/modules/navbar.js';
import {emailCopied} from '/js/modules/emailCopy.js';

const main = document.querySelector('.get-in-touch-card').nextElementSibling;
const myEmail = main.querySelector('.get-in-touch-email');
const cvText = main.querySelector('.get-in-touch-cv');
const cvIcon = main.querySelector('object');


/* Navbar */

navButton.addEventListener('click', navDropDownClick); 

/* email-copy */

main.addEventListener('click', (e) => {
    emailCopied(e, '.ff-mail-copy', myEmail, main);
});

/* cv icon white color */

window.addEventListener('load', loadSvg);

function loadSvg(e) {
    console.log('rdy');
    e.target.removeEventListener('load', loadSvg);
    const grabDoc = cvIcon.contentDocument;
    const bringDocSvg = grabDoc.querySelector('.icon-cv-svg');
    const bringDocSvgPath = bringDocSvg.querySelector('.icon-cv-path');
    cvText.addEventListener('mouseenter', () => {  
        bringDocSvgPath.classList.add('get-in-touch-cv-hovered');
    });
    cvText.addEventListener('mouseleave', () => {
        bringDocSvgPath.classList.remove('get-in-touch-cv-hovered');
    })
  };

  