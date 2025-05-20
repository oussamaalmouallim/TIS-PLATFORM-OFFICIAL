
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

// Fonction pour charger le tutoriel de câblage du module Relais
function loadRelaisWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module Relais</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/RCU20.png" alt="Schéma de câblage Relais" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module Relais est un composant essentiel pour le contrôle des circuits d'éclairage, des prises commandées et d'autres appareils électriques dans l'installation domotique TIS.</p>
                    <p>Ce tutoriel explique en détail le câblage du module Relais et sa configuration matérielle.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Caractéristiques techniques</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Spécifications</h5>
                            <ul>
                                <li>Alimentation: 12V DC via TIS Bus</li>
                                <li>Consommation: 30mA (repos), 150mA (tous relais actifs)</li>
                                <li>Nombre de sorties: 4 ou 8 selon modèle</li>
                                <li>Capacité de commutation: 16A par sortie (charge résistive)</li>
                                <li>Tension de commutation max: 250V AC</li>
                                <li>Montage sur rail DIN (4 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Types de charges supportées</h5>
                            <ul>
                                <li>Charges résistives: éclairage incandescent, chauffage (16A max)</li>
                                <li>Charges inductives: moteurs, transformateurs (10A max)</li>
                                <li>Charges capacitives: éclairage LED, fluo compact (6A max)</li>
                                <li>Charges spéciales: prévoir relais intermédiaire</li>
                            </ul>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> Pour les charges inductives importantes (moteurs, transformateurs), utilisez un relais intermédiaire ou un contacteur adapté.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Procédure de câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Étapes de câblage</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexion au TIS Bus</h5>
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module (généralement en haut)</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez que les fils sont bien serrés dans les borniers</li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion des sorties</h5>
                                    <ol>
                                        <li>Chaque sortie possède 3 bornes:
                                            <ul>
                                                <li>C: Commun</li>
                                                <li>NO: Normalement Ouvert</li>
                                                <li>NC: Normalement Fermé</li>
                                            </ul>
                                        </li>
                                        <li>Pour un éclairage standard:
                                            <ul>
                                                <li>Connectez la phase d'alimentation à la borne C</li>
                                                <li>Connectez la charge (lampe) à la borne NO</li>
                                                <li>Connectez le neutre directement à la charge</li>
                                            </ul>
                                        </li>
                                        <li>Pour un contrôle de volet roulant:
                                            <ul>
                                                <li>Utilisez deux sorties consécutives (montée/descente)</li>
                                                <li>Installez un verrouillage mécanique ou logiciel</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Utilisez des étiquettes pour identifier clairement chaque sortie. Documentez précisément l'affectation des sorties dans le schéma électrique.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration matérielle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des commutateurs DIP</h5>
                                    <ol>
                                        <li>Commutateurs 1 à 6 définissent l'adresse du module sur le TIS Bus:
                                            <ul>
                                                <li>Position ON = 1</li>
                                                <li>Position OFF = 0</li>
                                                <li>L'interrupteur 1 est le bit de poids faible</li>
                                            </ul>
                                        </li>
                                        <li>Le commutateur 7 active/désactive la résistance de terminaison (ON si module en fin de ligne)</li>
                                        <li>Le commutateur 8 est réservé pour usage futur (laisser sur OFF)</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>LED d'état et diagnostics</h5>
                                    <ul>
                                        <li><strong>LED POWER (verte)</strong>: Alimentation correcte</li>
                                        <li><strong>LED BUS (orange)</strong>: Clignote lors de communication sur le bus</li>
                                        <li><strong>LED ERROR (rouge)</strong>: Indique une erreur si allumée</li>
                                        <li><strong>LED des sorties</strong>: Indiquent l'état de chaque relais (ON/OFF)</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">Bouton de reset</h5>
                                    <p>Le bouton RESET permet de:</p>
                                    <ul>
                                        <li>Appui court: Redémarrer le module</li>
                                        <li>Appui 5 secondes: Réinitialisation des communications</li>
                                        <li>Appui 10 secondes + DIP8 ON: Réinitialisation d'usine</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Exemples de câblage courants</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Éclairage simple ON/OFF</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez la phase au bornier C du relais</li>
                                <li>Connectez la borne NO à la lampe</li>
                                <li>Connectez le neutre directement à la lampe</li>
                                <li>Pour conserver l'interrupteur manuel:
                                    <ul>
                                        <li>Utilisez une entrée du module</li>
                                        <li>Connectez l'interrupteur entre +12V et l'entrée</li>
                                        <li>Utilisez DEVsearch pour associer l'entrée au relais</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Commande de prise électrique</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez la phase au bornier C du relais</li>
                                <li>Connectez la borne NO à la phase de la prise</li>
                                <li>Connectez le neutre directement à la prise</li>
                                <li>Précautions importantes:
                                    <ul>
                                        <li>Vérifiez la capacité du relais (16A max)</li>
                                        <li>Utilisez un relais intermédiaire pour charges importantes</li>
                                        <li>Assurez-vous que la prise est bien identifiée comme "commandée"</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Volets roulants (2 relais)</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Utilisez 2 relais consécutifs (ex: 1 et 2)</li>
                                <li>Relais 1 (montée):
                                    <ul>
                                        <li>Borne C: Phase</li>
                                        <li>Borne NO: Fil de montée du moteur</li>
                                    </ul>
                                </li>
                                <li>Relais 2 (descente):
                                    <ul>
                                        <li>Borne C: Phase</li>
                                        <li>Borne NO: Fil de descente du moteur</li>
                                    </ul>
                                </li>
                                <li>Connectez le neutre directement au moteur</li>
                                <li>Activez le verrouillage dans DEVsearch pour empêcher l'activation simultanée</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Commutation de circuits</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Utilisation des contacts NO et NC pour commutation:
                                    <ul>
                                        <li>Borne C: Signal source</li>
                                        <li>Borne NO: Sortie quand relais activé</li>
                                        <li>Borne NC: Sortie quand relais désactivé</li>
                                    </ul>
                                </li>
                                <li>Application: commutation d'antenne, sélection de source audio, etc.</li>
                                <li>Pour commutation sécuritaire:
                                    <ul>
                                        <li>Configurez le comportement par défaut (au démarrage)</li>
                                        <li>Définissez l'état en cas de perte de communication</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage du module Relais TIS !
            </div>
            <p>N'oubliez pas de documenter précisément l'emplacement et l'utilisation de chaque sortie dans le dossier technique de l'installation.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/RCU-24R20Z.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}

