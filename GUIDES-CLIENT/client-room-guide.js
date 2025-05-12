function loadRoomAdditionGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Ajout de pièces et d'emplacements</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Une bonne organisation des pièces et des emplacements vous permettra de naviguer facilement dans votre installation et de créer des automatisations cohérentes.
            </div>
            
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="images/ROOM-MANAGER.jpg" alt="Ajout de pièce" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Ajouter une nouvelle pièce</h4>
                    <ol>
                        <li>Dans votre projet, accédez à l'onglet "Structure" ou "Pièces"</li>
                        <li>Appuyez sur le bouton "+" ou "Ajouter une pièce"</li>
                        <li>Renseignez les informations de la pièce :
                            <ul>
                                <li>Nom (ex: Salon, Cuisine, Chambre principale)</li>
                                <li>Type de pièce (sélectionnez dans la liste)</li>
                                <li>Étage (si applicable)</li>
                                <li>Zone (ex: Aile Nord, Espace jour)</li>
                            </ul>
                        </li>
                        <li>Ajoutez une image ou une icône représentative (optionnel)</li>
                        <li>Validez pour créer la pièce</li>
                    </ol>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Types de pièces prédéfinis</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Salon</li>
                                        <li>Cuisine</li>
                                        <li>Salle à manger</li>
                                        <li>Bureau</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Chambre</li>
                                        <li>Salle de bain</li>
                                        <li>WC</li>
                                        <li>Dressing</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Entrée</li>
                                        <li>Couloir</li>
                                        <li>Escalier</li>
                                        <li>Terrasse</li>
                                    </ul>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <ul>
                                        <li>Garage</li>
                                        <li>Cave</li>
                                        <li>Buanderie</li>
                                        <li>Personnalisé</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration des emplacements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/ROOM-MANAGER2.jpg" alt="Configuration des emplacements" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Qu'est-ce qu'un emplacement ?</h4>
                    <p>Les emplacements sont des points spécifiques au sein d'une pièce où des équipements sont installés ou des fonctions sont disponibles. Ils permettent de préciser la position exacte des éléments dans votre installation.</p>
                    
                    <h4>Ajouter un emplacement</h4>
                    <ol>
                        <li>Sélectionnez une pièce dans votre projet</li>
                        <li>Appuyez sur "Ajouter un emplacement"</li>
                        <li>Définissez les propriétés :
                            <ul>
                                <li>Nom (ex: Mur Nord, Entrée principale)</li>
                                <li>Type d'emplacement</li>
                                <li>Position sur le plan (si disponible)</li>
                            </ul>
                        </li>
                        <li>Validez pour créer l'emplacement</li>
                    </ol>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Exemples d'emplacements typiques</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <h5>Salon</h5>
                                    <ul>
                                        <li>Canapé principal</li>
                                        <li>Zone TV</li>
                                        <li>Fenêtre</li>
                                        <li>Entrée</li>
                                        <li>Table basse</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5>Cuisine</h5>
                                    <ul>
                                        <li>Plan de travail</li>
                                        <li>Îlot central</li>
                                        <li>Zone cuisson</li>
                                        <li>Réfrigérateur</li>
                                        <li>Table</li>
                                    </ul>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <h5>Chambre</h5>
                                    <ul>
                                        <li>Lit</li>
                                        <li>Bureau</li>
                                        <li>Dressing</li>
                                        <li>Fenêtre</li>
                                        <li>Porte</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Utilisation du plan interactif</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Le plan interactif vous permet de visualiser et d'organiser vos pièces et emplacements de manière graphique.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Fonctionnalités du plan</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Création du plan</h5>
                                    <ol>
                                        <li>Accédez à l'onglet "Plan" dans votre projet</li>
                                        <li>Choisissez une option :
                                            <ul>
                                                <li>Dessiner manuellement</li>
                                                <li>Importer une image de plan existant</li>
                                                <li>Utiliser un modèle de base</li>
                                            </ul>
                                        </li>
                                        <li>Ajustez les dimensions et l'échelle</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Placement des éléments</h5>
                                    <ol>
                                        <li>Sélectionnez une pièce dans la liste</li>
                                        <li>Dessinez sa forme sur le plan</li>
                                        <li>Ajoutez des emplacements en les faisant glisser depuis la barre d'outils</li>
                                        <li>Positionnez les équipements à l'emplacement exact</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Astuce :</strong> Pour les grandes installations, créez un plan par étage et utilisez les points de connexion pour les lier entre eux.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Organisation avancée</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Groupes et zones</h4>
                    <p>Au-delà des pièces individuelles, vous pouvez créer des groupes logiques :</p>
                    <ul>
                        <li><strong>Zones</strong> : Regroupement spatial (Étage, Aile, Extérieur)</li>
                        <li><strong>Groupes fonctionnels</strong> : Ensemble d'équipements ayant une fonction commune</li>
                    </ul>
                    
                    <h5>Créer une zone</h5>
                    <ol>
                        <li>Dans "Structure", sélectionnez "Gérer les zones"</li>
                        <li>Créez une nouvelle zone en lui donnant un nom</li>
                        <li>Assignez les pièces concernées à cette zone</li>
                    </ol>
                </div>
                <div class="col-md-6">
                    <h4>Étiquettes et filtres</h4>
                    <p>Les étiquettes permettent de catégoriser les éléments selon vos propres critères :</p>
                    <ul>
                        <li>Créez des étiquettes personnalisées (ex: "Souvent utilisé", "À rénover")</li>
                        <li>Assignez-les aux pièces et emplacements</li>
                        <li>Utilisez les filtres pour afficher uniquement certaines étiquettes</li>
                    </ul>
                    
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Les étiquettes sont particulièrement utiles pour les grands projets ou les installations complexes avec de nombreux équipements.
                    </div>
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
                            <p>Organisation optimale des pièces</p>
                            <a href="#" class="btn btn-outline-primary">Regarder</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Modèles de plans</h4>
                            <p>Plans types pour différents logements</p>
                            <a href="#" class="btn btn-outline-primary">Télécharger</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide d'organisation</h4>
                            <p>Bonnes pratiques et exemples</p>
                            <a href="#" class="btn btn-outline-primary">Consulter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous savez maintenant comment organiser efficacement les pièces et emplacements de votre installation !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

