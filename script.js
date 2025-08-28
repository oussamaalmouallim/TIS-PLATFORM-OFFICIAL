// Variables globales
let currentUserType = null;

// Fonction de génération du code
function generateDailyCode() {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const seed = "TIS" + dateStr;
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash = hash & hash;
    }
    
    const alphaNum = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'TIS';
    const hashAbs = Math.abs(hash);
    for (let i = 0; i < 5; i++) {
        code += alphaNum.charAt(hashAbs % alphaNum.length);
        hash = Math.floor(hash / alphaNum.length);
    }
    
    return code;
}

// Get today's valid access code
const getTodayAccessCode = () => {
    return generateDailyCode();
};

// Codes d'accès valides (now dynamically generated)
const isValidAccessCode = (code) => {
    const todayCode = getTodayAccessCode();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Generate yesterday's code for a grace period
    const dateStr = yesterday.toISOString().slice(0, 10).replace(/-/g, '');
    const seed = "TIS" + dateStr;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash = hash & hash;
    }
    const alphaNum = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let yesterdayCode = 'TIS';
    const hashAbs = Math.abs(hash);
    for (let i = 0; i < 5; i++) {
        yesterdayCode += alphaNum.charAt(hashAbs % alphaNum.length);
        hash = Math.floor(hash / alphaNum.length);
    }
    
    // For backward compatibility
    const legacyCodes = {
        "TIS2023": true,
        "FORMATION2023": true,
        "TECHDEMO": true
    };
    
    return code === todayCode || code === yesterdayCode || legacyCodes[code] === true;
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur a déjà un code d'accès valide
    checkExistingAccessCode();
    
    // Charger les FAQs
    loadFAQs(clientFAQs, 'faqAccordion');
    loadFAQs(techFAQs, 'techFaqAccordion');
    
    // Initialiser la recherche dans les FAQs
    document.getElementById('faq-search').addEventListener('input', function(e) {
        filterFAQs(e.target.value, 'faqAccordion');
    });
    
    document.getElementById('tech-faq-search').addEventListener('input', function(e) {
        filterFAQs(e.target.value, 'techFaqAccordion');
    });

    // Close navbar when item is clicked on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Add touch-friendly events for mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('.card, .btn, .nav-link').forEach(element => {
            element.classList.add('touch-friendly');
        });
    }

    // Footer collapsible sections for mobile
    const footerHeadings = document.querySelectorAll('.footer h5');
    footerHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
                this.classList.toggle('collapsed');
            }
        });
    });
});

// Fonction pour vérifier l'accès
function verifyAccessCode() {
    const codeInput = document.getElementById('access-code').value.trim();
    
    if (isValidAccessCode(codeInput)) {
        // Code valide, enregistrer dans localStorage avec expiration
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 24); // Expire dans 24 heures
        
        const accessData = {
            code: codeInput,
            expiration: expiration.getTime()
        };
        
        localStorage.setItem('tisAccessData', JSON.stringify(accessData));
        
        // Montrer les options de profil
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('profile-container').style.display = 'flex';
    } else {
        // Code invalide
        alert("Code d'accès invalide. Veuillez contacter l'administrateur pour obtenir un code valide.");
    }
}

// Vérifier si l'utilisateur a déjà un code d'accès valide
function checkExistingAccessCode() {
    const accessDataString = localStorage.getItem('tisAccessData');
    
    if (accessDataString) {
        const accessData = JSON.parse(accessDataString);
        const now = new Date().getTime();
        
        // Vérifier si le code n'a pas expiré
        if (accessData.expiration > now) {
            // Code toujours valide
            document.getElementById('auth-container').style.display = 'none';
            document.getElementById('profile-container').style.display = 'flex';
        } else {
            // Code expiré, supprimer du localStorage
            localStorage.removeItem('tisAccessData');
            
        }
    }
}

// Initialiser la recherche dans les FAQs
document.getElementById('faq-search').addEventListener('input', function(e) {
    filterFAQs(e.target.value, 'faqAccordion');
});
    
