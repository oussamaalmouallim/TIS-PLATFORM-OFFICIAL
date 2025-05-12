// Fonction pour charger le tutoriel Tablette pour les techniciens
function loadTechTabletTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Prise en main de la tablette TIS</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/USING TAB.png" alt="Interface tablette TIS" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>La tablette TIS est une interface tactile dédiée qui vous permet de contrôler l'ensemble de votre installation depuis un point central. Son interface intuitive et personnalisable offre un accès rapide à toutes les fonctionnalités de votre système domotique.</p>
                    <p>Ce tutoriel vous guidera à travers les principales fonctionnalités et vous aidera à tirer le meilleur parti de votre tablette TIS.</p>
                </div>
            </div>
            
            <h4>Premier démarrage et configuration</h4>
            <div class="card mb-4">
                <div class="card-body">
                    <ol>
                        <li>Mettez la tablette sous tension en la branchant sur son support mural ou en appuyant sur le bouton d'alimentation</li>
                        <li>L'écran d'accueil apparaît après quelques secondes</li>
                        <li>Lors de la première utilisation, suivez l'assistant de configuration qui vous guidera à travers les étapes initiales</li>
                        <li>Connectez la tablette au réseau Wi-Fi ou au réseau filaire de votre installation</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Interface principale</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>L'écran d'accueil de la tablette est organisé en zones fonctionnelles pour un accès rapide à toutes les commandes.</p>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <h4>Barre de navigation supérieure</h4>
                    <ul>
                        <li><strong>Accueil</strong> : Revenir à l'écran principal</li>
                        <li><strong>Pièces</strong> : Accéder aux commandes par pièce</li>
                        <li><strong>Scénarios</strong> : Gérer et activer des scénarios</li>
                        <li><strong>Paramètres</strong> : Configurer la tablette et le système</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h4>Widgets et contrôles rapides</h4>
                    <ul>
                        <li><strong>Météo</strong> : Affichage des conditions actuelles</li>
                        <li><strong>Favoris</strong> : Accès aux commandes fréquemment utilisées</li>
                        <li><strong>Statut système</strong> : Voyants d'état des principaux systèmes</li>
                        <li><strong>Contrôles généraux</strong> : Commandes pour l'ensemble de la maison</li>
                    </ul>
                </div>
            </div>
            
            <div class="alert alert-info mb-4">
                <i class="fas fa-info-circle"></i> L'interface peut être personnalisée selon vos préférences. Maintenez votre doigt appuyé sur une zone pour entrer dans le mode d'édition.
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Contrôle des équipements</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/SAT101.png" alt="Contrôle des équipements" class="img-fluid rounded">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Commandes par pièce</h4>
                    <p>Pour accéder aux commandes d'une pièce spécifique :</p>
                    <ol>
                        <li>Touchez l'onglet "Pièces" dans la barre de navigation</li>
                        <li>Sélectionnez la pièce souhaitée</li>
                        <li>Tous les équipements disponibles dans cette pièce s'affichent</li>
                        <li>Utilisez les contrôles intuitifs pour gérer chaque équipement</li>
                    </ol>
                </div>
            </div>
            
            <h4>Types de contrôles disponibles</h4>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-lightbulb text-warning"></i> Éclairage</h5>
                            <ul>
                                <li>Boutons On/Off</li>
                                <li>Curseurs de variation</li>
                                <li>Sélecteurs de couleur (RGB)</li>
                                <li>Préréglages d'ambiance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-temperature-high text-danger"></i> Chauffage/Clim</h5>
                            <ul>
                                <li>Réglage de température</li>
                                <li>Sélection du mode (Confort, Eco...)</li>
                                <li>Programmation horaire</li>
                                <li>Contrôle multizone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5><i class="fas fa-shield-alt text-primary"></i> Sécurité</h5>
                            <ul>
                                <li>Activation/désactivation alarme</li>
                                <li>Visualisation caméras</li>
                                <li>Historique des événements</li>
                                <li>Contrôle d'accès</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Personnalisation de l'interface</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>La tablette TIS est entièrement personnalisable pour s'adapter à vos besoins et préférences.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Comment personnaliser votre interface</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Accédez aux paramètres en touchant l'icône engrenage</li>
                                <li>Sélectionnez "Personnalisation"</li>
                                <li>Choisissez parmi les options suivantes :
                                    <ul>
                                        <li><strong>Thèmes</strong> : Changez l'apparence globale</li>
                                        <li><strong>Widgets</strong> : Ajoutez/supprimez/déplacez les widgets</li>
                                        <li><strong>Favoris</strong> : Configurez vos commandes préférées</li>
                                        <li><strong>Écran de veille</strong> : Personnalisez l'affichage en veille</li>
                                    </ul>
                                </li>
                                <li>Pour réorganiser l'écran d'accueil, maintenez votre doigt appuyé sur une zone jusqu'à ce que le mode d'édition s'active</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les bases de l'utilisation de la tablette TIS.
            </div>
            <p>Pour plus d'informations, consultez le manuel utilisateur complet ou les vidéos de démonstration.</p>
        </div>
    `;
}

