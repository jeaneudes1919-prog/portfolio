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
const roles = [
    "Administrateur Réseau & Système", 
    "Développeur Fullstack React/Node", 
    "Expert Freelance Disponible"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;   // Vitesse de frappe
const deleteSpeed = 50;  // Vitesse d'effacement
const waitSpeed = 2000;  // Temps d'attente une fois le mot écrit

function typeWriter() {
    // On cherche l'élément dans le HTML (il doit être chargé d'abord !)
    const dynamicText = document.querySelector(".dynamic-text");
    
    // Si l'élément n'existe pas encore (hero.html pas fini de charger), on réessaie un peu plus tard
    if (!dynamicText) {
        setTimeout(typeWriter, 100); 
        return;
    }

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Efface
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Ecrit
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    // Gestion de la vitesse et des états
    let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        // Mot fini, on attend un peu
        typeDelay = waitSpeed; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Effacement fini, on passe au mot suivant
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeWriter, typeDelay);
}

// --- 3. EXECUTION AU CHARGEMENT DE LA PAGE ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. On lance le chargement des composants HTML
    loadComponent("hero-container", "components/hero.html");
    loadComponent("about-container", "components/about.html");
    loadComponent("projects-container", "components/projects.html");
    loadComponent("services-container", "components/services.html");
    loadComponent("footer-container", "components/footer.html");
    loadComponent("navbar-container", "components/navbar.html");
    // 2. On lance l'animation (avec un petit délai pour être sûr que le Hero est là)
    setTimeout(typeWriter, 1000);
});

// --- 4. GESTION DU MENU MOBILE (Event Delegation) ---
document.addEventListener('click', function(e) {
    // Si on clique sur le bouton hamburger (ou ses barres)
    if (e.target.closest('#hamburger-btn')) {
        const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // Si on clique sur un lien du menu (pour fermer le menu après le clic)
    if (e.target.closest('.nav-link')) {
        const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});