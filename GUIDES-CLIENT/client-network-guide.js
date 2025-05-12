function loadNetworkGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Configuration réseau et mises à jour</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Une bonne configuration réseau est essentielle pour le bon fonctionnement de votre système et l'accès à distance. Les mises à jour permettent d'ajouter des fonctionnalités et de corriger les problèmes.
            </div>
            
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="images/NET.jpg" alt="Réseau et mises à jour" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Accéder aux paramètres réseau</h4>
                    <ol>
                        <li>Dans l'application ou sur la tablette, accédez aux "Paramètres"</li>
                        <li>Sélectionnez "Réseau" ou "Connexion"</li>
                        <li>Vous accéderez aux options de configuration</li>
                    </ol>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Types de connexion</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-wifi text-primary"></i> Wi-Fi</h5>
                            <p>Connexion sans fil à votre box internet. Plus facile à configurer mais peut être moins stable.</p>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-ethernet text-primary"></i> Ethernet</h5>
                            <p>Connexion filaire à votre box internet. Plus stable mais nécessite un câblage.</p>
                        </div>
                        <div class="col-md-4 mb-3">
                            <h5><i class="fas fa-cloud text-primary"></i> Cloud</h5>
                            <p>Connexion au cloud TIS pour l'accès à distance et les services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Configuration de la connexion</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/NET2.png" alt="Configuration Wi-Fi" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Configuration Wi-Fi</h4>
                    <ol>
                        <li>Sélectionnez "Wi-Fi" dans les paramètres réseau</li>
                        <li>Choisissez votre réseau dans la liste</li>
                        <li>Entrez la clé de sécurité (mot de passe)</li>
                        <li>Validez pour vous connecter</li>
                    </ol>
                </div>
            </div>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/NET3.png" alt="Configuration Ethernet" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Configuration Ethernet</h4>
                    <ol>
                        <li>Branchez un câble Ethernet entre le contrôleur et votre box</li>
                        <li>Sélectionnez "Ethernet" dans les paramètres réseau</li>
                        <li>Choisissez la configuration :
                            <ul>
                                <li><strong>DHCP</strong> : Configuration automatique (recommandé)</li>
                                <li><strong>IP fixe</strong> : Configuration manuelle (avancé)</li>
                            </ul>
                        </li>
                        <li>Validez pour vous connecter</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Accès distant et cloud</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Pour contrôler votre système à distance et profiter des services connectés, vous devez configurer l'accès distant.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Configuration de l'accès distant</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans les paramètres réseau, activez "Accès distant" ou "Cloud"</li>
                                <li>Créez un compte TIS si vous n'en avez pas</li>
                                <li>Connectez-vous à votre compte</li>
                                <li>Le système va se connecter au cloud</li>
                                <li>Vous pourrez ensuite vous connecter à votre système depuis l'application mobile en dehors de votre réseau local</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Mises à jour du système</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/UPDATE3.png" alt="Mise à jour" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Vérifier et installer les mises à jour</h4>
                    <ol>
                        <li>Dans "Paramètres", sélectionnez "Mises à jour" ou "Système"</li>
                        <li>Le système va vérifier s'il y a des mises à jour disponibles</li>
                        <li>S'il y en a, appuyez sur "Télécharger" puis "Installer"</li>
                        <li>Laissez le système redémarrer</li>
                    </ol>
                    
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Recommandation :</strong> Connectez votre système à une source d'alimentation et à un réseau stable (Ethernet de préférence) pendant la mise à jour.
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
                            <p>Connexion et configuration réseau</p>
                            <a href="#" class="btn btn-outline-primary">Regarder</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-download text-primary"></i> Fiche de configuration</h4>
                            <p>Étapes rapides pour la connexion</p>
                            <a href="#" class="btn btn-outline-primary">Télécharger</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-file-pdf text-primary"></i> Guide de dépannage</h4>
                            <p>Problèmes de connexion courants</p>
                            <a href="#" class="btn btn-outline-primary">Consulter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous savez maintenant comment configurer le réseau et mettre à jour votre système !
            </div>
            <p>Continuez avec les autres guides pour approfondir vos connaissances.</p>
        </div>
    `;
}

