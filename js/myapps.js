/* ALL VARIABLES */

const bgColor = document.querySelector('.index-color');

const navBar = document.querySelector('nav');
const navButton = navBar.querySelector('button');
const navBarDropdown = document.querySelector('.navbar-dropdown');

// const treeSvg = document.querySelector('.tree');
// const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #leafs, #squirrel-right, #squirrel-left')); // Need to target infinite animations individually so they'll stop during .tree-up animation
// const treeInfiniteAnimations = Array.from(treeSvg.querySelectorAll('.tree-bushes path, .leafs, .squirrel-right, .squirrel-left')); //treeInfiniteAnimations.forEach(element => element.style.animationPlayState = 'paused')
// const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
// const hexagonSvg = treeSvg.querySelector('.hexagon');
// const soilSvg = treeSvg.querySelector('.soil');

// const pillar = document.querySelector('.pillar');
// const pillarRocks = pillar.querySelector('.pillar-rocks');
// const bannerAll = Array.from(pillar.querySelectorAll('use, text'));
// const pillarLeafs = pillar.querySelector('.pillar-leafs');

const footerSoil = document.querySelector('.footer-soil');

/* OBJECT LITERALS */

const scrollsAll = [
// scrolls once loaded will go here
];

/* TREE-PILLAR APPEARANCE ANIMATION FUNCTIONS */

function treeIn() {
    treeSvg.classList.remove('tree-in');

    treeAllButTextSvg.forEach((element) => {
        if (element.hasAttribute('class') && element.classList.contains('soil')) {
            element.classList.add('soil-animation-fade');
        } else {
            element.classList.add('tree-out');
        }
    });
};
function treeOut() {
    treeSvg.classList.add('tree-up');

    textSvg.forEach((text) => {
        text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
        text.classList.add('animation-name-up-js');
    });
};
function treeBackIn(callback) {
    navBar.classList.add('appear');
    hexagonSvg.classList.add('hexagon-animation');
    hexagonSvg.addEventListener('animationend', () => {
        treeAllButTextSvg.forEach((element) => {
            if (element.hasAttribute('class') && element.classList.contains('soil')) {
                element.classList.replace('soil-animation-fade', 'soil-animation-back-in')
            } else {
                element.classList.replace('tree-out', 'tree-back-in');
            }
        });
        callback();
    });
};

function pillarIn() {
    pillarRocks.classList.add('pillar-animation-in');
};

function rocksAlign(callback, callback1, callback2) {
    pillarRocks.children[6].addEventListener('animationend', () => {
        footerSoil.classList.add('footer-soil-animation');

    });
    pillarRocks.children[12].addEventListener('animationend', () => {
        pillarRocks.classList.replace('pillar-animation-in', 'pillar-animation-align');
        callback(callback1, callback2);
    });
};

function bannerIn(callback, callback1) {
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

                element.classList.contains('pillar-text') && element.innerHTML.includes('About') ? 
                 element.classList.add('pillar-text-about-me') : 

                element.classList.contains('pillar-text') && element.innerHTML.includes('Projects') ? 
                  element.classList.add('pillar-text-projects') : 

                element.classList.contains('pillar-text') && element.innerHTML.includes('Get') ? 
                  element.classList.add('pillar-text-get-in-touch') : 
                    console.log(`${index} was not found`);
        });
        callback(callback1);
    });
    
}
function pillarLeafsIn() {
    scrollsLastAnimation = bannerAll.find(element => element.classList.contains('pillar-text-get-in-touch'));
    scrollsLastAnimation.addEventListener('animationend', () => {
        pillarLeafs.classList.add('pillar-leafs-animation');
    });
    
}
function hoverStateListeners(callback) {
    scrollsFirstAnimation = bannerAll.find(element => element.classList.contains('pillar-text-about-me'));
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
/* TREE-PILLAR-ANIMATION */

// treeSvg.addEventListener('click', () => {
    // window.addEventListener('click', () => {    
    // if (treeSvg.classList.contains("tree-in")) {
        // treeIn(),
        // treeOut(),
        // treeBackIn(pillarIn),
        // pillarIn(),
        // rocksAlign(bannerIn, hoverStateListeners, pillarLeafsIn);   
    // };
// });

/* NAV BAR */

function navDropDownClick(e) {
    if (e.target.closest('button').getAttribute('aria-expanded') === 'true') {
        navButton.removeEventListener('click', navDropDownClick);
        setTimeout(() => { 
            document.addEventListener('click', navDropdownClose);
        }, 300);
        return (console.log('passing through'));
    } else if (e.target.closest('button').getAttribute('aria-expanded') === 'false') {
        console.log('closing dropdown');
    };
};
function navDropdownClose(e) {
    if (e.target.closest("h5")) {
        const text = e.target.innerHTML;
        if (text.includes('Projects')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('projects')
            navButton.click();
            navButton.addEventListener('click', navDropDownClick);
        } else if (text.includes('About')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('about')
            navButton.click();
            navButton.addEventListener('click', navDropDownClick);
        } else if (text.includes('Get in')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('get in touch')
            navButton.click();
            navButton.addEventListener('click', navDropDownClick);
        }
    } else if (e.target.closest(":not(h5)")) {
        document.removeEventListener('click', navDropdownClose);
        console.log('closing');
        navButton.click();
        navButton.addEventListener('click', navDropDownClick); 
    };
};
    navButton.addEventListener('click', navDropDownClick); 

/* TREE-PILLAR IN-OUTS BETWEEN SECTIONS */


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
        pillar.addEventListener('animationend', () => {
            scrollsAll.scrollAboutMe.filter(element => {
                if (element.classList.contains('pillar-scroll')) { 
                  element.style.setProperty('--about-me-back-in-animation', ' flip-right-scroll-about-me');
                  element.style.setProperty('--about-me-after-flip-grow', ' scroll-after-right-about-me');
                } else {
                    element.style.setProperty('--about-me-back-in-animation', ' flip-right-text-about-me');
                    element.style.setProperty('--about-me-after-flip-grow', ' text-after-right-about-me');
                }
            });
            bgColor.classList.replace('index-color', 'index-color-about-me');
            pillar.removeEventListener('mouseover', addInteract);
        });
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

/* SCROLLS INTERACTIVITY */

// projects.addEventListener('click', () => {
    
//     if (treeSvg.classList.contains("tree-in")) {
//         treeFirstAnimation();
        // add flip class
        // add collapse
        // add new content or give it show class 
    // }
    
// });

