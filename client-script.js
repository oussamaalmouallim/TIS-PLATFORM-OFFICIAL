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

// Gestion des tutoriels
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
    } else if (tutorialId === 'devsearch-prog') {
        title = 'Tutoriel Programmation DEVsearch';
        loadDevsearchTutorial();
    } else if (tutorialId === 'cablage-domotique') {
        title = 'Tutoriel Câblage Domotique';
        loadCablageTutorial();
    } else if (tutorialId === '4g') {
        title = 'Tutoriel Programmation du clavier 4G';
        loadKeyboard4GTutorial();
    } else if (tutorialId === 'luna') {
        title = 'Tutoriel Programmation du clavier Luna';
        loadKeyboardLunaTutorial();
    } else if (tutorialId === 'relais') {
        title = 'Tutoriel Programmation du clavier Luna';
        loadRelaisWiringTutorial();
    } else if (tutorialId === 'variateur') {
        title = 'Tutoriel Programmation du clavier Luna';
        loadVariateurWiringTutorial();
    } else if (tutorialId === 'ip-port') {
        title = 'Tutoriel Programmation du clavier Luna';
        loadIPPortWiringTutorial();
    } else if (tutorialId === '4-zones') {
        title = 'Tutoriel Programmation du clavier Luna';
        load4ZonesWiringTutorial();                    
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
            loadProjectCreationGuide();
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
        case 'VR':
            title = 'Configuration et automatisation des volets roulants';
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
 
