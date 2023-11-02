/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    "use strict";
    //set variables for email input, form with post action and message class
    const emailIn = document.querySelector('#email');
    const form = document.querySelector('form');
    let message = document.querySelector('.message');

    //'Listen' user to submit form and provide output 
    form.addEventListener('submit', function(e) {
        e.preventDefault();     //prevent the browsers' default handling of the submission
        const email = emailIn.value;    //set variable for the email input value for printing in the confirmation message
        //check if email is valid and prints confirmation, if not print error message
        if (isValid(email)) {
        message.textContent = "Thank you! Your email address " + emailIn.value + " has been added to our mailing list!";
        } else {
            message.textContent = "Please enter a valid email address";
        }
    });

    //Function to validate email address using email Regex
    function isValid(email) {
        const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailReg.test(email);
    }
    });


