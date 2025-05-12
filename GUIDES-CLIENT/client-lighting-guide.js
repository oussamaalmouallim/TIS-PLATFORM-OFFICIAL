function loadLightingGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
        <div class="guide-section">
            <h3>Configuration des circuits d'éclairage</h3>
            
            <div class="alert alert-primary mb-4">
                <i class="fas fa-info-circle"></i> Une configuration précise de vos circuits d'éclairage est essentielle pour un contrôle optimal et des économies d'énergie.
            </div>
            
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <img src="images/ADD-NEW-LIGHT.jpg" alt="Configuration circuit éclairage" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <h4>Ajouter un nouveau circuit</h4>
                    <ol>
                        <li>Dans votre projet, accédez à l'onglet "Équipements" ou "Éclairage"</li>
                        <li>Appuyez sur le bouton "+" ou "Ajouter un circuit d'éclairage"</li>
                        <li>Renseignez les informations du circuit :
                            <ul>
                                <li>Nom (ex: Plafonnier salon, Spots cuisine, Ruban LED chambre)</li>
                                <li>Type de circuit (interrupteur simple, variateur, RGB)</li>
                                <li>Pièce ou emplacement associé</li>
                                <li>Module TIS et canal correspondant</li>
                            </ul>
                        </li>
                        <li>Définissez les paramètres avancés (type de charge, puissance, min/max variation)</li>
                        <li>Ajoutez une icône représentative (optionnel)</li>
                        <li>Validez pour créer le circuit</li>
                    </ol>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Types de circuits d'éclairage pris en charge</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-toggle-on fa-2x mb-2 text-success"></i>
                                            <h5>Circuit ON/OFF</h5>
                                            <p class="small">Allumer ou éteindre simplement un luminaire.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-adjust fa-2x mb-2 text-warning"></i>
                                            <h5>Circuit Variateur (Dimmer)</h5>
                                            <p class="small">Ajuster l'intensité lumineuse.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-palette fa-2x mb-2 text-danger"></i>
                                            <h5>Circuit Couleur (RGB/RGBW)</h5>
                                            <p class="small">Choisir la couleur et l'intensité.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Paramètres avancés et optimisation</h3>
            
            <div class="row align-items-center mb-4">
                <div class="col-md-6 order-md-2">
                    <img src="images/ADJUST-LIGHTS.jpg" alt="Paramètres avancés" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6 order-md-1">
                    <h4>Configuration des types de charge</h4>
                    <p>Il est important de spécifier le type d'ampoule ou de luminaire connecté au circuit pour garantir un bon fonctionnement, surtout pour les variateurs :</p>
                    <ul>
                        <li>Incandescence</li>
                        <li>Halogène</li>
                        <li>LED dimmable (avant-garde / bord de fuite)</li>
                        <li>Fluorescent avec ballast dimmable</li>
                    </ul>
                    
                    <h4>Réglage de la courbe de variation</h4>
                    <p>Pour les circuits variateurs, vous pouvez ajuster la courbe de réponse pour obtenir une variation plus fluide ou plus rapide selon vos préférences.</p>
                    
                    <h4>Limites de variation (Min/Max)</h4>
                    <p>Définissez les niveaux minimum et maximum d'intensité pour éviter le scintillement des LEDs à faible puissance ou pour limiter l'intensité maximale.</p>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> <strong>Attention :</strong> Un mauvais réglage du type de charge ou des limites de variation peut endommager le module ou les luminaires. Consultez la documentation technique des produits si nécessaire.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="guide-section mt-5">
            <h3>Groupement et scènes d'éclairage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <p>Organisez vos circuits en groupes ou créez des scènes pour contrôler plusieurs luminaires simultanément.</p>
                    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Créer un groupe de circuits</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans l'onglet "Éclairage", sélectionnez "Groupes"</li>
                                <li>Appuyez sur "+" et donnez un nom au groupe (ex: Éclairage principal salon)</li>
                                <li>Ajoutez les circuits que vous souhaitez contrôler ensemble</li>
                                <li>Vous pouvez maintenant contrôler ce groupe comme un seul luminaire</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="card">
                         <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Créer une scène d'éclairage</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Dans l'onglet "Scènes", appuyez sur "+"</li>
                                <li>Donnez un nom à la scène (ex: Ambiance Dîner, Éclairage Travail)</li>
                                <li>Définissez l'état souhaité pour chaque circuit ou groupe inclus dans la scène (On/Off, intensité, couleur)</li>
                                <li>Enregistrez la scène. Vous pourrez l'activer d'un simple appui.</li>
                            </ol>
                    <div class="row align-items-center mb-5">
                         <div class="col-md-6">
                           <img src="images/SCNE-LIGHTS.jpg" alt="Configuration par scene" class="img-fluid rounded shadow">
                         </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous avez configuré vos premiers circuits d'éclairage !
            </div>
            <p>Continuez avec les guides sur les scénarios pour aller plus loin dans l'automatisation de votre éclairage.</p>
        </div>
    `;
}

