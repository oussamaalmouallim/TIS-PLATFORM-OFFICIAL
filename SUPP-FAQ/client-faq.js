// Données FAQ pour les clients
const clientFAQs = [
    {
        question: "Comment puis-je créer un nouveau projet ?",
        answer: "Pour créer un nouveau projet, accédez à l'écran d'accueil de l'application et appuyez sur le bouton '+' en haut à droite. Suivez ensuite les instructions pour nommer votre projet et configurer les paramètres de base."
    }, 
    {
        question: "Comment ajouter des chambres à mon projet ?",
        answer: "Dans votre projet, allez dans l'onglet 'Pièces', puis appuyez sur 'Ajouter une pièce'. Vous pourrez alors définir le nom, le type et l'emplacement de la pièce dans votre installation."
    }, 
    {
        question: "Comment puis-je créer un scénario ?",
        answer: "Accédez à l'onglet 'Scénarios' dans votre projet, puis touchez 'Créer un scénario'. Vous pourrez définir les conditions de déclenchement et les actions à exécuter."
    }, 
    {
        question: "Comment sauvegarder mon projet sur le cloud ?",
        answer: "Dans les paramètres du projet, sélectionnez 'Sauvegarde et synchronisation', puis 'Sauvegarder sur le cloud'. Vous devrez être connecté à votre compte pour utiliser cette fonctionnalité."
    }, 
    {
        question: "L'application est-elle compatible avec mon système ?",
        answer: "L'application TIS est compatible avec iOS 12+ et Android 8.0+. Pour vérifier la compatibilité avec vos équipements spécifiques, consultez la section 'Compatibilité' dans les paramètres de l'application."
    },
    {
        question: "Comment mettre à jour mon système ?",
        answer: "Allez dans 'Paramètres > Système > Mises à jour' pour vérifier et installer les dernières mises à jour disponibles. Il est recommandé de connecter votre appareil à un réseau Wi-Fi et à une source d'alimentation pendant la mise à jour."
    },
    {
        question: "Puis-je contrôler mon système à distance ?", 
        answer: "Oui, vous pouvez contrôler votre système à distance en activant l'accès distant dans les paramètres. Vous devrez créer un compte TIS et configurer la connexion internet de votre installation."
    }
];

// Navigation Client
function showClientSection(sectionId) {
    // Masquer toutes les sections client
    document.querySelectorAll('.client-section').forEach(section => {
        section.classList.remove('active');
    }); 
    
    // Afficher la section demandée
    document.getElementById(sectionId).classList.add('active');
    
    // Mettre à jour la navigation
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => { 
        link.classList.remove('active');
    });
    
    const activeLink = Array.from(document.querySelectorAll('#navbarNav .nav-link')).find(link => {
        return link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeLink) {
        activeLink.classList.add('active'); 
    }
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