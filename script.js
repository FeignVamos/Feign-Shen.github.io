const translations = {
    en: {
        siteTitle: "Lux, Scientia et Technologia, Populo et Posteritati",
        homeNav: "Home",
        researchNav: "Research",
        publicationsNav: "Publications",
        contactNav: "Contact",
        homeTitle: "Welcome to my website!",
        homeContent: "This is the home section.",
        researchTitle: "Research",
        researchContent: "This is the research section where you can talk about your research interests.",
        publicationsTitle: "Publications",
        publicationsContent: "This is the publications section where you can list your academic papers and books.",
        contactTitle: "Contact",
        contactContent: "This is the contact section with your contact details.",
        footerContent: "Lux, Scientia et Technologia, Populo et Posteritati",
    },
    zh: {
        siteTitle: "光明，科学与技术，服务人民与后世",
        homeNav: "首页",
        researchNav: "研究",
        publicationsNav: "出版物",
        contactNav: "联系方式",
        homeTitle: "欢迎来到我的网站！",
        homeContent: "这是主页部分。",
        researchTitle: "研究",
        researchContent: "这是研究部分，您可以在这里讨论您的研究兴趣。",
        publicationsTitle: "出版物",
        publicationsContent: "这是出版物部分，您可以在这里列出您的学术论文和书籍。",
        contactTitle: "联系方式",
        contactContent: "这是联系部分，包含您的联系方式。",
        footerContent: "光明，科学与技术，服务人民与后世",
    },
};

// Function to switch the language
function switchLanguage(lang) {
    document.documentElement.lang = lang; // Update the <html> lang attribute

    // Update content with the selected language
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key] || element.textContent;
    });

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
