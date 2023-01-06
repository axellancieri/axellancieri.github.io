/* Footer icons interactivity */

export const footerSoil = document.querySelector('.footer-soil');
export const footerObjects = Array.from(footerSoil.querySelectorAll('object'));
const myEmail = footerSoil.querySelector('.email');

export function soilClickEvent(e) {
    if (e.target.closest('.ff-mail-copy')) {

        navigator.clipboard.writeText(myEmail.textContent)

        .then(function(e) {
                // runOnce();
                const successMsg = footerSoil.querySelector('.ff-mail-copy');
                footerSoil.removeEventListener('click', soilClickEvent);
                successMsg.style.setProperty('--email-success-icon-in', 'email-success-icon-in');
                successMsg.style.setProperty('--email-success-icon-back', 'email-success-icon-back');
                successMsg.style.setProperty('--email-success-icon-out', 'email-success-icon-out');
                Promise.all(
                    successMsg.getAnimations({ subtree: true })
                      .map((animation) => animation.finished)
                  ).then(() => {
                    successMsg.style.setProperty('--email-success-icon-in', 'waiting-js');
                    successMsg.style.setProperty('--email-success-icon-back', 'waiting-js');
                    successMsg.style.setProperty('--email-success-icon-out', 'waiting-js')
                    footerSoil.addEventListener('click', soilClickEvent);
                  })
                  .catch(error => console.log(`couldnt load back copy email confirmation, ${error}`));
                console.log('copied successfully!');;
            })
        .catch(error => console.log(`couldnt get copy to clipboard. ${error}`));
    };
};

/* This used to run on soilClickEvent function to create a p element that I ended up using a pseudo element later on. Leaving it here just in case I need this sort of behaviour at a later stage

const runOnce = (function() {
    // grabbed from https://www.geeksforgeeks.org/function-that-can-be-called-only-once-in-javascript/
    let done = false;
    return () => {
        if (!done) {
            done = true;
            const createSuccessMsg = document.createElement('p');
            createSuccessMsg.textContent = 'Email copied!';
            createSuccessMsg.classList.add('email-success', 'm-0');
            myEmail.insertAdjacentElement('afterend', createSuccessMsg);
        };
    };
})();
*/

/* This lines below are to target footer svg icons. I ended up doing everything through html using the href and download attribute mostly on the svg files itselves. Leaving this here just in case

function loadSvg(e) {
    console.log('rdy');
    if(e.target.closest('.icon-linkedin')) {
        e.target.removeEventListener('load', loadSvg);
        const grabDoc = e.target.contentDocument;
        const bringDoc = grabDoc.querySelector('.icon-linkedin-svg');
        bringDoc.addEventListener('click', () => {  
            console.log('linkedin');
        });
    }else if(e.target.closest('.icon-cv')) {
        e.target.removeEventListener('load', loadSvg);
        const grabDoc = e.target.contentDocument;
        const bringDoc = grabDoc.querySelector('.icon-cv-svg');
        bringDoc.addEventListener('click', () => {  
            console.log('cv');
        });
    };;
};

footerObjects.forEach(element => {
        element.addEventListener('load', loadSvg);
});
*/