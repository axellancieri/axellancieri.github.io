import {navButton, navBar, navDropDownClick} from '/js/modules/navbar.js';

const objectsAbout = document.querySelectorAll('object');

objectsAbout.forEach( element => {
    element.addEventListener('load', loadSvg);
});

// objectsAbout.addEventListener('load', loadSvg);

function loadSvg(e) {
    console.log('rdy');
  };

/* Navbar */

navButton.addEventListener('click', navDropDownClick); 