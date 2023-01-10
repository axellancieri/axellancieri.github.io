export function emailCopied(e, className, email, querySelect) {

  if (e.target.closest(`${className}`)) {

      navigator.clipboard.writeText(email.textContent)

      .then(function() {
              // runOnce();
              const successMsg = querySelect.querySelector(`${className}`);
              querySelect.removeEventListener('click', emailCopied);
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
                  querySelect.addEventListener('click', emailCopied);
                })
                .catch(error => console.log(`couldnt load back copy email confirmation, ${error}`));
              console.log('copied successfully!');
          })
      .catch(error => console.log(`couldnt get copy to clipboard. ${error}`));
  };
};