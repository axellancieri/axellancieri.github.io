/* VARIABLES */

const treeSvg = document.querySelector('.tree');
const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #leafs, #squirrel-right, #squirrel-left')); // Need to target infinite animations individually so they'll stop during .tree-up animation
const treeInfiniteAnimations = Array.from(treeSvg.querySelectorAll('.tree-bushes path, .leafs, .squirrel-right, .squirrel-left')); //treeInfiniteAnimations.forEach(element => element.style.animationPlayState = 'paused')
const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
const hexagonSvg = treeSvg.querySelector('.hexagon');
const soilSvg = treeSvg.querySelector('.soil');
const pillar = document.querySelector('.pillar');
const navBar = document.querySelector('nav');

/* FUNCTIONS */

const treeIn = () => {
    treeSvg.classList.remove('tree-in');

    treeAllButTextSvg.forEach((element) => {
        if (element.hasAttribute('class') && element.classList.contains('soil')) {
            element.classList.add('soil-animation-fade');
        } else {
            element.classList.add('tree-out');
        }
    });
}
const treeOut = () => {
    treeSvg.classList.add('tree-up');

    textSvg.forEach((text) => {
        text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
        text.classList.add('animation-name-up-js');
    });
}
const treeBackIn = (callback) => {
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
}

const pillarIn = () => {
    pillar.firstElementChild.classList.add('pillar-animation-in');
}

const rocksAlign = () => {
    pillar.firstElementChild.children[12].addEventListener('animationend', () => {
        pillar.firstElementChild.classList.replace('pillar-animation-in', 'pillar-animation-align');
    })
}

function animationSequence(animation1, animation2, animation3, animation4) {
    animation1;
    animation2;
    animation3;
    animation4;
}

/* TREE-PILLAR-ANIMATION */

treeSvg.addEventListener('click', () => {
    
    if (treeSvg.classList.contains("tree-in")) {
        animationSequence(
            treeIn(),
            treeOut(),
            treeBackIn(pillarIn),
            rocksAlign()
        );    
    }
});

// projects.addEventListener('click', () => {
    
//     if (treeSvg.classList.contains("tree-in")) {
//         treeFirstAnimation();
        // add flip class
        // add collapse
        // add new content or give it show class 
    // }
    
// });
