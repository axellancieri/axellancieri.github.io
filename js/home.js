import {navButton, navBar, navDropDownClick} from '/js/modules/navbar.js';
import {emailCopied} from '/js/modules/emailCopy.js';

/* Variables */

const bgColor = document.querySelector('.bg-color');

const treeSvg = document.querySelector('.tree');
const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
const soilSvg = treeSvg.querySelector('.soil');
const portfolioText = treeSvg.querySelector('.position-portfolio');

const pillar = document.querySelector('.pillar');
const pillarRocks = pillar.querySelector('.pillar-rocks');
const bannerAll = Array.from(pillar.querySelectorAll('use, text'));
const pillarLeafs = pillar.querySelector('.pillar-leafs');

const footerSoil = document.querySelector('.footer-soil');
const footerObjects = Array.from(footerSoil.querySelectorAll('object'));
const myEmail = footerSoil.querySelector('.email');

const scrollsAll = [
    // scrolls once loaded will go here
];

/* NAV BAR */

navButton.addEventListener('click', navDropDownClick); 

/* Tree Animation */

function treeIn(callback) {
    treeSvg.classList.add('tree-up');
    portfolioText.addEventListener('animationend', () => {
        soilSvg.classList.add('soil-animation-change-soil-color');
        textSvg.forEach((text) => {
            text.classList.add('animation-names-color-change');
        });
    callback();
    });
};
/* Pillar-banner animation */

function pillarIn() {
  pillarRocks.classList.add('pillar-animation-in');
  footerSoil.classList.add('footer-soil-animation');
};

function rocksAlign(callback, callback1, callback2) {
  pillarRocks.children[12].addEventListener('animationend', () => {
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
      });
      pillarRocks.classList.replace('pillar-animation-in', 'pillar-animation-align');
      callback(callback1, callback2);
  });
};

function bannerIn(callback, callback1) {
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
};

