// --- 1. FONCTION DE CHARGEMENT DES COMPOSANTS ---
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
        } else {
            console.error(`Erreur chargement ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Erreur fetch: ${error}`);
    }
}

// --- 2. LOGIQUE MACHINE A ECRIRE (TYPEWRITER) ---
// On définit les rôles pour les deux langues
const rolesData = {
    fr: ["Administrateur Réseau & Système", "Développeur Fullstack React/Node", "Expert Freelance Disponible"],
    en: ["Network & System Administrator", "Fullstack React/Node Developer", "Available Freelance Expert"]
};

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const waitSpeed = 2000;

function typeWriter() {
    const dynamicText = document.querySelector(".dynamic-text");
    if (!dynamicText) {
        setTimeout(typeWriter, 100); 
        return;
    }

    // On récupère la langue actuelle (sauvegardée par lang.js)
    const currentLang = localStorage.getItem('selectedLang') || 'fr';
    const currentRole = rolesData[currentLang][roleIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        typeDelay = waitSpeed; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % rolesData[currentLang].length;
    }

    setTimeout(typeWriter, typeDelay);
}

// --- 3. EXECUTION AU CHARGEMENT DE LA PAGE ---
document.addEventListener("DOMContentLoaded", async () => {
    // On utilise 'await' pour charger la Navbar en premier (important pour la langue)
    await loadComponent("navbar-container", "components/navbar.html");
    
    // On charge le reste
    loadComponent("hero-container", "components/hero.html");
    loadComponent("about-container", "components/about.html");
    loadComponent("projects-container", "components/projects.html");
    loadComponent("services-container", "components/services.html");
    loadComponent("footer-container", "components/footer.html");

    // 2. Initialiser la langue (une seule fois au chargement)
    if (typeof initLanguage === "function") {
        initLanguage();
    }

    // 3. Lancer l'animation texte
    setTimeout(typeWriter, 1000);
});

// --- 4. GESTION DU MENU MOBILE (Event Delegation) ---
document.addEventListener('click', function(e) {
    // Gestion Hamburger
    if (e.target.closest('#hamburger-btn')) {
        const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        if(hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    }

    // Fermeture menu au clic sur un lien
    if (e.target.closest('.nav-link')) {
        const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        if(hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});