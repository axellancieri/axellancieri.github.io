import {pillar, bannerAll} from '/js/modules/pillar-banner-anim.js';

const bgColor = document.querySelector('.index-color');

const scrollsAll = [
    // scrolls once loaded will go here
];

export function hoverStateListeners(callback) {
    const scrollsFirstAnimation = bannerAll.find(element => element.classList.contains('pillar-text-about-me'));
    // scrollsSecondAnimation = bannerAll.find(element => element.classList.contains('pillar-text-projects'));
    scrollsFirstAnimation.addEventListener('animationend', () => {

        //might wanna think if I really need to use an object here once finish

            scrollsAll.scrollAboutMe = bannerAll.filter(element => element.matches('.pillar-text-about-me, .pillar-scroll-about-me'));
            scrollsAll.scrollGetInTouch = bannerAll.filter(element => element.matches('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch'));  
            scrollsAll.scrollProjects = bannerAll.filter(element => element.matches('.pillar-text-projects, .pillar-scroll-projects'));

        scrollsInteract('mouseover');
        scrollsInteract('click');
        callback();
    });
}

function scrollsInteract(type) {
    pillar.addEventListener(type, addInteract);
};


function addInteract(e) {

    if (e.type === 'mouseover' && e.target.closest('.pillar-text-about-me, .pillar-scroll-about-me')) {

        scrollsAll.scrollAboutMe.forEach(element => {
                addAnimationHoverScr(element, '--about-me-animation');
             });
    } else if (e.type === 'click' && e.target.closest('.pillar-text-about-me, .pillar-scroll-about-me')) {
        pillar.classList.add('pillar-out-animation');
        pillar.removeEventListener('mouseover', addInteract);
        pillar.removeEventListener('click', addInteract);
        // pillar.addEventListener('animationend', () => {
            scrollsAll.scrollAboutMe.map(element => {
                if (element.classList.contains('pillar-scroll')) { 
                  element.style.setProperty('--about-me-back-in-animation', ' flip-right-scroll-about-me');
                  element.style.setProperty('--about-me-after-flip-grow', ' scroll-after-right-about-me');
                } else {
                    element.style.setProperty('--about-me-back-in-animation', ' flip-right-text-about-me');
                    element.style.setProperty('--about-me-after-flip-grow', ' text-after-right-about-me');
                }
                return element;
            });
            bgColor.classList.replace('index-color', 'index-color-about-me');
        // });
            Promise.all(
                bgColor.getAnimations()
            .map((animation) => animation.finished))
            .then(() => {
                window.location.assign("http://127.0.0.1:5500/about.html")})
            .catch(error => console.log(`problem taking you to about page, ${error}`));
    };
    
    if (e.type === 'mouseover' && e.target.closest('.pillar-text-projects, .pillar-scroll-projects')) {

        scrollsAll.scrollProjects.forEach(element => {
                getComputedStyle(element).getPropertyValue('opacity') === '1' ? 
                    addAnimationHoverScr(element, '--projects-animation') :
                        console.log('not loaded yet');            
        });
    } else if (e.type === 'click' && e.target.closest('.pillar-text-projects, .pillar-scroll-projects')) {
        pillar.classList.add('pillar-out-animation');
        pillar.addEventListener('animationend', () => {
            scrollsAll.scrollProjects.filter(element => {
                if (element.classList.contains('pillar-scroll')) { 
                  element.style.setProperty('--projects-back-in-animation', ' flip-right-scroll');
                  element.style.setProperty('--projects-after-flip-grow', ' scroll-after-right-projects');
                    
                } else {
                    element.style.setProperty('--projects-back-in-animation', ' flip-right-text-projects');
                    element.style.setProperty('--projects-after-flip-grow', ' text-after-right-projects');
                }
            });
            bgColor.classList.replace('index-color', 'index-color-projects');
            pillar.removeEventListener('mouseover', addInteract);
        });
    };
    
    if (e.type === 'mouseover' && e.target.closest('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch')) {

        scrollsAll.scrollGetInTouch.forEach(element => {
            getComputedStyle(element).getPropertyValue('opacity') === '1' ? 
                addAnimationHoverScr(element, '--get-in-touch-animation') :
                    console.log('not loaded yet');            
    });
    } else if (e.type === 'click' && e.target.closest('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch')) {
        pillar.classList.add('pillar-out-animation');
        pillar.addEventListener('animationend', () => {
            scrollsAll.scrollGetInTouch.filter(element => {
                if (element.classList.contains('pillar-scroll')) {
                  element.style.setProperty('--get-in-touch-back-in-animation', ' flip-right-scroll');
                  element.style.setProperty('--get-in-touch-after-flip-grow', ' scroll-after-right-get-in-touch');
                } else {
                    element.style.setProperty('--get-in-touch-back-in-animation', ' flip-right-text-get-in-touch');
                    element.style.setProperty('--get-in-touch-after-flip-grow', ' text-after-right-get-in-touch');
                }
            });
            bgColor.classList.replace('index-color', 'index-color-get-in-touch');
            pillar.removeEventListener('mouseover', addInteract);
            
        });
    };
};

function addAnimationHoverScr(target, propertyName) {
        const currentAnimation = getComputedStyle(target).getPropertyValue(propertyName);

        if (currentAnimation.trim() === 'waiting-js') {
   
            target.style.setProperty(propertyName, ' grow-hover');
            pillar.removeEventListener('mouseover', addInteract);
/*moving from animationend event to setTimeout so its more dynamic when switching between scrolls hover and also giving time for else if
     statement to dislay. Might be good for troubleshooting aswell.*/
                setTimeout(() => { 
                    pillar.addEventListener('mouseover', addInteract);
                }, 1000);
            target.addEventListener('animationend', () => {
                target.style.setProperty(propertyName, ' waiting-js');
            });
        } else if(currentAnimation.trim() === 'grow-hover') {
            console.log('gotta wait for animataion to finish')
        };
};