function pillarLeafsIn() {
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

function onPageLoad() {
  treeIn(pillarIn),
  rocksAlign(bannerIn, hoverStateListeners, pillarLeafsIn); 
}
onPageLoad();

/* Scrolls */

function hoverStateListeners(callback) {
  const scrollsFirstAnimation = bannerAll.find(element => element.classList.contains('pillar-text-about-me'));
  // scrollsSecondAnimation = bannerAll.find(element => element.classList.contains('pillar-text-projects'));
  scrollsFirstAnimation.addEventListener('animationend', () => {

      //might wanna think if I really need to use an object here once finish

          scrollsAll.scrollAboutMe = bannerAll.filter(element => element.matches('.pillar-text-about-me, .pillar-scroll-about-me'));
          scrollsAll.scrollGetInTouch = bannerAll.filter(element => element.matches('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch'));  
          scrollsAll.scrollProjects = bannerAll.filter(element => element.matches('.pillar-text-projects, .pillar-scroll-projects'));

      scrollsInteract('mouseover');
      scrollsInteract('mousedown');
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
  } else if (e.type === 'mousedown' && e.target.closest('.pillar-text-about-me, .pillar-scroll-about-me')) {
    scrollClickInteraction(scrollsAll.scrollAboutMe, '--about-me-back-in-animation', '--about-me-after-flip-grow', 'about-me');
  };
  
  if (e.type === 'mouseover' && e.target.closest('.pillar-text-projects, .pillar-scroll-projects')) {

      scrollsAll.scrollProjects.forEach(element => {
              getComputedStyle(element).getPropertyValue('opacity') === '1' ? 
                  addAnimationHoverScr(element, '--projects-animation') :
                      console.log('not loaded yet');            
      });
  } else if (e.type === 'mousedown' && e.target.closest('.pillar-text-projects, .pillar-scroll-projects')) {
    scrollClickInteraction(scrollsAll.scrollProjects, '--projects-back-in-animation', '--projects-after-flip-grow', 'projects');
  };
  
  if (e.type === 'mouseover' && e.target.closest('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch')) {

      scrollsAll.scrollGetInTouch.forEach(element => {
          getComputedStyle(element).getPropertyValue('opacity') === '1' ? 
              addAnimationHoverScr(element, '--get-in-touch-animation') :
                  console.log('not loaded yet');            
  });
  } else if (e.type === 'mousedown' && e.target.closest('.pillar-text-get-in-touch, .pillar-scroll-get-in-touch')) {
    scrollClickInteraction(scrollsAll.scrollGetInTouch, '--get-in-touch-back-in-animation', '--get-in-touch-after-flip-grow', 'get-in-touch');
  };
};

function scrollClickInteraction(scrollName, var1, var2, target) {
    pillar.classList.add('pillar-out-animation');
    pillar.removeEventListener('mouseover', addInteract);
    pillar.removeEventListener('mousedown', addInteract);
        scrollName.map(element => {
            if (element.classList.contains('pillar-scroll')) {
              element.style.setProperty(`${var1}`, ` flip-right-scroll-${target}`);
              element.style.setProperty(`${var2}`, ` scroll-after-right-${target}`);
            } else {
                element.style.setProperty(`${var1}`, ` flip-right-text-${target}`);
                element.style.setProperty(`${var2}`, ` text-after-right-${target}`);
            }
        });
        bgColor.classList.replace('bg-color-home', 'bg-color-pages');
        Promise.all(
            bgColor.getAnimations()
        .map((animation) => animation.finished))
        .then(() => {
            window.location.assign(`http://127.0.0.1:5500/${target}.html`)})
        .catch(error => console.log(`problem taking you to about page, ${error}`)); 
}

function addAnimationHoverScr(target, propertyName) {
      const currentAnimation = getComputedStyle(target).getPropertyValue(propertyName);

      if (currentAnimation.trim() === 'waiting-js') {
          target.style.setProperty(propertyName, ' grow-hover');
          target.addEventListener('animationend', () => {
              target.style.setProperty(propertyName, ' waiting-js');
          });
      } else if(currentAnimation.trim() === 'grow-hover') {
          console.log('gotta wait for animataion to finish')
      };
};

/* FOOTER */

/* Footer */

footerSoil.addEventListener('click', (e) => {
    emailCopied(e, '.ff-mail-copy', myEmail, footerSoil);
});

/* This used to run on emailCopied function to create a p element that I ended up using a pseudo element later on. Leaving it here just in case I need this sort of behaviour at a later stage

const runOnce = (function() {
  // grabbed from https://www.geeksforgeeks.org/function-that-can-be-called-only-once-in-javascript/
  let done = false;
  return () => {
      if (!done) {
          done = true;
          const createSuccessMsg = document.createElement('p');
          createSuccessMsg.textContent = 'Email copied!';
          createSuccessMsg.classList.add('email-success', 'm-0');
          myEmail.insertAdjacentElement('afterend', createSuccessMsg);
      };
  };
})();
*/

/* This lines below are to target footer svg icons. I ended up doing everything through html using the href and download attribute mostly on the svg files itselfs. Leaving this here just in case
});
*/
// function loadSvg(e) {
//   console.log('rdy');
//   if(e.target.closest('.icon-linkedin')) {
//       e.target.removeEventListener('load', loadSvg);
//       const grabDoc = e.target.contentDocument;
//       const bringDoc = grabDoc.querySelector('.icon-linkedin-svg');
//       bringDoc.addEventListener('click', () => {  
//           console.log('linkedin');
//       });
//   }else if(e.target.closest('.icon-cv')) {
//       e.target.removeEventListener('load', loadSvg);
//       const grabDoc = e.target.contentDocument;
//       const bringDoc = grabDoc.querySelector('.icon-cv-svg');
//       bringDoc.addEventListener('click', () => {  
//           console.log('cv');
//       });
//   };
// };

// footerObjects.forEach(element => {
//       element.addEventListener('load', loadSvg);
//       });
