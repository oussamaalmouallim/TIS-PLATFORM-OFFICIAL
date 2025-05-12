function loadDevsearchTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Introduction à DEVsearch</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <div class="text-center">
                        <i class="fas fa-laptop-code fa-5x text-primary mb-3"></i>
                    </div>
                </div>
                <div class="col-md-6">
                    <p>DEVsearch est le logiciel professionnel de programmation pour les systèmes domotiques TIS. Il vous permet de configurer, programmer et maintenir l'ensemble des installations.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités et vous montrera comment utiliser efficacement cet outil puissant.</p>
                </div>
            </div>
            
            <h4>Installation et première configuration</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <h5>Configuration requise</h5>
                    <ul>
                        <li>Windows 10/11 (64 bits)</li>
                        <li>4 Go de RAM minimum (8 Go recommandés)</li>
                        <li>500 Mo d'espace disque disponible</li>
                        <li>Processeur dual-core 2 GHz ou supérieur</li>
                        <li>Résolution d'écran minimale: 1366 x 768</li>
                    </ul>
                    
                    <h5>Installation du logiciel</h5>
                    <ol>
                        <li>Téléchargez la dernière version depuis la section "Téléchargement et mise à jour"</li>
                        <li>Exécutez le fichier .exe en tant qu'administrateur</li>
                        <li>Suivez les instructions d'installation</li>
                        <li>Lancez DEVsearch et entrez votre licence lors du premier démarrage</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Interface utilisateur de DEVsearch</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Zones principales de l'interface</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>1. Barre d'outils principale</h5>
                                    <ul>
                                        <li>Nouveau projet / Ouvrir / Enregistrer</li>
                                        <li>Outils de diagnostic</li>
                                        <li>Paramètres du logiciel</li>
                                        <li>Recherche de périphériques</li>
                                    </ul>
                                    
                                    <h5>2. Explorateur de projet</h5>
                                    <ul>
                                        <li>Vue arborescente de tous les éléments</li>
                                        <li>Organisation par types de périphériques</li>
                                        <li>Organisation par zones/pièces</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>3. Zone de travail principale</h5>
                                    <ul>
                                        <li>Éditeur de configuration</li>
                                        <li>Programmation logique</li>
                                        <li>Visualisation des états</li>
                                    </ul>
                                    
                                    <h5>4. Fenêtre de propriétés</h5>
                                    <ul>
                                        <li>Paramètres de l'élément sélectionné</li>
                                        <li>Options avancées</li>
                                        <li>Historique des modifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Découverte et configuration des périphériques</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>La première étape pour tout projet consiste à découvrir les périphériques présents sur le TIS BUS.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Processus de découverte</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez votre ordinateur au système via le module IP Port ou un convertisseur USB</li>
                                <li>Dans DEVsearch, cliquez sur l'icône "Découverte" dans la barre d'outils</li>
                                <li>Sélectionnez le port de communication approprié</li>
                                <li>Lancez la découverte et attendez que tous les périphériques soient détectés</li>
                                <li>Vérifiez la liste des périphériques découverts et assurez-vous que tous sont présents</li>
                            </ol>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-info-circle"></i> Si certains périphériques ne sont pas détectés, vérifiez leur alimentation et leur connexion au TIS BUS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h4>Configuration des adresses</h4>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5>Attribution automatique des adresses</h5>
                            <ol>
                                <li>Sélectionnez les périphériques sans adresse</li>
                                <li>Cliquez sur "Attribuer des adresses" dans le menu contextuel</li>
                                <li>DEVsearch proposera des adresses disponibles</li>
                                <li>Validez pour appliquer la configuration</li>
                            </ol>
                            
                            <h5>Attribution manuelle des adresses</h5>
                            <ol>
                                <li>Sélectionnez un périphérique</li>
                                <li>Dans la fenêtre des propriétés, modifiez le champ "Adresse"</li>
                                <li>Vérifiez qu'il n'y a pas de conflit d'adresse</li>
                                <li>Appliquez les modifications</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Programmation des modules</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <h4>Méthodes de programmation</h4>
                    <p>DEVsearch offre plusieurs approches pour programmer les modules:</p>
                    
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-list-ul text-primary"></i> Programmation par paramètres</h5>
                                    <p>Configuration directe des options disponibles pour chaque module via des formulaires dédiés.</p>
                                    <p class="small text-muted">Idéal pour: configurations simples et standards</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-project-diagram text-primary"></i> Programmation logique</h5>
                                    <p>Création graphique de flux logiques utilisant des blocs fonctionnels reliés entre eux.</p>
                                    <p class="small text-muted">Idéal pour: automatisations complexes et scénarios</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-code text-primary"></i> Programmation avancée</h5>
                                    <p>Utilisation du langage TISscript pour des fonctionnalités personnalisées avancées.</p>
                                    <p class="small text-muted">Idéal pour: intégrations spécifiques et cas particuliers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Exemple : Programmation d'un module relais</h4>
                </div>
                <div class="card-body">
                    <ol>
                        <li>Sélectionnez le module relais dans l'explorateur de projet</li>
                        <li>Dans l'onglet "Configuration", définissez pour chaque canal:
                            <ul>
                                <li>Mode de fonctionnement (standard, temporisé, verrouillé)</li>
                                <li>Temporisation (si applicable)</li>
                                <li>État par défaut au démarrage</li>
                                <li>Comportement en cas de perte de communication</li>
                            </ul>
                        </li>
                        <li>Dans l'onglet "Associations", liez les entrées qui contrôleront ce relais</li>
                        <li>Testez la configuration avec le bouton "Simulation"</li>
                        <li>Téléchargez la configuration dans le module</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Débogage et diagnostic</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Les outils de diagnostic de DEVsearch sont essentiels pour résoudre les problèmes d'installation:</p>
                    
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-traffic-light text-warning"></i> Moniteur de bus</h5>
                                    <p>Outil permettant de voir en temps réel les communications sur le TIS BUS:</p>
                                    <ul>
                                        <li>Affichage des trames de données</li>
                                        <li>Filtrage par type ou par adresse</li>
                                        <li>Enregistrement pour analyse ultérieure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5><i class="fas fa-heartbeat text-danger"></i> État des périphériques</h5>
                                    <p>Visualisation de l'état et des performances du système:</p>
                                    <ul>
                                        <li>État de connexion des périphériques</li>
                                        <li>Mesures de qualité du signal</li>
                                        <li>Statistiques d'erreurs et de collisions</li>
                                        <li>Températures et tensions d'alimentation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Mises à jour et sauvegarde</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Gestion des mises à jour firmware</h4>
                        </div>
                        <div class="card-body">
                            <h5>Mise à jour des modules</h5>
                            <ol>
                                <li>Accédez à l'onglet "Maintenance" > "Mises à jour firmware"</li>
                                <li>DEVsearch vérifie automatiquement les versions disponibles</li>
                                <li>Sélectionnez les modules à mettre à jour</li>
                                <li>Cliquez sur "Mettre à jour" et suivez les instructions</li>
                            </ol>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> Ne débranchez jamais l'alimentation pendant une mise à jour firmware. Cela pourrait endommager définitivement le module.
                            </div>
                            
                            <h5>Sauvegarde de projet</h5>
                            <ol>
                                <li>Accédez à "Fichier" > "Sauvegarder sous"</li>
                                <li>Choisissez un emplacement et un nom significatif</li>
                                <li>Sélectionnez les options de sauvegarde (inclure les logs, captures d'écran, etc.)</li>
                                <li>La sauvegarde crée un fichier .tisdb contenant toutes les informations du projet</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de la programmation avec DEVsearch.
            </div>
            <p>Pour approfondir vos connaissances, consultez la documentation complète ou suivez une formation spécialisée.</p>
            <a href="#" class="btn btn-primary mt-3"><i class="fas fa-download"></i> Télécharger le manuel complet DEVsearch</a>
        </div>
    `;
}