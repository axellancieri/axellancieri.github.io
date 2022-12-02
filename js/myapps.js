const treeSvg = document.querySelector('.tree');
const treeInSvg = document.querySelector('.tree-in');
const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #squirrel-left, #squirrel-right, #leafs')); 
const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
const hexagonSvg = treeSvg.querySelector('.hexagon');
const soilSvg = treeSvg.querySelector('.soil');

treeInSvg.addEventListener('click', () => {
    treeSvg.classList.remove('tree-in');
    treeAllButTextSvg.forEach((element, index) => {
        if(index !== 9) {
            element.classList.add('tree-out');
        }
    });
    treeSvg.classList.add('tree-up');
    textSvg.forEach((text) => {
        text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
        text.classList.add('animation-name-up-js');
    });
    soilSvg.classList.add('soil-animation-fade');
    hexagonSvg.classList.add('hexagon-animation');
    hexagonSvg.addEventListener('animationend', () => {
        treeAllButTextSvg.forEach((element, index) => {
            if(index ===     9) {
                element.classList.remove('soil-animation-fade');
                element.classList.add('soil-animation-back-in');
            } else {
                element.classList.remove('tree-out');
            }
        });
    });
});