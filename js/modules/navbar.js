/* NAV BAR */

export const navBar = document.querySelector('nav');
export const navButton = navBar.querySelector('button');
const navWindow = navBar.nextElementSibling.querySelector('.navbar-content');

export function navDropDownClick(e) {
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
        text.includes('Projects') ? navChangePage('navbar-home', 'navbar-pages', 'projects') :
        text.includes('About') ? navChangePage('navbar-home', 'navbar-pages', 'about-me') :
        text.includes('Get in') ? navChangePage('navbar-home', 'navbar-pages', 'get-in-touch') :
        text.includes('Home') ? navChangePage('navbar-pages', 'bg-color-home', 'index') : console.log('goto closing');
    } else if (e.target.closest(":not(h5)")) {
        document.removeEventListener('click', navDropdownClose);
        console.log('closing');
        navButton.click();
        navButton.addEventListener('click', navDropDownClick); 
    };
}; 

function navChangePage(class1, class2, pageToGo) {
    document.removeEventListener('click', navDropdownClose);
    navWindow.querySelectorAll('h5').forEach(element => element.style.setProperty('border-color', 'transparent'));
    navWindow.style.setProperty('color', 'transparent');
    navWindow.classList.contains(class1) ?
     navWindow.classList.replace(class1, class2) :
      console.log('no need for bg change animation');
    Promise.all(
        navWindow.getAnimations()
    .map((animation) => animation.finished))
    .then(() => {
        window.location.assign(`http://127.0.0.1:5500/${pageToGo}.html`)})
    .catch(error => console.log(`problem taking you to about page, ${error}`));
    navButton.addEventListener('click', navDropDownClick);
}