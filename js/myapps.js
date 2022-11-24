const tree = document.querySelector('.tree');
const svgText = tree.querySelectorAll('.position');
const svgTextPortfolio = tree.querySelector('.position-portfolio');

svgTextPortfolio.addEventListener('click', () => {
    tree.classList.remove('tree-in');
    // void tree.offsetWidth;
    tree.classList.add('tree-out'); //firstElementChild
    svgText[0].classList.remove('svg-name-animation-in');
    svgText[1].classList.remove('svg-lastName-animation-in');
    svgText[2].classList.remove('svg-portfolio-animation-in');
    // void svgText[index].offsetWidth;
    svgText[0].classList.add('svg-name-animation-back-in');
    svgText[1].classList.add('svg-lastName-animation-back-in');
    svgText[2].classList.add('svg-portfolio-animation-back-in');
});