const tree = document.querySelector('.tree');
const treeIn = document.querySelector('.tree-in');
const treeAll = Array.from(tree.querySelectorAll('use, path, g, text'));
const treeAllButText = Array.from(tree.querySelectorAll('use, path, g'));
const svgText = Array.from(tree.querySelectorAll('.position'));
// const svgTextPortfolio = tree.querySelector('.position-portfolio');



// treeIn.addEventListener('click', () => {
//     tree.classList.remove('tree-in');
//     treeAllButText.forEach(element => element.classList.add('tree-out'));
//     tree.classList.add('tree-up');
//     svgText.forEach((text) => {
//         text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
//         text.classList.add('animation-name-up-js');
//     });    
// });

// treeIn.addEventListener('click', () => {
//     tree.classList.remove('tree-in');
//     treeAllButText.forEach(element => element.classList.add('tree-out'));
//     tree.classList.add('tree-up');
//     svgText.forEach((text) => {
//         text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
//         text.classList.add('animation-name-up-js');
//     });    
// });