const tree = document.querySelector('.tree');
const treeIn = document.querySelector('.tree-in');
const treeAll = Array.from(tree.querySelectorAll('use, g, text'));
const treeAllButText = Array.from(tree.querySelectorAll('use, g'));
const svgText = Array.from(tree.querySelectorAll('.position'));
const hexagon = tree.querySelector('.hexagon');
// const svgTextPortfolio = tree.querySelector('.position-portfolio');



treeIn.addEventListener('click', () => {
    tree.classList.remove('tree-in');
    treeAllButText.forEach((element, index) => {
        if(index !== 0) {
            element.classList.add('tree-out');
        }
    });
    tree.classList.add('tree-up');
    svgText.forEach((text) => {
        text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
        text.classList.add('animation-name-up-js');
    });
    const checkAnimation = document.querySelector('.tree-up');
    checkAnimation.addEventListener('animationend', () => {
        treeAllButText.forEach((element) => {
                element.classList.remove('tree-out');
        });
            hexagon.classList.add('hexagon-animation');
    });
});

// treeIn.addEventListener('click', () => {
//     tree.classList.remove('tree-in');
//     treeAllButText.forEach(element => element.classList.add('tree-out'));
//     tree.classList.add('tree-up');
//     svgText.forEach((text) => {
//         text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
//         text.classList.add('animation-name-up-js');
//     });    
// });