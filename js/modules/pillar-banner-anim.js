import {footerSoil, footerObjects} from '/js/modules/footer.js';

export const pillar = document.querySelector('.pillar');
const pillarRocks = pillar.querySelector('.pillar-rocks');
export const bannerAll = Array.from(pillar.querySelectorAll('use, text'));
const pillarLeafs = pillar.querySelector('.pillar-leafs');

export function pillarIn() {
    pillarRocks.classList.add('pillar-animation-in');
};

export function rocksAlign(callback, callback1, callback2) {
    pillarRocks.children[6].addEventListener('animationend', () => {
        footerSoil.classList.add('footer-soil-animation');

    });
    pillarRocks.children[12].addEventListener('animationend', () => {
        pillarRocks.classList.replace('pillar-animation-in', 'pillar-animation-align');
        callback(callback1, callback2);
    });
};

export function bannerIn(callback, callback1) {
    pillarRocks.children[9].addEventListener(('animationend'), ()  => {
            bannerAll.forEach((element, index) => {

                element.classList.contains('pillar-banner') ? 
                  element.classList.add('pillar-banner-animation') : 

                element.classList.contains('pillar-holder-1') ? 
                    element.classList.add('pillar-holder-1-animation') : 

                element.classList.contains('pillar-holder-2') ? 
                    element.classList.add('pillar-holder-2-animation') : 

                element.classList.contains('pillar-scroll-about-me') ? 
                    element.classList.add('pillar-scroll-about-me-animation') : 

                  element.classList.contains('pillar-scroll-projects') ? 
                    element.classList.add('pillar-scroll-projects-animation') : 

                element.classList.contains('pillar-scroll-get-in-touch') ? 
                    element.classList.add('pillar-scroll-get-in-touch-animation') : 

                element.classList.contains('pillar-text') && element.innerHTML.includes('ABOUT') ? 
                 element.classList.add('pillar-text-about-me') : 

                element.classList.contains('pillar-text') && element.innerHTML.includes('PROJECTS') ? 
                  element.classList.add('pillar-text-projects') : 

                element.classList.contains('pillar-text') && element.innerHTML.includes('GET') ? 
                  element.classList.add('pillar-text-get-in-touch') : 
                    console.log(`${index} was not found`);
        });
        callback(callback1);
    });
};

export function pillarLeafsIn() {
    const scrollsLastAnimation = bannerAll.find(element => element.classList.contains('pillar-text-get-in-touch'));
    scrollsLastAnimation.addEventListener('animationend', () => {
        pillarLeafs.classList.add('pillar-leafs-animation');
        footerObjects.filter(element => {
            element.getAttribute('class').includes('icon');
            if (element) {
                element.classList.add('icons-footer-in-animation');
            };
        });
    });
};
