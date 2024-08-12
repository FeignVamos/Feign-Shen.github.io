const translations = {
    en: {
        title: "Lux, Scientia et Technologia, Populo et Posteritati",
        home: "Welcome to my website!",
        research: "Research",
        researchContent: "This is the research section where you can talk about your research interests.",
        publications: "Publications",
        publicationsContent: "This is the publications section where you can list your academic papers and books.",
        contact: "Contact",
        contactContent: "This is the contact section with your contact details.",
        footer: "Lux, Scientia et Technologia, Populo et Posteritati",
    },
    zh: {
        title: "光明，科学与技术，服务人民与后世",
        home: "欢迎来到我的网站！",
        research: "研究",
        researchContent: "这是研究部分，您可以在这里讨论您的研究兴趣。",
        publications: "出版物",
        publicationsContent: "这是出版物部分，您可以在这里列出您的学术论文和书籍。",
        contact: "联系方式",
        contactContent: "这是联系部分，包含您的联系方式。",
        footer: "光明，科学与技术，服务人民与后世",
    },
};

// Function to switch the language
function switchLanguage(lang) {
    document.documentElement.lang = lang; // Update the <html> lang attribute

    // Update content with the selected language
    document.getElementById('site-title').textContent = translations[lang].title;
    document.getElementById('home-content').textContent = translations[lang].home;
    document.getElementById('research-content').textContent = translations[lang].researchContent;
    document.getElementById('publications-content').textContent = translations[lang].publicationsContent;
    document.getElementById('contact-content').textContent = translations[lang].contactContent;
    document.getElementById('footer-content').textContent = translations[lang].footer;

    // Save the user's language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Automatically load the preferred language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLanguage);
});

// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}
