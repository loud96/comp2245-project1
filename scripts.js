/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    const emailIn = document.querySelector('#email');
    const form = document.querySelector('form');
    let message = document.querySelector('.message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailIn.value;
        if (isValid(email)) {
        message.textContent = "Thank you! Your email address " + emailIn.value + " has been added to our mailing list!";
        } else {
            message.textContent = "Please enter a valid email address";
        }
    });

    function isValid(email) {
        const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailReg.test(email);
    }
    });


