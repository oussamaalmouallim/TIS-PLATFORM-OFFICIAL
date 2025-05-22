function loadProjectCreationGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Création d'un nouveau projet</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Un projet bien structuré est la base d'une installation réussie. Prenez le temps de planifier votre projet avant de commencer.
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/ADD-PRO-1.png" alt="Création de projet" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Étapes de création</h4>
                    <ol>
                        <li>Ouvrez l'application et connectez-vous à votre compte</li>
                        <li>Sur l'écran d'accueil, appuyez sur "Nouveau projet" ou sur le bouton "+" dans la liste des projets</li>
                        <li>Renseignez les informations de base du projet :
                            <ul>
                                <li>Nom du projet</li>
                                <li>Type d'installation (résidentielle, commerciale, etc.)</li>
                                <li>Adresse (optionnel)</li>
                                <li>Notes (optionnel)</li>
                            </ul>
                        </li>
                        <li>Appuyez sur "Créer" pour initialiser le projet</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Configuration initiale</h4>
                </div>
                <div class="card-body">
                    <p>Après la création du projet, vous serez guidé à travers les étapes de configuration initiale :</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <h5>1. Structure du bâtiment</h5>
                            <ul>
                                <li>Définissez le nombre d'étages</li>
                                <li>Créez les zones principales</li>
                                <li>Esquissez un plan simplifié (optionnel)</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>2. Modules principaux</h5>
                            <ul>
                                <li>Identifiez le contrôleur principal</li>
                                <li>Configurez la connexion réseau</li>
                                <li>Ajoutez les modules d'alimentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Organisation et structure du projet</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Une bonne organisation de votre projet facilite sa gestion et son évolution future.</p>
                    
                    <h4>Bonnes pratiques</h4>
                    <ul>
                        <li><strong>Nommage cohérent</strong> : Utilisez des noms clairs et descriptifs pour tous les éléments</li>
                        <li><strong>Groupement logique</strong> : Regroupez les équipements par fonction ou par zone</li>
                        <li><strong>Documentation</strong> : Utilisez les champs de notes pour documenter les choix techniques</li>
                        <li><strong>Versions</strong> : Créez des points de sauvegarde réguliers avec des noms explicites</li>
                    </ul>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Structure recommandée</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Étages
                                    <ul>
                                        <li>Pièces
                                            <ul>
                                                <li>Équipements</li>
                                                <li>Circuits</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Systèmes
                                    <ul>
                                        <li>Éclairage</li>
                                        <li>Chauffage/Climatisation</li>
                                        <li>Sécurité</li>
                                        <li>Multimédia</li>
                                    </ul>
                                </li>
                                <li>Utilisateurs
                                    <ul>
                                        <li>Profils</li>
                                        <li>Droits d'accès</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h4>Conseils pour grands projets</h4>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Divisez l'installation en sous-systèmes gérables</li>
                                <li>Créez une hiérarchie claire des contrôleurs</li>
                                <li>Prévoyez une capacité d'extension (20% de réserve)</li>
                                <li>Documentez l'ensemble des adresses IP et identifiants</li>
                                <li>Établissez un plan de maintenance préventive</li>
                                <li>Formez plusieurs administrateurs système</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Importation et exportation</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/IMPO-EXPO.png" alt="Importation et exportation" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Importation de modèles</h4>
                    <p>Pour accélérer la création de votre projet, vous pouvez importer des modèles prédéfinis :</p>
                    <ol>
                        <li>Dans le menu principal du projet, sélectionnez "Importer"</li>
                        <li>Choisissez parmi les modèles disponibles ou importez depuis un fichier</li>
                        <li>Sélectionnez les éléments à importer (structure, équipements, scénarios)</li>
                        <li>Validez et ajustez selon vos besoins</li>
                    </ol>
                    
                    <h4>Création et partage de modèles</h4>
                    <p>Vous pouvez également créer vos propres modèles réutilisables :</p>
                    <ol>
                        <li>Configurez une partie de votre projet (ex: une pièce type)</li>
                        <li>Sélectionnez les éléments et choisissez "Enregistrer comme modèle"</li>
                        <li>Nommez et décrivez votre modèle</li>
                        <li>Choisissez s'il doit être privé ou partagé avec la communauté</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Ressources complémentaires</h3>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-film text-primary"></i> Vidéo tutoriel</h4>
                            <p>Création de projet pas à pas</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('PROJECT')"><i class="fas fa-play-circle"></i> Regarder</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Modèles gratuits</h4>
                            <p>Bibliothèque de projets types</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('relais')"></i> Télécharger</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide détaillé</h4>
                            <p>Manuel de référence complet</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('relais')"></i> Voir vidéo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous êtes maintenant prêt à créer votre premier projet !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

