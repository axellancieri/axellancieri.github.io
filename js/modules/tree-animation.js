import {navBar} from '/js/modules/navbar.js';

export const treeSvg = document.querySelector('.tree');
const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #leafs, #squirrel-right, #squirrel-left')); // Need to target infinite animations individually so they'll stop during .tree-up animation
const treeInfiniteAnimations = Array.from(treeSvg.querySelectorAll('.tree-bushes path, .leafs, .squirrel-right, .squirrel-left')); //treeInfiniteAnimations.forEach(element => element.style.animationPlayState = 'paused')
const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
const hexagonSvg = treeSvg.querySelector('.hexagon');
const soilSvg = treeSvg.querySelector('.soil');

export function treeIn() {
    treeSvg.classList.remove('tree-in');

    treeAllButTextSvg.forEach((element) => {
        if (element.hasAttribute('class') && element.classList.contains('soil')) {
            element.classList.add('soil-animation-fade');
        } else {
            element.classList.add('tree-out');
        }
    });
};
export function treeOut() {
    treeSvg.classList.add('tree-up');

    textSvg.forEach((text) => {
        text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
        text.classList.add('animation-name-up-js');
    });
};
export function treeBackIn(callback) {
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