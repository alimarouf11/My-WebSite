document.addEventListener("DOMContentLoaded", function() {
    // when page is ready (HTML loaded)
    const alertContainer = document.getElementById('form-alert-container');

    // messages for Arabic and English
    const validationMessages = {
        ar: {
            nameError: "الرجاء ادخال اسم صحيح <br>",
            emailError: "البريد الإلكتروني غير صحيح <br>",
            messageError: "الرجاء ادخال رسالتك بما لا يقل عن 10 احرف <br>",
            successTitle: "تم الإرسال بنجاح",
            successBody: "سيتم الرد باسرع وقت",
            errorTitle: "خطأ في الإرسال"
        },
        en: {
            nameError: "Please enter a valid name <br>",
            emailError: "Invalid email address <br>",
            messageError: "Message must be at least 10 characters long <br>",
            successTitle: "Submission Successful",
            successBody: "We will reply as soon as possible",
            errorTitle: "Submission Error"
        }
    };

    // show alert message on the page
    function showAlert(message, type, lang) {
        let title = '';
        if (type === 'success') {
            // if success message
            title = validationMessages[lang].successTitle;
        } else {
            // if error message
            title = validationMessages[lang].errorTitle;
        }

        // create alert HTML text
        const alertHTML =`
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>${title}</strong><br>
                ${message}
            </div>
        `;
        
        // show the alert inside the container
        alertContainer.innerHTML = alertHTML;
    }

    // check form inputs before sending
    function validateContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return; // if no form found, stop

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // stop normal submit

            // get page language (default is Arabic)
            const lang = document.documentElement.lang || 'ar';

            // get form values
            const name = document.getElementById('Name').value.trim();
            const email = document.getElementById('Email').value.trim();
            const message = document.getElementById('mes').value.trim();

            // simple email check
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
            let good = true; 
            let errorMessage = '';

            // check name
            if (name.length < 2) {
                good = false;
                errorMessage += validationMessages[lang].nameError;
            }

            // check email
            if (email === '' || !emailRegex.test(email)) {
                good = false;
                errorMessage += validationMessages[lang].emailError;
            }

            // check message
            if (message.length < 10) {
                good = false;
                errorMessage += validationMessages[lang].messageError;
            }

            // if all is good
            if (good) {
                showAlert(validationMessages[lang].successBody, 'success', lang);
                form.reset(); // clear the form
            } else {
                // show error messages
                showAlert(errorMessage, 'danger', lang);
            }

            // move page to alert box smoothly
            alertContainer.scrollIntoView({behavior : 'smooth' , block: 'start'});
        });
    }
    
    // start form validation
    validateContactForm();
});