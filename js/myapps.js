// const treeSvg = document.querySelector('.tree');
// const treeAllButTextSvg = Array.from(treeSvg.querySelectorAll('use, g, #squirrel-left, #squirrel-right, #leafs')); // Need to target infinite animations individually so they'll stop during .tree-up animation
// const textSvg = Array.from(treeSvg.querySelectorAll('.position'));
// const hexagonSvg = treeSvg.querySelector('.hexagon');
// const soilSvg = treeSvg.querySelector('.soil');

// treeSvg.addEventListener('click', () => {

//     if (treeSvg.classList.contains("tree-in")) {

//         treeSvg.classList.remove('tree-in');

//         treeAllButTextSvg.forEach((element, index) => {
//             if(index === 9) {
//                 element.classList.add('soil-animation-fade');
//             } else {
//                 element.classList.add('tree-out');
//             }
//         });

//         treeSvg.classList.add('tree-up');

//         textSvg.forEach((text) => {
//             text.classList.remove('animation-name-in', 'animation-lastName-in', 'animation-portfolio-in');
//             text.classList.add('animation-name-up-js');
//         });

//         hexagonSvg.classList.add('hexagon-animation');

//         hexagonSvg.addEventListener('animationend', () => {
//             treeAllButTextSvg.forEach((element, index) => {
//                 if(index === 9) {
//                     element.classList.replace('soil-animation-fade', 'soil-animation-back-in');
//                 } else {
//                     element.classList.replace('tree-out', 'tree-back-in');
//                 }
//             });
//         });
//     }
// });