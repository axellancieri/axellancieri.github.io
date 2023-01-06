import {navButton, navDropDownClick} from '/js/modules/navbar.js';
import {treeSvg, treeIn, treeOut, treeBackIn} from '/js/modules/tree-animation.js';
import {pillarIn, rocksAlign, bannerIn, pillarLeafsIn} from '/js/modules/pillar-banner-anim.js';
import {hoverStateListeners} from '/js/modules/scrolls.js';
import {footerSoil, soilClickEvent} from '/js/modules/footer.js';

/* TREE-PILLAR-ANIMATION */

treeSvg.addEventListener('click', () => {
    // window.addEventListener('click', () => {    
    if (treeSvg.classList.contains("tree-in")) {
        treeIn(),
        treeOut(),   
        treeBackIn(pillarIn),
        // pillarIn(),
        rocksAlign(bannerIn, hoverStateListeners, pillarLeafsIn);   
    };
// bannerAll.forEach((element, index) => {

//     element.classList.contains('pillar-banner') ? 
//       element.classList.add('pillar-banner-animation') : 

//     element.classList.contains('pillar-holder-1') ? 
//         element.classList.add('pillar-holder-1-animation') : 

//     element.classList.contains('pillar-holder-2') ? 
//         element.classList.add('pillar-holder-2-animation') : 

//     element.classList.contains('pillar-scroll-about-me') ? 
//         element.classList.add('pillar-scroll-about-me-animation') : 

//       element.classList.contains('pillar-scroll-projects') ? 
//         element.classList.add('pillar-scroll-projects-animation') : 

//     element.classList.contains('pillar-scroll-get-in-touch') ? 
//         element.classList.add('pillar-scroll-get-in-touch-animation') : 

//     element.classList.contains('pillar-text') && element.innerHTML.includes('ABOUT') ? 
//      element.classList.add('pillar-text-about-me') : 

//     element.classList.contains('pillar-text') && element.innerHTML.includes('PROJECTS') ? 
//       element.classList.add('pillar-text-projects') : 

//     element.classList.contains('pillar-text') && element.innerHTML.includes('GET') ? 
//       element.classList.add('pillar-text-get-in-touch') : 
//         console.log(`${index} was not found`);
// });
// scrollsAll.scrollAboutMe = bannerAll.filter(element => element.matches('.pillar-text-about-me, .pillar-scroll-about-me'));
// scrollsAll.scrollGetInTouch = bannerAll.filter(element => element.matches('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch'));  
// scrollsAll.scrollProjects = bannerAll.filter(element => element.matches('.pillar-text-projects, .pillar-scroll-projects'));

// scrollsInteract('mouseover');
// scrollsInteract('click');
// navBar.classList.add('appear');
});

/* NAV BAR */

navButton.addEventListener('click', navDropDownClick); 

/* FOOTER */

footerSoil.addEventListener('click', soilClickEvent);