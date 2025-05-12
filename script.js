// Variables globales
let currentUserType = null;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Charger les FAQs
    loadFAQs(clientFAQs, 'faqAccordion');
    loadFAQs(techFAQs, 'techFaqAccordion');
    
    // Écouteurs d'événements pour les sections de tutoriels
    document.getElementById('voir-tech-4g-keyboard-tutorial').addEventListener('click', loadKeyboard4GTutorial);
    document.getElementById('tech-faq-search').addEventListener('input', function(e) {
        filterFAQs(e.target.value, 'techFaqAccordion');
    });

    // Charger le tutoriel du clavier 4G par défaut pour les techniciens
    loadKeyboard4GTutorial();
});
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
