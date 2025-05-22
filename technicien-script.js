
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
        case 'relais':
            videoTitle = 'Configuration des modules Relais';
            videoUrl = src="images/TUTO-4ZONES.mp4";
            break;
        case 'variateur':
            videoTitle = 'Configuration des modules Variateurs';
            videoUrl = 'https://www.youtube.com/embed/example_variateur';
            break;
        case 'ip-port':
            videoTitle = 'Configuration des modules IP Port';
            videoUrl = 'https://www.youtube.com/embed/example_ipport';
            break;
        case '4-zones':
            videoTitle = 'Configuration des modules 4 Zones';
            videoUrl = src="images/TUTO-4ZONES.mp4";
            break;
        case '4g':
            videoTitle = 'Configuration des modules 4 Zones';
            videoUrl = src="images/TUTO-4ZONES.mp4";
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
        case 'titan':
                videoTitle = 'Ajout des pièces/ des emplacements';
                videoUrl = src="videos/TUTO-NEW-ROOM.mp4";
            break; 
        case 'titan':
                videoTitle = 'Configuration des circuits d éclairage';
                videoUrl = src="videos/TUTO-NEW-LIGHTNING.mp4";
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
}

// Gestion des schémas de câblage
function openWiringDiagram(diagramId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Schéma de câblage ${diagramId} ouvert!`);
}
