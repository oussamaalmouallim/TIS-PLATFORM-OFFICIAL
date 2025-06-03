function loadScenariosGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Création de scénarios</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Les scénarios vous permettent d'automatiser votre installation et de créer des ambiances personnalisées. Ils vous feront gagner du temps et amélioreront votre confort au quotidien.
            </div>
            
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="images/NEW-MOOD.jpg" alt="Création de scénario" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Étapes de création d'un scénario</h4>
                    <ol>
                        <li>Accédez à l'onglet "Scénarios" dans votre projet</li>
                        <li>Appuyez sur le bouton "+" ou "Nouveau scénario"</li>
                        <li>Renseignez les informations du scénario :
                            <ul>
                                <li>Nom (ex: Soirée cinéma, Départ maison)</li>
                                <li>Description (optionnel)</li>
                                <li>Catégorie (ex: Vie quotidienne, Sécurité)</li>
                                <li>Image ou icône (optionnel)</li>
                            </ul>
                        </li>
                        <li>Définissez les conditions de déclenchement</li>
                        <li>Définissez les actions à exécuter</li>
                        <li>Validez pour créer le scénario</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Types de déclencheurs</h4>
                </div>
                <div class="card-body">
                    <p>Un scénario peut être déclenché de différentes façons :</p>
                    
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-hand-pointer text-primary"></i> Déclenchement manuel</h5>
                            <p>Activation par un bouton dans l'application ou sur une tablette.</p>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-clock text-primary"></i> Déclenchement horaire</h5>
                            <p>Exécution à une heure fixe ou selon le lever/coucher du soleil.</p>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-motion-detector text-primary"></i> Déclenchement par événement</h5>
                            <p>Réaction à un capteur (présence, ouverture, luminosité) ou un état du système.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Définir les actions</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Lors de la création d'un scénario, vous pouvez définir une ou plusieurs actions à exécuter lorsque le scénario est déclenché.</p>
                    
                    <h4>Actions possibles</h4>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <h5>Éclairage</h5>
                            <ul>
                                <li>Allumer/éteindre</li>
                                <li>Varier l'intensité</li>
                                <li>Changer la couleur (RGB)</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5>Volets/Stores</h5>
                            <ul>
                                <li>Monter/descendre</li>
                                <li>Position intermédiaire</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5>Chauffage/Clim</h5>
                            <ul>
                                <li>Ajuster la température</li>
                                <li>Changer de mode</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <h5>Sécurité</h5>
                            <ul>
                                <li>Activer/désactiver l'alarme</li>
                                <li>Enclencher les sirènes</li>
                                <li>Fermer les portes</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5>Multimédia</h5>
                            <ul>
                                <li>Allumer/éteindre un équipement</li>
                                <li>Lancer une playlist</li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5>Divers</h5>
                            <ul>
                                <li>Envoyer une notification</li>
                                <li>Exécuter un script</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="alert alert-info">
                        <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Pour une personnalisation maximale, vous pouvez combiner plusieurs actions et utiliser des délais.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Exemples de scénarios courants</h3>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Départ maison</h5>
                            <ul>
                                <li>Éteint toutes les lumières</li>
                                <li>Ferme les volets</li>
                                <li>Active l'alarme</li>
                                <li>Réduit le chauffage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Retour maison</h5>
                            <ul>
                                <li>Ouvre les volets</li>
                                <li>Allume les lumières principales</li>
                                <li>Désactive l'alarme</li>
                                <li>Ajuste la température</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Soirée cinéma</h5>
                            <ul>
                                <li>Tamise les lumières du salon</li>
                                <li>Ferme les volets</li>
                                <li>Allume la TV et l'ampli</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Réveil matinal</h5>
                            <ul>
                                <li>Ouvre progressivement les volets</li>
                                <li>Allume les lumières en intensité douce</li>
                                <li>Augmente la température</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Nuit</h5>
                            <ul>
                                <li>Éteint toutes les lumières sauf la veilleuse</li>
                                <li>Baisse les volets</li>
                                <li>Réduit le chauffage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Vacances</h5>
                            <ul>
                                <li>Simule une présence</li>
                                <li>Ferme les volets</li>
                                <li>Baisse le chauffage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Automatisation avancée</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Pour aller plus loin, vous pouvez créer des scénarios complexes avec plusieurs conditions et actions combinées.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Conditions multiples</h4>
                        </div>
                        <div class="card-body">
                            <p>Exemple : Allumer les lumières du couloir à 30% si :</p>
                            <ul>
                                <li>Détection de mouvement</li>
                                <li>ET luminosité faible</li>
                                <li>ET entre 22h et 6h</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Délais et temporisation</h4>
                        </div>
                        <div class="card-body">
                            <p>Exemple : Éteindre la lumière de la salle de bain 5 minutes après la détection de mouvement.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="alert alert-info">
                        <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Créez des scénarios progressifs pour les réveils et les couchers. Par exemple : ouvrir les volets à 25% puis 50% puis 100% avec un délai de 10 minutes entre chaque étape.
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
                            <p>Création des scénarios par chambre</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('scenario')"><i class="fas fa-play-circle"></i> Voir vidéo</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Scénarios types</h4>
                            <p>Création des scénarios pour toute la maison</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('scenario2')"><i class="fas fa-play-circle"></i> Voir vidéo</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide d'automatisation</h4>
                            <p>Bonnes pratiques et exemples</p>
                            <a href="#" class="btn btn-outline-primary">Consulter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous savez maintenant comment créer des scénarios pour automatiser votre installation !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

