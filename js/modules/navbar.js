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
        if (text.includes('Projects')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('projects')
            navButton.click();
            navButton.addEventListener('click', navDropDownClick);
        } else if (text.includes('About')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('about');
            navWindow.querySelectorAll('h5').forEach(element => element.style.setProperty('border-color', 'transparent'));
            navWindow.style.setProperty('color', 'transparent');
            navWindow.classList.replace('navbar-home', 'navbar-pages');
            // navButton.click();
            Promise.all(
                navWindow.getAnimations()
            .map((animation) => animation.finished))
            .then(() => {
                window.location.assign("http://127.0.0.1:5500/about-me.html")})
            .catch(error => console.log(`problem taking you to about page, ${error}`));
            navButton.addEventListener('click', navDropDownClick);
        } else if (text.includes('Get in')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('get in touch')
            navButton.click();
            navButton.addEventListener('click', navDropDownClick);
        }
        else if (text.includes('Home')) {
            document.removeEventListener('click', navDropdownClose);
            console.log('Home')
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