// Fonction pour charger les FAQs dans un accordéon
function loadFAQs(faqs, accordionId) {
    const accordion = document.getElementById(accordionId);
    accordion.innerHTML = '';
    
    faqs.forEach((faq, index) => {
        const itemId = `${accordionId}-item-${index}`;
        const headingId = `${accordionId}-heading-${index}`;
        const collapseId = `${accordionId}-collapse-${index}`;
        
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                    ${faq.question}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" 
                 data-bs-parent="#${accordionId}">
                <div class="accordion-body">
                    ${faq.answer}
                </div>
            </div>
        `;
        
        accordion.appendChild(accordionItem);
    });
}

// Fonction pour filtrer les FAQs
function filterFAQs(searchTerm, accordionId) {
    const accordion = document.getElementById(accordionId);
    const items = accordion.querySelectorAll('.accordion-item');
    
    searchTerm = searchTerm.toLowerCase();
    
    items.forEach(item => {
        const question = item.querySelector('.accordion-button').textContent.toLowerCase();
        const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Fonctions de navigation
function selectUserType(type) {
    currentUserType = type;
    
    // Masquer l'écran de connexion
    document.getElementById('login-screen').classList.remove('active');
    
    // Afficher l'écran correspondant au type d'utilisateur
    if (type === 'client') {
        document.getElementById('client-screen').classList.add('active');
        showClientSection('app-tutoriels');
    } else if (type === 'technicien') {
        document.getElementById('technicien-screen').classList.add('active');
        showTechSection('tech-app');
    }
}

function logout() {
    // Masquer tous les écrans
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Réafficher l'écran de connexion
    document.getElementById('login-screen').classList.add('active');
    
    // Réinitialiser le type d'utilisateur
    currentUserType = null;
}

// Afficher une confirmation
function showConfirmation(message) {
    document.getElementById('confirmation-message').textContent = message;
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

// Fonctions pour les formulaires
function submitFeedback() {
    // Simuler l'envoi du formulaire
    showConfirmation("Votre retour a été envoyé avec succès !");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
    modal.hide();
}

function submitTrainingRequest() {
    // Simuler l'envoi de la demande de formation
    showConfirmation("Votre demande de formation a été envoyée. Nous vous contacterons très bientôt !");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('trainingModal'));
    modal.hide();
}

function submitTechFeedback() {
    // Simuler l'envoi du formulaire
    showConfirmation("Votre retour technique a été envoyé avec succès !");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('techFeedbackModal'));
    modal.hide();
}

function submitTechSupport() {
    // Simuler l'envoi de la demande de support
    showConfirmation("Votre demande d'assistance a été enregistrée. Un technicien vous contactera selon le niveau d'urgence indiqué.");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('techSupportModal'));
    modal.hide();
}

// Function to create and display contact information modal
function showContactInfo() {
    // Define the modal content
    const modalContent = `
        <div class="modal fade" id="contactInfoModal" tabindex="-1" aria-labelledby="contactInfoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contactInfoModalLabel">Contactez-vous</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                    </div>
                    <div class="modal-body">
                        <div class="contact-info">
                            <div class="mb-3">
                                <h6><i class="fas fa-phone-alt"></i> Téléphone</h6>
                                <p><a href="tel:+212 661-053971">+212 661-053971</a></p>
                            </div>
                            <div class="mb-3">
                                <h6><i class="fas fa-envelope"></i> Email</h6>
                                <p><a href="mailto:oussamakanouni39@gmail.com">oussamakanouni39@gmail.com</a></p>
                            </div>
                            <div>
                                <h6><i class="fas fa-map-marker-alt"></i> Adresse</h6>
                                <p>54 Rue Al Fourate, Casablanca, Maroc</p>
                            </div>
                            <div class="mt-3">
                                <h6><i class="fas fa-clock"></i> Horaires</h6>
                                <p>Lundi - Vendredi: 08h30 - 18h00<br>Samedi: 08h30 - 12h00</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 1. **Remove any existing modal with the same ID before creating a new one.**
    // This is crucial to ensure you're always working with a fresh instance.
    const existingModal = document.getElementById('contactInfoModal');
    if (existingModal) {
        existingModal.remove();
    }

    // 2. **Create a new container and append the modal content.**
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);

    // 3. **Get the newly added modal element.**
    const contactModalElement = document.getElementById('contactInfoModal');

    // 4. **Initialize and show the Bootstrap modal.**
    const contactModal = new bootstrap.Modal(contactModalElement);
    contactModal.show();

    // 5. **Add an event listener to remove the modal from the DOM when it's completely hidden.**
    // This listener must be attached to the *newly created* modal instance.
    contactModalElement.addEventListener('hidden.bs.modal', function () {
        // This 'if' check is an extra safeguard, though .remove() handles non-existent elements gracefully.
        if (contactModalElement) {
            contactModalElement.remove();
        }
    });
}


// Fonction pour ouvrir un tutoriel
function openTutorial(tutorialId) {
    // Masquer l'écran principal
    if (currentUserType === 'client') {
        document.getElementById('client-screen').classList.remove('active');
    } else {
        document.getElementById('technicien-screen').classList.remove('active');
    }
    
    // Afficher l'écran de tutoriel
    document.getElementById('tutorial-content').classList.add('active');
    
    // Définir le titre du tutoriel
    let title = '';
    if (tutorialId === 'app-mobile' || tutorialId === 'app-mobile-tech') {
        title = 'Tutoriel Application Mobile TIS';
        loadMobileAppTutorial();
    } else if (tutorialId === 'tablette' || tutorialId === 'tablette-tech') {
        title = 'Tutoriel Utilisation de la Tablette';
        loadTabletTutorial();
    } 
    
    document.getElementById('tutorial-title').textContent = title;
}

function closeTutorial() {
    // Masquer l'écran de tutoriel
    document.getElementById('tutorial-content').classList.remove('active');
    
    // Réafficher l'écran principal
    if (currentUserType === 'client') {
        document.getElementById('client-screen').classList.add('active');
    } else {
        document.getElementById('technicien-screen').classList.add('active');
    }
}
