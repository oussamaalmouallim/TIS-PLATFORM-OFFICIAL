
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

// Gestion des modules pour les techniciens
function openModuleGuide(moduleId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Guide du module ${moduleId} ouvert!`);
}

// Gestion des schémas de câblage
function openWiringDiagram(diagramId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Schéma de câblage ${diagramId} ouvert!`);
}
