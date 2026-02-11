// Dictionnaire des traductions complet pour Jean-Eudes ATINDEHOU
const translations = {
    fr: {
        // --- Navbar ---
        nav_logo: "Dev",
        nav_expertise: "Expertise",
        nav_projects: "Réalisations",
        nav_services: "Services",
        nav_contact: "Contact",
        
        // --- Hero Section ---
        hero_badge: "Disponible pour missions Freelance",
        hero_role: "Je suis",
        hero_desc: "Ne choisissez plus entre un code performant et une infrastructure sécurisée.<br>Je construis le <strong>Web</strong>, je configure le <strong>Réseau</strong>, je déploie le <strong>Futur</strong>.",
        hero_btn_projects: "Voir mes projets",
        hero_btn_contact: "Me contacter",
        hero_stat_reliability: "Fiabilité",
        hero_stat_performance: "Performance",
        hero_stat_security: "Sécurité",

        // --- About Section ---
        about_title: "Mon Profil",
        about_role: "Admin Réseau & Dev Fullstack",
        about_age_label: "Âge / Naissance",
        about_loc_label: "Localisation",
        about_addr_label: "Adresse",
        about_bio: "Ma force ? La polyvalence. Je passe du code <strong>React/Node.js</strong> à la configuration de serveurs <strong>Linux/Cisco</strong>.",
        btn_cv: "Télécharger mon CV",
        stat_exp: "d'expérience",
        stat_stack: "Stack",

        // --- Services Section ---
        services_title: "Mes Services",
        service_web_title: "Développement Web",
        service_web_desc: "Création d'applications sur mesure (React/Node.js/Laravel). Du site vitrine performant au SaaS complexe.",
        service_infra_title: "Admin Sys & Déploiement",
        service_infra_desc: "Configuration de serveurs (Linux/Windows), gestion DNS/DHCP, hébergement et mise en ligne sécurisée.",
        service_cms_title: "E-commerce & CMS",
        service_cms_desc: "Boutiques en ligne avec Shopify, WooCommerce ou sites administrables via WordPress/Elementor.",

        // --- Projects Section ---
        projects_title: "Mes Réalisations",
        projects_subtitle: "Des solutions complètes, du backend robuste au frontend soigné.",
        project_view_live: "Voir le site",
        proj_solostack_type: "(CRM & E-commerce)",
        proj_solostack_desc: "Plateforme complète connectant vendeurs et acheteurs. Gestion de boutique, photos produits et transactions sécurisées.",
        proj_socialtyky_type: "(Réseau Social)",
        proj_socialtyky_desc: "Réseau minimaliste avec messagerie instantanée. Stories et personnalisation de profil avancée.",
        proj_nestflow_type: "(Location)",
        proj_nestflow_desc: "Clone type Airbnb pour publication d'appartements. Système d'authentification et réservations sécurisées.",
        proj_yoga_title: "Site Pro Yoga",
        proj_yoga_type: "(Vitrine)",
        proj_yoga_desc: "Site élégant pour professeur de yoga. Planning et philosophie avec un design apaisant et responsive.",
        proj_dashboard_title: "Tableau de Bord",
        proj_dashboard_type: "(Concept UI)",
        proj_dashboard_desc: "Interface d'administration complexe gérant des flux de données massifs (graphiques, widgets).",

        // --- Footer & CTA ---
        cta_title: "Un projet en tête ?",
        cta_desc: "Je transforme vos idées en solutions techniques robustes.",
        cta_btn: "Me recruter sur ComeUp",
        footer_title_start: "Travaillons",
        footer_title_end: "Ensemble",
        footer_rights: "Tous droits réservés.",
        footer_made_with: "Fait avec",
        footer_location: "et du Vanilla JS au Bénin."
    },
    en: {
        // --- Navbar ---
        nav_logo: "Dev",
        nav_expertise: "Expertise",
        nav_projects: "Projects",
        nav_services: "Services",
        nav_contact: "Contact",
        
        // --- Hero Section ---
        hero_badge: "Available for Freelance work",
        hero_role: "I am",
        hero_desc: "Don't choose between performant code and secure infrastructure.<br>I build the <strong>Web</strong>, I configure the <strong>Network</strong>, I deploy the <strong>Future</strong>.",
        hero_btn_projects: "View my work",
        hero_btn_contact: "Contact me",
        hero_stat_reliability: "Reliability",
        hero_stat_performance: "Performance",
        hero_stat_security: "Security",

        // --- About Section ---
        about_title: "My Profile",
        about_role: "Network Admin & Fullstack Dev",
        about_age_label: "Age / Birth",
        about_loc_label: "Location",
        about_addr_label: "Address",
        about_bio: "My strength? Versatility. I switch from <strong>React/Node.js</strong> code to <strong>Linux/Cisco</strong> server configuration seamlessly.",
        btn_cv: "Download my Resume",
        stat_exp: "experience",
        stat_stack: "Stack",

        // --- Services Section ---
        services_title: "My Services",
        service_web_title: "Web Development",
        service_web_desc: "Custom application development (React/Node.js/Laravel). From high-performance showcase sites to complex SaaS.",
        service_infra_title: "SysAdmin & Deployment",
        service_infra_desc: "Server configuration (Linux/Windows), DNS/DHCP management, hosting and secure deployment.",
        service_cms_title: "E-commerce & CMS",
        service_cms_desc: "Turnkey online stores with Shopify, WooCommerce or manageable sites via WordPress/Elementor.",

        // --- Projects Section ---
        projects_title: "My Projects",
        projects_subtitle: "Complete solutions, from robust backend to polished frontend.",
        project_view_live: "Live Demo",
        proj_solostack_type: "(CRM & E-commerce)",
        proj_solostack_desc: "Full platform connecting sellers and buyers. Store management, product photos and secure transactions.",
        proj_socialtyky_type: "(Social Network)",
        proj_socialtyky_desc: "Minimalist network with instant messaging. Features Stories and advanced profile customization.",
        proj_nestflow_type: "(Rentals)",
        proj_nestflow_desc: "Airbnb-style clone for listing apartments. Secure authentication and booking system.",
        proj_yoga_title: "Yoga Pro Site",
        proj_yoga_type: "(Showcase)",
        proj_yoga_desc: "Elegant site for a yoga teacher. Schedule and philosophy with a soothing responsive design.",
        proj_dashboard_title: "Admin Dashboard",
        proj_dashboard_type: "(UI Concept)",
        proj_dashboard_desc: "Complex admin interface handling massive data displays (charts, widgets).",

        // --- Footer & CTA ---
        cta_title: "Have a project in mind?",
        cta_desc: "I turn your ideas into robust technical solutions.",
        cta_btn: "Hire me on ComeUp",
        footer_title_start: "Let's work",
        footer_title_end: "Together",
        footer_rights: "All rights reserved.",
        footer_made_with: "Made with",
        footer_location: "and Vanilla JS in Benin."
    }
};

// --- LOGIQUE DE MISE À JOUR ---
function updateLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const btnText = document.getElementById('current-lang');
    if(btnText) btnText.innerText = lang === 'fr' ? 'EN' : 'FR';
}

document.addEventListener('click', (e) => {
    if (e.target.closest('#lang-switch')) {
        const currentLang = localStorage.getItem('selectedLang') || 'fr';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(newLang);
    }
});

function initLanguage() {
    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    setTimeout(() => {
        updateLanguage(savedLang);
    }, 500);
}