// Navigation Technicien
function showTechSection(sectionId) {
    // Masquer toutes les sections technicien
    document.querySelectorAll('.tech-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionId).classList.add('active');
    
    // Mettre à jour la navigation
    document.querySelectorAll('#navbarTech .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = Array.from(document.querySelectorAll('#navbarTech .nav-link')).find(link => {
        return link.getAttribute('onclick') && link.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Fonction pour afficher la vidéo explicative d'un module
function showModuleVideo(moduleId) {
    let videoTitle = '';
    let videoUrl = '';
    
    switch(moduleId) {
        case '4ZONE':
            videoTitle = 'Configuration des modules 4 Zones';
            videoUrl = src="videos/TUTO-4ZONE.mp4";
            break;
        case 'luna':
            videoTitle = 'Configuration des modules 4 Zones';
            videoUrl = src="images/TUTO-4ZONES.mp4";
            break;   
        case 'titan':
                videoTitle = 'Configuration des modules 4 Zones';
                videoUrl = src="images/TUTO-4ZONES.mp4";
            break;  
        case 'PROJECT':
                videoTitle = 'Création des nouveaux projets';
                videoUrl = src="videos/TUTO-NEW-PROJECT.mp4";
            break;      
        case 'ROOM':
                videoTitle = 'Ajout des pièces/ des emplacements';
                videoUrl = src="videos/TUTO-NEW-ROOM.mp4";
            break; 
        case 'LIGHTNING':
                videoTitle = 'Configuration des circuits d éclairage';
                videoUrl = src="videos/TUTO-NEW-LIGHTNING.mp4";
            break;    
        case 'VR':
                videoTitle = 'Configuration et automatisation des volets';
                videoUrl = src="videos/TUTO-VR.mp4";
            break;   
        case 'NETWORK':
                videoTitle = 'Connexion et configuration réseau';
                videoUrl = src="videos/TUTO-NEW-NETWORK.mp4";
            break;    
        case 'NETWORK2':
                videoTitle = 'Connexion et configuration réseau';
                videoUrl = src="videos/TUTO-NET2.mp4";
            break;   
        case 'NEWS':
                videoTitle = 'Nos nouveautés';
                videoUrl = src="https://www.tiscontrol.com/en/pro_movies.html?m_name=TIS%20Automation%20Technology%20-%20IoT%20Smart%20Home";
            break;  
        case 'scenario':
                videoTitle = 'Automatisations et scènes personnalisées';
                videoUrl = src="https://www.tiscontrol.com/en/pro_movies.html?m_name=TIS%20Automation%20Technology%20-%20IoT%20Smart%20Home";
            break;    
        case 'scenario2':
                videoTitle = 'Automatisations et scènes personnalisées';
                videoUrl = src="https://www.tiscontrol.com/en/pro_movies.html?m_name=TIS%20Automation%20Technology%20-%20IoT%20Smart%20Home";
            break; 
        case 'IP':
                videoTitle = 'Configuration de la passerelle IP';
                videoUrl = src="videos/TUTO-IP.mp4";
            break; 
        case 'DIM':
                videoTitle = 'Contrôle graduel intensité lumineuse';
                videoUrl = src="videos/TUTO-DIM.mp4";
            break; 
        case '4GANG':
                videoTitle = 'Configuration Clavier TER-4G';
                videoUrl = src="videos/TUTO-4G.mp4";
            break;      
    }
    
    // Créer une modal pour afficher la vidéo
    const modalHtml = `
        <div class="modal fade" id="moduleVideoModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${videoTitle}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="ratio ratio-16x9">
                            <iframe src="${videoUrl}" title="${videoTitle}" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter la modal au document s'il n'existe pas déjà
    if (!document.getElementById('moduleVideoModal')) {
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHtml;
        document.body.appendChild(modalContainer);
    } else {
        document.getElementById('moduleVideoModal').outerHTML = modalHtml;
    }
    
    // Afficher la modal
    const videoModal = new bootstrap.Modal(document.getElementById('moduleVideoModal'));
    videoModal.show();

    // Ajouter un écouteur pour arrêter la vidéo lorsque la modal est fermée
document.addEventListener('hidden.bs.modal', (event) => {
    if (event.target.id === 'moduleVideoModal') {
        const iframe = event.target.querySelector('iframe');
        if (iframe) {
            iframe.src = ''; // Réinitialiser la source pour arrêter la vidéo
        }
    }
});

}


// Gestion des schémas de câblage
function openWiringDiagram(diagramId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Schéma de câblage ${diagramId} ouvert!`);
}
