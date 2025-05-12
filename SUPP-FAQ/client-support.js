// Fonctions de support pour le client
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

// Gestion des guides
function openGuide(guideId) {
    // Masquer l'écran principal client
    document.getElementById('client-screen').classList.remove('active');
    
    // Afficher l'écran de guide
    document.getElementById('guide-content').classList.add('active');
    
    // Définir le titre du guide
    let title = '';
    switch(guideId) {
        case 'creation-projet':
            title = 'Guide de création de projet';
            loadProjectCreationGuide("images/nouveau_projet.png", "images/import_export.png");
            break;
        case 'ajout-chambres':
            title = 'Guide d\'ajout de chambres et emplacements';
            loadRoomAdditionGuide();
            break;
        case 'eclairage':
            title = 'Configuration des circuits d\'éclairage';
            loadLightingGuide();
            break;
        case 'scenarios':
            title = 'Création de scénarios';
            loadScenariosGuide();
            break;
        case 'upload-download':
            title = 'Upload et download de projets';
            loadUploadDownloadGuide();
            break;
        case 'reseau':
            title = 'Configuration réseau et mises à jour';
            loadNetworkGuide();
            break;
    }
    
    document.getElementById('guide-title').textContent = title;
}

function closeGuide() {
    // Masquer l'écran de guide
    document.getElementById('guide-content').classList.remove('active');
    
    // Réafficher l'écran principal client
    document.getElementById('client-screen').classList.add('active');
}