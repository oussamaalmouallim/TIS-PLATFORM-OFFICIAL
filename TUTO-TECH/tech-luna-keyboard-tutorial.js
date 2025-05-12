function loadKeyboardLunaTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Programmation du clavier Luna</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/clavier_luna.png" alt="Clavier Luna" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>Le clavier Luna est un périphérique d'entrée tactile élégant avec interface circulaire. Sa conception minimaliste et son éclairage LED personnalisable en font un élément à la fois fonctionnel et décoratif.</p>
                    <p>Ce tutoriel couvre l'installation, la configuration et la programmation avancée du clavier Luna.</p>
                    
                    <h4>Caractéristiques techniques</h4>
                    <ul>
                        <li>Interface tactile capacitive circulaire</li>
                        <li>8 zones tactiles personnalisables</li>
                        <li>Rétroéclairage LED RGB programmable</li>
                        <li>Capteur de proximité et de luminosité intégré</li>
                        <li>Connexion TIS BUS standard (4 fils)</li>
                        <li>Alimentation: 12V DC via TIS BUS</li>
                        <li>Consommation: 30mA (normal), 80mA (max avec rétroéclairage)</li>
                        <li>Montage: en saillie ou encastré</li>
                        <li>Indice de protection: IP40 (intérieur)</li>
                    </ul>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Installation physique</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Montage et connexion</h5>
                            <ol>
                                <li>Sélectionnez l'emplacement approprié (hauteur recommandée: 1.5m)</li>
                                <li>Pour montage encastré:
                                    <ul>
                                        <li>Utilisez un boîtier d'encastrement standard ø60mm</li>
                                        <li>Profondeur minimale requise: 30mm</li>
                                    </ul>
                                </li>
                                <li>Pour montage en saillie:
                                    <ul>
                                        <li>Fixez l'adaptateur mural fourni</li>
                                        <li>Utilisez les vis adaptées au support</li>
                                    </ul>
                                </li>
                                <li>Connectez les fils du TIS BUS en respectant les couleurs:
                                    <ul>
                                        <li>Rouge: +12V</li>
                                        <li>Noir: GND</li>
                                        <li>Jaune: DATA A</li>
                                        <li>Vert: DATA B</li>
                                    </ul>
                                </li>
                                <li>Si nécessaire, configurez l'adresse du module via les micro-interrupteurs à l'arrière</li>
                                <li>Alignez le clavier avec sa base et appuyez pour l'enclencher</li>
                            </ol>
                        </div>
                        <div class="col-md-6">
                            <h5>Précautions d'installation</h5>
                            <ul>
                                <li>Évitez les emplacements exposés à la lumière directe du soleil</li>
                                <li>Évitez la proximité de sources de chaleur</li>
                                <li>Installation sur surface plane uniquement</li>
                                <li>Évitez les environnements humides</li>
                                <li>Respectez une distance minimale de 20cm avec d'autres appareils électroniques</li>
                                <li>Ne serrez pas excessivement les vis de fixation (risque de déformation)</li>
                            </ul>
                            
                            <h5>Configuration des micro-interrupteurs</h5>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Interrupteur</th>
                                        <th>Fonction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1-6</td>
                                        <td>Adresse du module (binaire)</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Résistance de terminaison (ON si en fin de ligne)</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Mode de fonctionnement (OFF: normal, ON: configuration)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration avec DEVsearch</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Configuration initiale</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Ouvrez DEVsearch et connectez-vous au système</li>
                                <li>Accédez à l'onglet "Découverte" et lancez une recherche de périphériques</li>
                                <li>Identifiez le clavier Luna dans la liste (vérifiez l'adresse configurée)</li>
                                <li>Sélectionnez le clavier et cliquez sur "Configurer"</li>
                                <li>Dans l'assistant de configuration:
                                    <ul>
                                        <li>Donnez un nom explicite au clavier (ex: "Luna Salon")</li>
                                        <li>Assignez-le à une pièce et un emplacement</li>
                                        <li>Vérifiez que le firmware est à jour (proposé automatiquement si nécessaire)</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Paramètres généraux</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration de base</h5>
                                    <p>Dans l'onglet "Paramètres", configurez:</p>
                                    <ul>
                                        <li><strong>Rétroéclairage de veille</strong>:
                                            <ul>
                                                <li>Couleur (RGB sélectionnable)</li>
                                                <li>Intensité (0-100%)</li>
                                                <li>Mode (fixe, pulsation, éteint)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Capteur de proximité</strong>:
                                            <ul>
                                                <li>Sensibilité (Basse, Moyenne, Haute)</li>
                                                <li>Distance de détection</li>
                                                <li>Action au réveil (aucune, éclairage, affichage info)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Capteur de luminosité</strong>:
                                            <ul>
                                                <li>Seuils d'ajustement automatique</li>
                                                <li>Utilisation comme capteur système (oui/non)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Retour tactile</strong>:
                                            <ul>
                                                <li>Tonalité (désactivée, courte, longue)</li>
                                                <li>Volume (faible, moyen, fort)</li>
                                                <li>Vibration (si disponible sur le modèle)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Mode nuit</strong>:
                                            <ul>
                                                <li>Programmation horaire</li>
                                                <li>Réduction d'intensité</li>
                                                <li>Couleur alternative</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration de l'affichage</h5>
                                    <p>Dans l'onglet "Affichage", configurez:</p>
                                    <ul>
                                        <li><strong>Mode d'indication</strong>:
                                            <ul>
                                                <li>Circulaire (illumination partielle du cercle)</li>
                                                <li>Segmenté (chaque zone indépendante)</li>
                                                <li>Global (tout le clavier)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Animation</strong>:
                                            <ul>
                                                <li>Type (balayage, pulsation, fade)</li>
                                                <li>Vitesse (lente, moyenne, rapide)</li>
                                                <li>Direction (horaire, anti-horaire)</li>
                                            </ul>
                                        </li>
                                        <li><strong>Indicateurs d'état</strong>:
                                            <ul>
                                                <li>Codage couleur par fonction</li>
                                                <li>Mode de clignotement pour alertes</li>
                                                <li>Compteur de notifications</li>
                                            </ul>
                                        </li>
                                        <li><strong>Mode d'économie d'énergie</strong>:
                                            <ul>
                                                <li>Délai avant atténuation</li>
                                                <li>Délai avant extinction</li>
                                                <li>Niveau de luminosité minimal</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                    <div class="alert alert-info mt-3">
                                        <i class="fas fa-lightbulb"></i> <strong>Astuce:</strong> La combinaison de couleurs peut être synchronisée avec d'autres éléments de l'interface utilisateur (tablettes, autres claviers) pour une cohérence visuelle.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Programmation des zones tactiles</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Configuration des 8 zones</h4>
                        </div>
                        <div class="card-body">
                            <p>Le clavier Luna dispose de 8 zones tactiles disposées en cercle. Chacune peut être programmée indépendamment:</p>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Types de fonctions assignables</h5>
                                    <ul>
                                        <li><strong>On/Off simple</strong>: contrôle binaire d'un équipement</li>
                                        <li><strong>Variation</strong>: contrôle graduel (pression continue)</li>
                                        <li><strong>Séquenceur</strong>: cycle entre plusieurs états prédéfinis</li>
                                        <li><strong>Scénario</strong>: activation d'un scénario complexe</li>
                                        <li><strong>Mode</strong>: changement de mode système (Confort, Eco, Absence...)</li>
                                        <li><strong>Contrôle couleur</strong>: sélection RGB pour éclairages compatibles</li>
                                        <li><strong>Temporisé</strong>: action limitée dans le temps</li>
                                        <li><strong>Navigation</strong>: contrôle d'interface sur d'autres équipements</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Procédure de configuration</h5>
                                    <ol>
                                        <li>Dans l'onglet "Zones tactiles", sélectionnez la zone à programmer</li>
                                        <li>Choisissez le type de fonction dans le menu déroulant</li>
                                        <li>Sélectionnez l'équipement ou le scénario cible</li>
                                        <li>Configurez les paramètres spécifiques à la fonction:
                                            <ul>
                                                <li>Pour On/Off: état par défaut, inversion</li>
                                                <li>Pour Variation: pas, vitesse, limites min/max</li>
                                                <li>Pour Scénario: paramètres, conditions</li>
                                                <li>Pour Mode: états disponibles, transitions</li>
                                            </ul>
                                        </li>
                                        <li>Définissez les indications visuelles:
                                            <ul>
                                                <li>Couleur active/inactive</li>
                                                <li>Animation au toucher</li>
                                                <li>Comportement selon l'état</li>
                                            </ul>
                                        </li>
                                        <li>Configurez les interactions avancées:
                                            <ul>
                                                <li>Action sur appui court</li>
                                                <li>Action sur appui long</li>
                                                <li>Action sur balayage</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Gestes tactiles avancés</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Le clavier Luna reconnaît plusieurs types de gestes:</p>
                                    <ul>
                                        <li><strong>Appui simple</strong>: toucher bref sur une zone</li>
                                        <li><strong>Appui long</strong>: toucher maintenu (>1s)</li>
                                        <li><strong>Double appui</strong>: deux touches rapides</li>
                                        <li><strong>Balayage circulaire</strong>: mouvement rotatif horaire/anti-horaire</li>
                                        <li><strong>Balayage radial</strong>: mouvement du centre vers l'extérieur</li>
                                        <li><strong>Multi-touch</strong>: plusieurs zones simultanément</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <p>Configuration des gestes avancés:</p>
                                    <ol>
                                        <li>Activez les gestes dans "Paramètres avancés > Gestes"</li>
                                        <li>Définissez la sensibilité et la précision des gestes</li>
                                        <li>Assignez des fonctions aux gestes configurés</li>
                                        <li>Testez la reconnaissance des gestes avec l'outil de diagnostic</li>
                                        <li>Ajustez si nécessaire pour une détection optimale</li>
                                    </ol>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> Tous les gestes ne sont pas disponibles sur les versions antérieures au firmware 2.4. Vérifiez la compatibilité ou effectuez une mise à jour.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configurations spéciales</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Modes spéciaux</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Mode circulaire (variateur)</h5>
                                    <p>Configuration pour contrôle de variation circulaire:</p>
                                    <ol>
                                        <li>Dans "Modes spéciaux", activez "Mode circulaire"</li>
                                        <li>Assignez l'équipement (ex: variateur d'éclairage)</li>
                                        <li>Définissez les plages de variation min/max</li>
                                        <li>Configurez la sensibilité et la vitesse de variation</li>
                                        <li>Testez le contrôle en tournant le doigt sur le cercle</li>
                                    </ol>
    `;
}                       