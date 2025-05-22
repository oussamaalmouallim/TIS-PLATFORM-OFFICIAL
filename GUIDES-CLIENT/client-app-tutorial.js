function loadMobileAppTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Introduction à l'application mobile TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/APP-USING.jpeg" alt="Écran d'accueil de l'application" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>L'application mobile TIS vous permet de contrôler l'ensemble de votre installation domotique depuis votre smartphone ou tablette. Disponible sur iOS et Android, elle offre une interface intuitive et personnalisable.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités de l'application et vous montrera comment configurer et utiliser efficacement votre système.</p>
                </div>
            </div>
            
            <h4>Installation et connexion</h4>
            <ol class="mb-4">
                <li>Téléchargez l'application depuis l'App Store ou Google Play Store</li>
                <li>Ouvrez l'application et créez un compte ou connectez-vous</li>
                <li>Suivez l'assistant de configuration pour connecter l'application à votre système</li>
            </ol>
            
            <div class="alert alert-info">
                <i class="fas fa-info-circle"></i> Pour une première configuration, assurez-vous d'être sur le même réseau Wi-Fi que votre système TIS.
            </div>
            
            <h4>Navigation principale</h4>
            <div class="row mb-4">
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-home fa-2x mb-3 text-primary"></i>
                            <h5>Accueil</h5>
                            <p class="small">Vue d'ensemble et contrôles rapides</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-door-open fa-2x mb-3 text-primary"></i>
                            <h5>Pièces</h5>
                            <p class="small">Organisation par pièces et zones</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-magic fa-2x mb-3 text-primary"></i>
                            <h5>Scénarios</h5>
                            <p class="small">Automatisations et scènes</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-cog fa-2x mb-3 text-primary"></i>
                            <h5>Paramètres</h5>
                            <p class="small">Configuration et personnalisation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Contrôle des équipements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/APP-MAIN-SCREEN.jpg" alt="Contrôles dans l'application" class="img-fluid rounded">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Éclairage</h4>
                    <ul>
                        <li>Allumer/éteindre : appuyez sur l'icône de l'ampoule</li>
                        <li>Variation : utilisez le curseur pour ajuster l'intensité</li>
                        <li>Changement de couleur : touchez l'icône palette pour les éclairages RGB</li>
                    </ul>
                    
                    <h4>Volets et stores</h4>
                    <ul>
                        <li>Montée/descente : utilisez les flèches ou le curseur de position</li>
                        <li>Position favorite : appuyez sur l'icône étoile</li>
                    </ul>
                </div>
            </div>
            
            <h4>Thermostat et chauffage</h4>
            <div class="row mb-4">
                <div class="col-md-6">
                    <ul>
                        <li>Réglage de la température : utilisez le thermostat circulaire</li>
                        <li>Programmation : définissez des plages horaires avec températures associées</li>
                        <li>Modes : Confort, Eco, Hors-gel, Absent</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> Les changements de température peuvent prendre quelques minutes avant d'être effectifs sur votre système.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Création et gestion des scénarios</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Les scénarios vous permettent d'automatiser votre installation et de créer des ambiances personnalisées.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Créer un nouveau scénario</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans l'onglet Scénarios, appuyez sur le bouton "+" en haut à droite</li>
                                <li>Donnez un nom au scénario (ex: "Soirée cinéma", "Départ maison")</li>
                                <li>Sélectionnez les équipements à inclure et définissez leur état souhaité</li>
                                <li>Choisissez le mode de déclenchement :
                                    <ul>
                                        <li>Manuel : activation par appui sur un bouton</li>
                                        <li>Horaire : programmation selon jours/heures</li>
                                        <li>Événement : réaction à un capteur ou une condition</li>
                                    </ul>
                                </li>
                                <li>Enregistrez le scénario</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <h4>Exemples de scénarios courants</h4>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Départ maison</h5>
                            <p>Éteint toutes les lumières, ferme les volets, active l'alarme et réduit le chauffage.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Réveil matinal</h5>
                            <p>Ouvre progressivement les volets, allume les lumières en intensité douce et augmente la température.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5>Soirée cinéma</h5>
                            <p>Tamise les lumières du salon, ferme les volets, ajuste la température pour le confort.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de l'application mobile TIS.
            </div>
            <p>N'hésitez pas à explorer les autres tutoriels pour approfondir vos connaissances.</p>
        </div>
    `;
}

