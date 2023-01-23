/* NAV BAR */

export const navBar = document.querySelector('nav');
export const navButton = navBar.querySelector('button');
const navBarDropdown = navBar.querySelector('.navbar-dropdown');
const navWindow = navBar.querySelector('.navbar-content');

export function navDropDownClick(e) {
    try {
        if (e.target.matches("h5") || e.target.matches("a") || e.target.closest('button').getAttribute('aria-expanded') === 'true') {
            navBar.removeEventListener('click', navDropDownClick);
                Promise.all(
                    navBarDropdown.getAnimations()
                .map((animation) => animation.finished))
                .then(() => document.addEventListener('click', navDropdownClose))
                .catch(error => {
                    console.log(`problem with nav dropdown, ${error}`);
                    document.addEventListener('click', navDropdownClose);
                });
            return (console.log('passing through'));
        } else if (e.target.closest('button').getAttribute('aria-expanded') === 'false') {
                console.log('closing dropdown');
        }
    }
    catch {
        console.log(e.target);
    }
}   
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
        navBar.addEventListener('click', navDropDownClick); 
    }
}

function navChangePage(class1, class2, pageToGo) {
    document.removeEventListener('click', navDropdownClose);
    navWindow.querySelectorAll('h5').forEach(element => {
        element.style.setProperty('border-color', 'transparent');
        element.style.setProperty('background-color', 'transparent');
        element.querySelector('a').style.setProperty('--bs-link-color', 'transparent');
    });
    navWindow.style.setProperty('color', 'transparent');
    navWindow.classList.contains(class1) ?
     navWindow.classList.replace(class1, class2) :
      console.log('no need for bg change animation');
    Promise.all(
        navBarDropdown.getAnimations()
    .map((animation) => animation.finished))
    .then(() => {
        window.location.assign(`https://axellancieri.github.io/${pageToGo}`);
        navBar.addEventListener('click', navDropDownClick);})
    .catch(() => {
        error => console.log(`problem taking you to about page, ${error}`);
        navBar.addEventListener('click', navDropDownClick);
    });
}

/*Site reload*/

if (document.addEventListener) {
    window.addEventListener('pageshow', (e) => {
        if (e.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
            location.reload();  
        }
    },
    false);
  }