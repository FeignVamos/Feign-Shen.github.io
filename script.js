// Translation data for different languages
const translations = {
    en: {
        title: "Lux, Scientia et Technologia, Populo et Posteritati",
        content: "Welcome to my website!",
        footer: "Lux, Scientia et Technologia, Populo et Posteritati",
    },
    zh: {
        title: "光明，科学与技术，服务人民与后世",
        content: "欢迎来到我的网站！",
        footer: "光明，科学与技术，服务人民与后世",
    },
};

// Function to switch the language
function switchLanguage(lang) {
    document.documentElement.lang = lang; // Update the <html> lang attribute

    // Update content with the selected language
    document.getElementById('site-title').textContent = translations[lang].title;
    document.getElementById('content').textContent = translations[lang].content;
    document.getElementById('footer-content').textContent = translations[lang].footer;

    // Save the user's language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Automatically load the preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLanguage);
});
