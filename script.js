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
        researchContent: "My research is primarily focused on the following areas:",
        energyConversion: "Energy Conversion and Harvesting",
        biomedicalSensors: "Biomedical Sensors",
        microNanoSystems: "Micro/Nano Systems",
        machineLearning: "Machine Learning",
        googleScholarLink: "For more details on my research contributions, please visit my Google Scholar profile.",
        publicationsTitle: "Publications",
        publicationsContent: "My published work includes contributions to several high-impact journals:",
        rscReview: "An invited review paper on wearable piezoelectric biomedical sensors, currently in preparation for submission to RSC Advances.",
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
        researchContent: "我的研究主要集中在以下领域：",
        energyConversion: "能量转换和收集",
        biomedicalSensors: "生物医学传感器",
        microNanoSystems: "微/纳米系统",
        machineLearning: "机器学习",
        googleScholarLink: "有关我研究贡献的更多详细信息，请访问我的 Google 学术搜索个人资料。",
        publicationsTitle: "出版物",
        publicationsContent: "我的出版作品包括对多本高影响力期刊的贡献：",
        rscReview: "一篇关于可穿戴压电生物医学传感器的受邀评论文章，正在准备提交给RSC Advances。",
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
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
