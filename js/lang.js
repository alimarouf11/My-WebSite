// run this code after the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // save the original Arabic text of all elements that have "data-en"
    window.storeOriginalLanguage = function() {
        const elements = document.querySelectorAll("[data-en]");
        
        elements.forEach(el => {
            const originalText = el.textContent; // get Arabic text
            el.setAttribute('data-ar', originalText); // save it in data-ar
        });
    }

    // get last selected language from localStorage (if user changed before)
    const storedLang = localStorage.getItem('userLanguage');

    // save all original Arabic texts before changing language
    storeOriginalLanguage();

    // get the Arabic and English buttons
    const arabicBtn = document.getElementById("arabic-btn");
    const englishBtn = document.getElementById("english-btn");

    // get the HTML to change its language attribute
    const htmlTag = document.documentElement; 

        // when click Arabic button
        arabicBtn.addEventListener("click", () => {
            htmlTag.setAttribute("lang", "ar"); // set HTML lang to Arabic
            changeLanguage("ar"); // switch to Arabic text
        });

        // when click English button
        englishBtn.addEventListener("click", () => {
            htmlTag.setAttribute("lang", "en"); // set HTML lang to English
            changeLanguage("en"); // switch to English text
        });


    // function to change language of all elements
    window.changeLanguage = function(lang) {
        // save selected language in localStorage
        localStorage.setItem('userLanguage', lang);

        // find all elements that have both Arabic and English data attributes
        const elements = document.querySelectorAll("[data-en][data-ar]");

        // change their text to match the selected language
        elements.forEach(el => {
            const text = el.getAttribute('data-' + lang);
            el.textContent = text;
        });

        // below code works only on "event details" page
        const titleElement = document.getElementById('event-title');
        // get event id from URL
        const params = new URLSearchParams(window.location.search);
        const eventId = params.get('id');
        // find the event by id from eventsData (make sure eventsData is loaded)
        const event = eventsData.find(e => e.id == eventId);
        // change text of event details to selected language
        document.getElementById('event-title').textContent = event.title[lang];
        document.getElementById('event-description').textContent = event.description[lang];
        document.getElementById('event-date').textContent = event.date[lang];
        document.getElementById('event-start').textContent = event.startTime[lang];
        document.getElementById('event-end').textContent = event.endTime[lang];
        document.getElementById('event-location').textContent = event.location[lang];
    }

    // if user already chose a language before so apply it now
    if (storedLang) {
        window.changeLanguage(storedLang);
    }
});