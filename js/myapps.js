/* ALL VARIABLES */

const navBar = document.querySelector('nav');
const navButton = navBar.querySelector('button');
const navBarDropdown = document.querySelector('.navbar-dropdown');

const treeSvg = document.querySelector('.tree');
const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #leafs, #squirrel-right, #squirrel-left')); // Need to target infinite animations individually so they'll stop during .tree-up animation
const treeInfiniteAnimations = Array.from(treeSvg.querySelectorAll('.tree-bushes path, .leafs, .squirrel-right, .squirrel-left')); //treeInfiniteAnimations.forEach(element => element.style.animationPlayState = 'paused')
const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
const hexagonSvg = treeSvg.querySelector('.hexagon');
const soilSvg = treeSvg.querySelector('.soil');

const pillar = document.querySelector('.pillar');
const pillarRocks = pillar.querySelector('.pillar-rocks');
const bannerAll = Array.from(pillar.querySelectorAll('use, text'));
const pillarLeafs = pillar.querySelector('.pillar-leafs');

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

                element.classList.contains('pillar-scroll-3') ? 
                    element.classList.add('pillar-scroll-3-animation') : 

                  element.classList.contains('pillar-scroll-2') ? 
                    element.classList.add('pillar-scroll-2-animation') : 

                element.classList.contains('pillar-scroll-1') ? 
                    element.classList.add('pillar-scroll-1-animation') : 

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
function pillarLeafsIn(callback) {
    const bannerLastAnimation = bannerAll.find(element => element.classList.contains('pillar-text-get-in-touch'));
    bannerLastAnimation.addEventListener('animationend', () => {
        pillarLeafs.classList.add('pillar-leafs-animation');
    });
    callback();
}
function hoverStateListeners() {
    const bannerLastAnimation = bannerAll.find(element => element.classList.contains('pillar-text-get-in-touch'));
    bannerLastAnimation.addEventListener('animationend', () => {
           scrollsAll.scrollGetInTouch = bannerAll.filter(element => element.matches('.pillar-text-get-in-touch, .pillar-scroll-1'));  
           scrollsAll.scrollProjects = bannerAll.filter(element => element.matches('.pillar-text-projects, .pillar-scroll-2'));
           scrollsAll.scrollAboutMe = bannerAll.filter(element => element.matches('.pillar-text-about-me, .pillar-scroll-3')); 
        hoverOnScroll();
    });
}
/* TREE-PILLAR-ANIMATION */

treeSvg.addEventListener('click', () => {
    // window.addEventListener('click', () => {    
    if (treeSvg.classList.contains("tree-in")) {
        treeIn(),
        treeOut(),
        treeBackIn(pillarIn),
        rocksAlign(bannerIn, pillarLeafsIn, hoverStateListeners);   
    };
});

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


function hoverOnScroll() {
    pillar.addEventListener('mouseover', addAnimationHover);
};

function addAnimationHover(e) {
    scroll1 = scrollsAll.scrollGetInTouch;
    scroll2 = scrollsAll.scrollProjects;
    scroll3 = scrollsAll.scrollAboutMe;

    if (e.target.closest('.pillar-text-get-in-touch, .pillar-scroll-1')) {
        scroll1.forEach(element => {
            addAnimationHoverScr(element, '--get-in-touch-animation');
         });

    } else if (e.target.closest('.pillar-text-projects, .pillar-scroll-2')) {
        scroll2.forEach(element => {
            addAnimationHoverScr(element, '--projects-animation');
         });

    } else if (e.target.closest('.pillar-text-about-me, .pillar-scroll-3')) {
        scroll3.forEach(element => {
            addAnimationHoverScr(element, '--about-me-animation');
         });

    } else {
        console.log('not clicking on scroll');
    };
};

function addAnimationHoverScr(target, propertyName) {
        const currentAnimation = getComputedStyle(target).getPropertyValue(propertyName);

        if (currentAnimation.trim() === 'waiting-js') {

            target.removeEventListener('mouseover', addAnimationHover);
            target.style.setProperty(propertyName, ' grow-hover');

            target.addEventListener('animationend', () => {
                target.addEventListener('mouseover', addAnimationHover);
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

