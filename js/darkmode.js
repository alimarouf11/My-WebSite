document.addEventListener("DOMContentLoaded", function() {  

    // get the button that changes the theme (dark / light)
    const toggleBtn = document.getElementById("theme-toggle-btn");

    // get the <body> element
    const body = document.body;

    // function to apply the selected theme
    function applyTheme(theme) {

        if (theme === 'dark') {
            // add dark mode class to body
            body.classList.add("dark-mode");
        } else {
            // remove dark mode class from body
            body.classList.remove("dark-mode");
        }

        // save the current theme in local storage
        localStorage.setItem('theme', theme);
    }


    // when the button is clicked
    toggleBtn.addEventListener("click", () => {

        // if dark mode is active, change to light
        if (body.classList.contains("dark-mode")) {
            applyTheme('light');
        } else {
            // if light mode is active, change to dark
            applyTheme('dark');
        }
    });
    

    // get the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        // if user already has a saved theme, use it
        applyTheme(savedTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // if system is dark, use dark mode
            applyTheme('dark');
        } else {
            // if system is light, use light mode
            applyTheme('light');
        }
    }

    
});