// Fonction pour charger le tutoriel de câblage du module Variateur
function loadVariateurWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module Variateur</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/DIM.png" alt="Schéma de câblage Variateur" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module Variateur TIS permet le contrôle d'intensité des éclairages compatibles. Il prend en charge différents types de charges et offre un contrôle précis de la gradation.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle du module Variateur.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Caractéristiques techniques</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Spécifications</h5>
                            <ul>
                                <li>Alimentation: 12V DC via TIS Bus</li>
                                <li>Consommation: 40mA (repos), 80mA (tous canaux actifs)</li>
                                <li>Nombre de canaux: 2 ou 4 selon modèle</li>
                                <li>Puissance par canal: 300W max (charge résistive)</li>
                                <li>Tension de sortie: 230V AC</li>
                                <li>Montage sur rail DIN (4 ou 6 modules selon modèle)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Protection thermique intégrée</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Types de charges supportées</h5>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Type de charge</th>
                                        <th>Compatibilité</th>
                                        <th>Puissance max</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Incandescente / Halogène 230V</td>
                                        <td>Excellente</td>
                                        <td>300W</td>
                                    </tr>
                                    <tr>
                                        <td>Halogène TBT avec transfo électronique</td>
                                        <td>Bonne</td>
                                        <td>250W</td>
                                    </tr>
                                    <tr>
                                        <td>Halogène TBT avec transfo ferromagnétique</td>
                                        <td>Moyenne</td>
                                        <td>200W</td>
                                    </tr>
                                    <tr>
                                        <td>LED dimmable (compatible)</td>
                                        <td>Bonne*</td>
                                        <td>150W</td>
                                    </tr>
                                    <tr>
                                        <td>Fluorescent compact dimmable</td>
                                        <td>Limitée*</td>
                                        <td>100W</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="small">* Vérifiez la compatibilité avec la technologie de gradation du module</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Procédure de câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Étapes de câblage</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexion au TIS Bus</h5>
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module (généralement en haut)</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez que les fils sont bien serrés dans les borniers</li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion des sorties</h5>
                                    <ol>
                                        <li>Chaque sortie possède 2 bornes:
                                            <ul>
                                                <li>L: Phase d'entrée</li>
                                                <li>↓: Phase modulée vers la charge</li>
                                            </ul>
                                        </li>
                                        <li>Pour un éclairage dimmable:
                                            <ul>
                                                <li>Connectez la phase d'alimentation à la borne L</li>
                                                <li>Connectez la borne ↓ à la charge (lampe)</li>
                                                <li>Connectez le neutre directement à la charge</li>
                                            </ul>
                                        </li>
                                        <li>Respectez la charge minimale par canal (généralement 20W)</li>
                                        <li>Pour les charges inférieures, utilisez un module d'interface adapté</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> Les modules variateurs peuvent chauffer en fonctionnement, prévoyez un espace suffisant autour du module et assurez une ventilation adéquate du tableau électrique.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration matérielle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des commutateurs</h5>
                                    <ol>
                                        <li>Commutateurs d'adresse (1-6):
                                            <ul>
                                                <li>Définissent l'adresse du module sur le TIS Bus</li>
                                                <li>Configuration binaire (ON=1, OFF=0)</li>
                                            </ul>
                                        </li>
                                        <li>Commutateur de terminaison (7):
                                            <ul>
                                                <li>ON: activée (si fin de ligne)</li>
                                            </ul>
                                        </li>
                                        <li>Commutateurs de sélection du mode de gradation (sur le côté ou en façade):
                                            <ul>
                                                <li>Position LE/TR: Leading Edge (adapté aux charges résistives)</li>
                                                <li>Position TE/RC: Trailing Edge (adapté aux LED et transfo électroniques)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Potentiomètres de réglage (si présents)</h5>
                                    <ul>
                                        <li><strong>MIN</strong>: Niveau minimum de gradation (ajustez pour éviter les scintillements)</li>
                                        <li><strong>MAX</strong>: Niveau maximum de gradation</li>
                                        <li><strong>FADE</strong>: Vitesse de variation (transition douce)</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">LED d'état</h5>
                                    <ul>
                                        <li><strong>LED POWER</strong>: Indique l'alimentation du module</li>
                                        <li><strong>LED BUS</strong>: Clignote lors des communications</li>
                                        <li><strong>LED ERROR</strong>: Indique une erreur (surcharge, surchauffe)</li>
                                        <li><strong>LED par canal</strong>: Indique le niveau d'intensité (luminosité variable)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configurations spécifiques par type de charge</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Éclairage incandescent / halogène 230V</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur LE/TR (Leading Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à 5-10% pour un démarrage fluide</li>
                                        <li>Laissez le potentiomètre MAX à 100%</li>
                                        <li>Charge minimale: 20W par canal</li>
                                        <li>Charge maximale: 300W par canal</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>LED dimmables</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur TE/RC (Trailing Edge)</li>
                                        <li>Ajustez soigneusement le potentiomètre MIN (généralement 15-20%)</li>
                                        <li>Testez pour éliminer tout scintillement au niveau bas</li>
                                        <li>Charge minimale: vérifiez les spécifications des LED</li>
                                        <li>Charge maximale: 150W par canal</li>
                                        <li>Utilisez uniquement des LED certifiées dimmables</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <h5>Transformateurs électroniques</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur TE/RC (Trailing Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à environ 10-15%</li>
                                        <li>Charge minimale: selon spécifications du transformateur</li>
                                        <li>Charge maximale: 250W par canal</li>
                                        <li>Vérifiez la compatibilité du transformateur avec la gradation</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Transformateurs ferromagnétiques</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur LE/TR (Leading Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à environ 15-20%</li>
                                        <li>Charge minimale: 40W par canal</li>
                                        <li>Charge maximale: 200W par canal</li>
                                        <li>Ces transformateurs peuvent générer du bruit à certains niveaux</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-4">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Pour les installations complexes ou les charges mixtes, utilisez un canal séparé pour chaque type de charge et configurez chacun de façon optimale.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Problèmes courants et solutions</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Problème</th>
                                        <th>Causes possibles</th>
                                        <th>Solutions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Scintillement des LED</td>
                                        <td>
                                            <ul>
                                                <li>Niveau minimum trop bas</li>
                                                <li>Mode de gradation incorrect</li>
                                                <li>LED non compatible</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Augmentez le niveau minimum (potentiomètre MIN)</li>
                                                <li>Passez en mode TE/RC (Trailing Edge)</li>
                                                <li>Vérifiez la compatibilité des LED</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pas de gradation, juste ON/OFF</td>
                                        <td>
                                            <ul>
                                                <li>Charge non compatible</li>
                                                <li>Plage de gradation trop étroite</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez que la charge est dimmable</li>
                                                <li>Ajustez les potentiomètres MIN et MAX</li>
                                                <li>Vérifiez la charge minimale (>20W généralement)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Surchauffe du module</td>
                                        <td>
                                            <ul>
                                                <li>Surcharge</li>
                                                <li>Ventilation insuffisante</li>
                                                <li>Température ambiante élevée</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Réduisez la charge sur les canaux</li>
                                                <li>Améliorez la ventilation du tableau</li>
                                                <li>Espacez les modules générant de la chaleur</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module Variateur TIS !
            </div>
            <p>Pour un fonctionnement optimal, n'oubliez pas de finaliser la configuration logicielle dans DEVsearch après le câblage.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/DIM-6CH-2A.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}

// Fonction pour charger le tutoriel de câblage du module IP Port
function loadIPPortWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module IP Port</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/IP-PORT.png" alt="Schéma de câblage IP Port" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module IP Port est la passerelle entre le réseau TIS Bus et votre réseau IP local. Il permet le contrôle du système via réseau Ethernet, l'application mobile et la tablette.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle du module IP Port.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Caractéristiques techniques</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Spécifications</h5>
                            <ul>
                                <li>Alimentation: 12V DC via TIS Bus ou connecteur dédié</li>
                                <li>Consommation: 120mA (typique), 200mA (max)</li>
                                <li>Interface réseau: Ethernet 10/100 Mbps (RJ45)</li>
                                <li>Protocoles supportés: TCP/IP, UDP, HTTP, HTTPS</li>
                                <li>Sécurité: TLS 1.2, authentification par clé</li>
                                <li>Montage sur rail DIN (3 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Mémoire tampon intégrée</li>
                                <li>Processeur: 32-bit ARM Cortex M4</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Fonctionnalités principales</h5>
                            <ul>
                                <li>Passerelle TIS Bus vers réseau IP</li>
                                <li>Serveur web intégré pour configuration</li>
                                <li>Support API pour intégrations tierces</li>
                                <li>Mise à jour firmware à distance</li>
                                <li>Connexion à TIS Cloud pour accès distant</li>
                                <li>Journalisation des événements système</li>
                                <li>Diagnostic du réseau TIS Bus</li>
                                <li>Plusieurs modes de fonctionnement (maître/esclave)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Procédure de câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Étapes de câblage</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexion au TIS Bus</h5>
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Pour les grandes installations, utilisez l'entrée d'alimentation dédiée:
                                            <ul>
                                                <li>Connectez un bloc d'alimentation 12V DC (500mA min.)</li>
                                                <li>Respectez la polarité (+/-)</li>
                                            </ul>
                                        </li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion au réseau Ethernet</h5>
                                    <ol>
                                        <li>Localisez le port Ethernet RJ45 sur le module</li>
                                        <li>Connectez un câble Ethernet Cat5e ou supérieur</li>
                                        <li>Reliez l'autre extrémité à un switch/routeur de votre réseau local</li>
                                        <li>Pour une connexion PoE (si supportée):
                                            <ul>
                                                <li>Utilisez un switch PoE ou injecteur compatible</li>
                                                <li>Configurez le commutateur pour désactiver l'alimentation TIS Bus</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez les voyants d'activité sur le port Ethernet:
                                            <ul>
                                                <li>LED verte fixe: connexion établie</li>
                                                <li>LED jaune clignotante: trafic de données</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Positionnez le module IP Port le plus près possible du routeur/switch réseau pour minimiser la longueur du câble Ethernet et éviter les interférences.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration matérielle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des commutateurs DIP</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Commutateur</th>
                                                <th>Fonction</th>
                                                <th>Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1-6</td>
                                                <td>Adresse TIS Bus</td>
                                                <td>Configuration binaire (ON=1, OFF=0)</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Résistance terminaison</td>
                                                <td>ON: activée (si fin de ligne)</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Mode de réinitialisation</td>
                                                <td>ON: permet reset usine avec bouton RESET</td>
                                            </tr>
                                            <tr>
                                                <td>9 (si présent)</td>
                                                <td>Mode DHCP</td>
                                                <td>ON: DHCP activé, OFF: IP statique</td>
                                            </tr>
                                            <tr>
                                                <td>10 (si présent)</td>
                                                <td>Mode maître/esclave</td>
                                                <td>ON: maître, OFF: esclave</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h5>Indicateurs LED</h5>
                                    <ul>
                                        <li><strong>POWER</strong>: Alimentation correcte</li>
                                        <li><strong>BUS</strong>: Activité sur le TIS Bus</li>
                                        <li><strong>LAN</strong>: Connexion réseau établie</li>
                                        <li><strong>ACT</strong>: Activité réseau</li>
                                        <li><strong>STATUS</strong>: État du module
                                            <ul>
                                                <li>Fixe: fonctionnement normal</li>
                                                <li>Clignotement lent: initialisation</li>
                                                <li>Clignotement rapide: erreur</li>
                                            </ul>
                                        </li>
                                        <li><strong>CLOUD</strong>: Connexion au service TIS Cloud (si équipé)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5>Boutons de contrôle</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Bouton</th>
                                                <th>Action brève</th>
                                                <th>Action maintenue (5+ sec)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>RESET</td>
                                                <td>Redémarrage du module</td>
                                                <td>Réinitialisation aux paramètres d'usine (si DIP8=ON)</td>
                                            </tr>
                                            <tr>
                                                <td>LAN RESET (si présent)</td>
                                                <td>Réinitialisation des paramètres réseau</td>
                                                <td>Retour à DHCP</td>
                                            </tr>
                                            <tr>
                                                <td>PAIR (si présent)</td>
                                                <td>Mode appairage pour TIS Cloud</td>
                                                <td>Suppression des appairages existants</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration réseau initiale</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration DHCP (recommandée pour débuter)</h5>
                                    <ol>
                                        <li>Positionnez le commutateur DHCP sur ON (si présent)</li>
                                        <li>Redémarrez le module avec le bouton RESET</li>
                                        <li>Le module obtient automatiquement une adresse IP</li>
                                        <li>Utilisez l'application TIS DEVsearch pour détecter le module:
                                            <ul>
                                                <li>Lancez DEVsearch sur un ordinateur du même réseau</li>
                                                <li>Allez dans "Découverte réseau"</li>
                                                <li>Le module apparaît avec son adresse IP</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration IP statique</h5>
                                    <ol>
                                        <li>Avec DHCP d'abord:
                                            <ul>
                                                <li>Connectez-vous à l'interface web du module</li>
                                                <li>Configurez une IP statique dans les paramètres</li>
                                                <li>Appliquez et redémarrez</li>
                                            </ul>
                                        </li>
                                        <li>Sans DHCP (configuration directe):
                                            <ul>
                                                <li>Positionnez le commutateur DHCP sur OFF (si présent)</li>
                                                <li>Connectez un câble réseau directement entre l'ordinateur et le module</li>
                                                <li>Configurez l'ordinateur sur IP 192.168.1.100</li>
                                                <li>Accédez au module sur 192.168.1.250 (IP par défaut)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Pour le déploiement final, il est fortement recommandé d'attribuer une adresse IP statique au module, soit par réservation DHCP dans le routeur, soit par configuration directe dans le module.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Considérations de sécurité</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Sécurité locale</h5>
                                    <ul>
                                        <li>Changez le mot de passe par défaut</li>
                                        <li>Créez des comptes utilisateurs distincts avec privilèges adaptés</li>
                                        <li>Utilisez HTTPS pour l'interface d'administration</li>
                                        <li>Limitez l'accès au module depuis le réseau:
                                            <ul>
                                                <li>Utilisez un VLAN dédié pour la domotique (recommandé)</li>
                                                <li>Configurez un filtrage IP dans le module</li>
                                                <li>Configurez le pare-feu du routeur</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Accès à distance</h5>
                                    <ul>
                                        <li>Privilégiez la connexion via TIS Cloud (sécurisée):
                                            <ul>
                                                <li>Tunnel chiffré end-to-end</li>
                                                <li>Authentification forte</li>
                                                <li>Pas d'ouverture de port sur le routeur</li>
                                            </ul>
                                        </li>
                                        <li>Si vous configurez un accès direct:
                                            <ul>
                                                <li>Utilisez un VPN plutôt qu'une redirection de port</li>
                                                <li>Activez l'authentification à deux facteurs</li>
                                                <li>Limitez le nombre de tentatives de connexion</li>
                                                <li>Configurez la journalisation des connexions</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module IP Port !
            </div>
            <p>Ce module est la clé de votre système domotique connecté. Une configuration minutieuse garantira un fonctionnement fiable et sécurisé.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/IP-COM-PORT.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}

// Fonction pour charger le tutoriel de câblage du module 4 Zones
function load4ZonesWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module 4 Zones</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/4zones.png" alt="Schéma de câblage 4 Zones" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module 4 Zones est un contrôleur multifonction permettant de gérer jusqu'à 4 zones distinctes d'une installation domotique. Il offre des entrées et sorties multiples pour une gestion complète par zone.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle de ce module polyvalent.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Caractéristiques techniques</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Spécifications</h5>
                            <ul>
                                <li>Alimentation: 12V DC via TIS Bus</li>
                                <li>Consommation: 50mA (repos), 180mA (toutes zones actives)</li>
                                <li>Nombre de zones: 4 indépendantes</li>
                                <li>Par zone:
                                    <ul>
                                        <li>2 sorties relais (contact sec 10A)</li>
                                        <li>1 sortie variable 0-10V</li>
                                        <li>4 entrées numériques</li>
                                        <li>1 entrée analogique</li>
                                    </ul>
                                </li>
                                <li>Montage sur rail DIN (6 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Protection contre les courts-circuits</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Applications principales</h5>
                            <ul>
                                <li><strong>Contrôle d'éclairage multi-zones</strong>:
                                    <ul>
                                        <li>Commutation ON/OFF via relais</li>
                                        <li>Variation avec sortie 0-10V</li>
                                        <li>Contrôle via boutons et capteurs</li>
                                    </ul>
                                </li>
                                <li><strong>Gestion climatique</strong>:
                                    <ul>
                                        <li>Chauffage/climatisation par zone</li>
                                        <li>Contrôle de ventilation</li>
                                        <li>Gestion de volets/stores</li>
                                    </ul>
                                </li>
                                <li><strong>Automatisation spécialisée</strong>:
                                    <ul>
                                        <li>Irrigation multizone</li>
                                        <li>Contrôle d'accès</li>
                                        <li>Supervision d'équipements techniques</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Procédure de câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Connexion au TIS Bus</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module (généralement en haut)</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez que les fils sont bien serrés dans les borniers</li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Dans les installations étendues, une alimentation auxiliaire peut être nécessaire. Utilisez le bornier d'alimentation dédié (généralement marqué PWR) avec une alimentation 12V DC régulée (minimum 500mA).
                                    </div>
                                    
                                    <div class="alert alert-info mt-3">
                                        <i class="fas fa-info-circle"></i> <strong>Conseil:</strong> Pour garantir une communication fiable, limitez la longueur totale du TIS Bus à 1000m. Pour les distances supérieures, utilisez des répéteurs ou des extendeurs IP.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Câblage des zones</h4>
                        </div>
                        <div class="card-body">
                            <p>Chaque zone dispose de ses propres connexions regroupées dans un bloc de borniers. Le module est organisé en 4 blocs identiques (Zone 1 à 4).</p>
                            
                            <h5 class="mt-3">Borniers de sortie</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Sorties relais (par zone)</h6>
                                    <ul>
                                        <li><strong>Relais 1</strong>: 3 bornes (C, NO, NC)
                                            <ul>
                                                <li>C: Commun</li>
                                                <li>NO: Normalement Ouvert</li>
                                                <li>NC: Normalement Fermé</li>
                                                <li>Capacité: 10A résistif, 5A inductif</li>
                                            </ul>
                                        </li>
                                        <li><strong>Relais 2</strong>: 3 bornes (C, NO, NC)
                                            <ul>
                                                <li>Mêmes caractéristiques que Relais 1</li>
                                                <li>Peut être configuré en pair avec Relais 1 pour contrôle de moteur</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6>Sortie analogique 0-10V (par zone)</h6>
                                    <ul>
                                        <li><strong>AO</strong>: Sortie 0-10V
                                            <ul>
                                                <li>Pour variateurs, vannes proportionnelles, etc.</li>
                                                <li>Capacité: 20mA max</li>
                                                <li>Précision: ±0.1V</li>
                                            </ul>
                                        </li>
                                        <li><strong>GND</strong>: Référence pour la sortie analogique</li>
                                        <li><strong>+12V</strong>: Alimentation auxiliaire (100mA max par zone)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Borniers d'entrée</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Entrées numériques (par zone)</h6>
                                    <ul>
                                        <li><strong>IN1 à IN4</strong>: Entrées numériques
                                            <ul>
                                                <li>Pour boutons poussoirs, interrupteurs, contacts secs</li>
                                                <li>Fonctionnent avec contacts secs ou signaux 12V</li>
                                                <li>Temps d'acquisition: 20ms</li>
                                                <li>Protection contre les rebonds intégrée</li>
                                            </ul>
                                        </li>
                                        <li><strong>COM</strong>: Commun pour entrées numériques</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6>Entrée analogique (par zone)</h6>
                                    <ul>
                                        <li><strong>AI</strong>: Entrée analogique
                                            <ul>
                                                <li>Pour capteurs, potentiomètres, etc.</li>
                                                <li>Plage d'entrée: 0-10V ou 4-20mA (configurable)</li>
                                                <li>Résolution: 10 bits</li>
                                                <li>Impédance d'entrée: 10kΩ</li>
                                            </ul>
                                        </li>
                                        <li><strong>GND</strong>: Référence pour l'entrée analogique</li>
                                        <li><strong>+12V</strong>: Alimentation pour capteurs (100mA max par zone)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Exemples de câblage par application</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Contrôle d'éclairage zonal</h5>
                                    <ol>
                                        <li><strong>Éclairage ON/OFF</strong>:
                                            <ul>
                                                <li>Relais 1 (C-NO): connexion à la phase d'éclairage</li>
                                                <li>Entrées IN1-IN2: boutons poussoirs connectés entre COM et IN</li>
                                            </ul>
                                        </li>
                                        <li><strong>Variation d'intensité (0-10V)</strong>:
                                            <ul>
                                                <li>Sortie AO: connexion à l'entrée de contrôle du variateur</li>
                                                <li>GND: référence du variateur</li>
                                                <li>Relais 1: alimentation du variateur (optionnel)</li>
                                                <li>Entrées IN3-IN4: boutons pour variation haut/bas</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Gestion climatique par zone</h5>
                                    <ol>
                                        <li><strong>Chauffage/Climatisation</strong>:
                                            <ul>
                                                <li>Relais 1: activer chauffage</li>
                                                <li>Relais 2: activer climatisation</li>
                                                <li>Entrée AI: sonde de température (configurer en 4-20mA ou 0-10V)</li>
                                                <li>Entrées IN1-IN2: ajustement manuel température</li>
                                            </ul>
                                        </li>
                                        <li><strong>Contrôle de vanne proportionnelle</strong>:
                                            <ul>
                                                <li>Sortie AO: commande de la vanne proportionnelle</li>
                                                <li>+12V/GND: alimentation de la vanne (si compatible)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <h5>Contrôle de volets roulants</h5>
                                    <ol>
                                        <li>Relais 1 (montée): C connecté à la phase, NO au fil de montée du moteur</li>
                                        <li>Relais 2 (descente): C connecté à la phase, NO au fil de descente du moteur</li>
                                        <li>Entrée IN1: bouton montée connecté entre COM et IN1</li>
                                        <li>Entrée IN2: bouton descente connecté entre COM et IN2</li>
                                        <li>Entrée AI (optionnelle): capteur de position</li>
                                        <li>Configurez l'interverrouillage des relais dans DEVsearch</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Système d'irrigation</h5>
                                    <ol>
                                        <li>Relais 1: électrovanne principale</li>
                                        <li>Relais 2: pompe</li>
                                        <li>Sortie AO: contrôle de pression (si applicable)</li>
                                        <li>Entrée AI: capteur d'humidité du sol</li>
                                        <li>Entrée IN1: démarrage manuel</li>
                                        <li>Entrée IN2: arrêt forcé</li>
                                        <li>Entrées IN3-IN4: sélection de programme</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration matérielle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des commutateurs DIP</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Commutateur</th>
                                                <th>Fonction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1-6</td>
                                                <td>Adresse du module sur le TIS Bus (binaire)</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Résistance de terminaison (ON si en fin de ligne)</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Mode de configuration (OFF: normal, ON: programmation)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <h5 class="mt-4">Commutateurs de configuration des zones (si présents)</h5>
                                    <p>Certains modèles possèdent des commutateurs supplémentaires:</p>
                                    <ul>
                                        <li>Sélection du type d'entrée analogique (0-10V/4-20mA)</li>
                                        <li>Configuration des relais (indépendants/appariés)</li>
                                        <li>Mode d'entrée numérique (contact sec/niveau)</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Voyants LED</h5>
                                    <ul>
                                        <li><strong>PWR</strong>: Alimentation du module</li>
                                        <li><strong>BUS</strong>: Communication TIS Bus active</li>
                                        <li><strong>ERR</strong>: Erreur système</li>
                                        <li><strong>Z1-Z4</strong>: État des zones (une LED par zone)
                                            <ul>
                                                <li>Éteinte: zone inactive</li>
                                                <li>Allumée: zone active</li>
                                                <li>Clignotante: zone en erreur</li>
                                            </ul>
                                        </li>
                                        <li><strong>LEDs relais</strong>: État de chaque relais</li>
                                        <li><strong>LEDs entrées</strong>: État des entrées numériques</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">Boutons de contrôle</h5>
                                    <ul>
                                        <li><strong>RESET</strong>: Redémarrage du module</li>
                                        <li><strong>TEST</strong>: Mode test des sorties</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Problèmes courants et solutions</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Problème</th>
                                        <th>Causes possibles</th>
                                        <th>Solutions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Module non détecté sur le TIS Bus</td>
                                        <td>
                                            <ul>
                                                <li>Adressage incorrect</li>
                                                <li>Câblage TIS Bus défectueux</li>
                                                <li>Alimentation insuffisante</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez les commutateurs d'adresse</li>
                                                <li>Contrôlez la continuité et la polarité du TIS Bus</li>
                                                <li>Mesurez la tension d'alimentation (12V±5%)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Une zone ne répond pas</td>
                                        <td>
                                            <ul>
                                                <li>Configuration logicielle incorrecte</li>
                                                <li>Surcharge sur les sorties</li>
                                                <li>Protection thermique active</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez la configuration dans DEVsearch</li>
                                                <li>Contrôlez les charges connectées</li>
                                                <li>Laissez refroidir le module si surchauffe</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Entrées non réactives</td>
                                        <td>
                                            <ul>
                                                <li>Mauvaise connexion</li>
                                                <li>Tension d'entrée incorrecte</li>
                                                <li>Configuration d'entrée erronée</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez les connexions aux borniers</li>
                                                <li>Testez les entrées avec le mode diagnostic</li>
                                                <li>Vérifiez la configuration du type d'entrée</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module 4 Zones !
            </div>
            <p>Ce module polyvalent est idéal pour contrôler des systèmes complexes de manière structurée et modulaire.</p>
            <a href="https://www.tiscontrol.com/Uploads/datasheet/En/TIS-4DL-IN.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}

// Gestion des schémas de câblage
function openWiringDiagram(diagramId) {
    // Pour simplifier, nous n'allons pas implémenter le détail de cette fonction
    alert(`Schéma de câblage ${diagramId} ouvert!`);
}
