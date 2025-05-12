function loadKeyboard4GTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Programmation du clavier 4G</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/ADD-CAMERA.jpg" alt="Clavier 4G" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>Le clavier 4G est un périphérique d'entrée robuste et polyvalent compatible avec le système TIS. Il dispose de 20 touches rétroéclairées et d'un écran LCD intégré.</p>
                    <p>Ce tutoriel détaille l'installation, la configuration et la programmation avancée du clavier 4G.</p>
                    
                    <h4>Caractéristiques techniques</h4>
                    <ul>
                        <li>20 touches programmables avec rétroéclairage</li>
                        <li>Écran LCD 2x16 caractères</li>
                        <li>Buzzer intégré pour feedback sonore</li>
                        <li>Connexion TIS BUS standard (4 fils)</li>
                        <li>Alimentation: 12V DC via TIS BUS</li>
                        <li>Consommation: 50mA (normal), 120mA (max avec rétroéclairage)</li>
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
                                <li>Choisissez l'emplacement approprié (hauteur recommandée: 1.5m)</li>
                                <li>Pour montage encastré:
                                    <ul>
                                        <li>Préparez une découpe de 86x86mm</li>
                                        <li>Profondeur minimale requise: 35mm</li>
                                    </ul>
                                </li>
                                <li>Pour montage en saillie:
                                    <ul>
                                        <li>Fixez le support arrière au mur</li>
                                        <li>Utilisez les 4 points de fixation</li>
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
                                <li>Configurez l'adresse du module via les commutateurs DIP à l'arrière</li>
                                <li>Fixez le clavier sur son support et verrouillez-le</li>
                            </ol>
                        </div>
                        <div class="col-md-6">
                            <h5>Réglages matériels</h5>
                            <p>Configuration des commutateurs DIP:</p>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Commutateur</th>
                                        <th>Fonction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1-5</td>
                                        <td>Adresse du module (binaire)</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Résistance de terminaison (ON si en fin de ligne)</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Mode de fonctionnement (OFF: normal, ON: programmation)</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Réservé (laisser sur OFF)</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> Configurez les commutateurs avant la mise sous tension. Tout changement nécessite un redémarrage du module.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration de base avec DEVsearch</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Première configuration</h4>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez-vous au système via DEVsearch</li>
                                <li>Accédez à l'onglet "Découverte" et recherchez les périphériques</li>
                                <li>Identifiez le clavier 4G dans la liste (vérifiez l'adresse configurée)</li>
                                <li>Cliquez-droit et sélectionnez "Configurer"</li>
                                <li>Dans la fenêtre de configuration:
                                    <ul>
                                        <li>Donnez un nom au clavier (ex: "Clavier Entrée")</li>
                                        <li>Assignez-le à une pièce et un emplacement</li>
                                        <li>Configurez les paramètres généraux:
                                            <ul>
                                                <li>Intensité du rétroéclairage (0-100%)</li>
                                                <li>Délai d'extinction du rétroéclairage</li>
                                                <li>Volume du buzzer (0-100%)</li>
                                                <li>Comportement de l'écran LCD</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Appliquez les changements et passez à la configuration des touches</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Programmation des touches</h4>
                        </div>
                        <div class="card-body">
                            <p>Chaque touche peut être configurée indépendamment pour différentes fonctions:</p>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Types de fonctions disponibles</h5>
                                    <ul>
                                        <li><strong>Commande directe</strong>: contrôle immédiat d'un équipement</li>
                                        <li><strong>Scénario</strong>: lancement d'un scénario prédéfini</li>
                                        <li><strong>Bascule d'état</strong>: inverse l'état actuel (ON/OFF)</li>
                                        <li><strong>Valeur fixe</strong>: envoie une valeur spécifique (%, niveau)</li>
                                        <li><strong>Macro</strong>: séquence de plusieurs commandes</li>
                                        <li><strong>Mode</strong>: changement de mode système (Normal, Absent, Nuit)</li>
                                        <li><strong>Navigation</strong>: pour interagir avec l'écran LCD</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration par touche</h5>
                                    <ol>
                                        <li>Dans l'onglet "Touches", sélectionnez une touche à configurer</li>
                                        <li>Choisissez le type de fonction dans le menu déroulant</li>
                                        <li>Configurez les paramètres spécifiques:
                                            <ul>
                                                <li>Équipement/circuit cible</li>
                                                <li>Action à effectuer</li>
                                                <li>Paramètres (valeur, délai, etc.)</li>
                                                <li>Feedback visuel (couleur, clignotement)</li>
                                                <li>Feedback sonore (type de bip)</li>
                                            </ul>
                                        </li>
                                        <li>Définissez le comportement des pressions:
                                            <ul>
                                                <li>Appui court</li>
                                                <li>Appui long (maintenu)</li>
                                                <li>Double-clic (si supporté)</li>
                                            </ul>
                                        </li>
                                        <li>Personnalisez le libellé de la touche (si étiquette disponible)</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Astuce:</strong> Organisez les touches par zones fonctionnelles (éclairage, volets, scénarios) pour une utilisation plus intuitive.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration avancée</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Personnalisation de l'écran LCD</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Modes d'affichage</h5>
                                    <p>L'écran LCD peut être configuré selon plusieurs modes:</p>
                                    <ul>
                                        <li><strong>Mode standard</strong>: affichage statique d'informations</li>
                                        <li><strong>Mode défilement</strong>: informations qui défilent</li>
                                        <li><strong>Mode alterné</strong>: alterne entre différentes informations</li>
                                        <li><strong>Mode dynamique</strong>: change selon l'état du système</li>
                                        <li><strong>Mode interactif</strong>: menu navigable avec les touches</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Types d'informations affichables</h5>
                                    <ul>
                                        <li>Date et heure</li>
                                        <li>État du système (mode actif)</li>
                                        <li>Température (si capteur disponible)</li>
                                        <li>État des zones d'alarme</li>
                                        <li>Alertes et notifications</li>
                                        <li>Noms des scénarios actifs</li>
                                        <li>Messages personnalisés</li>
                                        <li>Guide de navigation pour les touches</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Configuration de l'écran</h5>
                            <ol>
                                <li>Dans l'onglet "Écran LCD", sélectionnez le mode d'affichage</li>
                                <li>Configurez le contenu pour chaque ligne (2 lignes disponibles)</li>
                                <li>Pour le mode interactif, créez la structure du menu:
                                    <ul>
                                        <li>Définissez les menus et sous-menus</li>
                                        <li>Associez des actions à chaque entrée</li>
                                        <li>Configurez les touches de navigation</li>
                                    </ul>
                                </li>
                                <li>Paramétrez les conditions d'affichage pour le mode dynamique</li>
                                <li>Définissez les caractères spéciaux personnalisés si nécessaire</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Fonctions de sécurité</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des codes d'accès</h5>
                                    <p>Le clavier 4G peut servir de contrôle d'accès:</p>
                                    <ol>
                                        <li>Activez la fonction code dans l'onglet "Sécurité"</li>
                                        <li>Définissez les codes utilisateurs (jusqu'à 20 codes):
                                            <ul>
                                                <li>Code principal administrateur</li>
                                                <li>Codes secondaires utilisateurs</li>
                                                <li>Codes temporaires (avec date d'expiration)</li>
                                                <li>Codes sous contrainte (pour alarme silencieuse)</li>
                                            </ul>
                                        </li>
                                        <li>Associez des droits à chaque code:
                                            <ul>
                                                <li>Accès à certaines fonctions</li>
                                                <li>Activation/désactivation de l'alarme</li>
                                                <li>Exécution de scénarios spécifiques</li>
                                                <li>Plages horaires d'autorisation</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Paramètres de sécurité</h5>
                                    <ul>
                                        <li><strong>Verrouillage automatique</strong>: après un nombre d'essais incorrects</li>
                                        <li><strong>Délai de déverrouillage</strong>: temps avant nouvelle tentative</li>
                                        <li><strong>Alerte</strong>: notification en cas de tentatives multiples</li>
                                        <li><strong>Journalisation</strong>: enregistrement des accès réussis/échoués</li>
                                        <li><strong>Auto-protection</strong>: alarme si tentative d'ouverture du boîtier</li>
                                        <li><strong>Témoin d'état</strong>: indication visuelle de l'état d'alarme</li>
                                    </ul>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Pour le code administrateur, créez une sauvegarde sur papier conservée en lieu sûr. En cas d'oubli, une réinitialisation d'usine sera nécessaire.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Applications pratiques</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h4>Configurations typiques</h4>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-header">
                                            <h5>Contrôle d'entrée</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Installation près de la porte d'entrée:</p>
                                            <ul>
                                                <li>Codes pour déverrouillage/verrouillage</li>
                                                <li>Armement/désarmement alarme</li>
                                                <li>Scénarios "Départ" et "Arrivée"</li>
                                                <li>Affichage état général du système</li>
                                                <li>Contrôle éclairage d'entrée</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-header">
                                            <h5>Centrale de pièce</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Installation dans une pièce principale:</p>
                                            <ul>
                                                <li>Contrôles d'éclairage multizones</li>
                                                <li>Gestion des volets/stores</li>
                                                <li>Scénarios d'ambiance</li>
                                                <li>Contrôle de température</li>
                                                <li>Information météo sur LCD</li>
                                                <li>Accès aux fonctions multimedia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card h-100">
                                        <div class="card-header">
                                            <h5>Contrôle de zone technique</h5>
                                        </div>
                                        <div class="card-body">
                                            <p>Installation dans local technique:</p>
                                            <ul>
                                                <li>Surveillance d'équipements techniques</li>
                                                <li>Contrôle chaufferie/climatisation</li>
                                                <li>Gestion irrigation/piscine</li>
                                                <li>Affichage états et alarmes techniques</li>
                                                <li>Menu dépannage pour techniciens</li>
                                                <li>Accès sécurisé par code</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage et maintenance</h3>
            
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
                                        <td>Clavier non détecté</td>
                                        <td>
                                            <ul>
                                                <li>Adressage incorrect</li>
                                                <li>Problème de câblage</li>
                                                <li>Alimentation insuffisante</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifier les commutateurs DIP</li>
                                                <li>Contrôler les connexions TIS BUS</li>
                                                <li>Mesurer la tension d'alimentation (min. 11V)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Touches sans réaction</td>
                                        <td>
                                            <ul>
                                                <li>Configuration incomplète</li>
                                                <li>Conflit d'adressage</li>
                                                <li>Touche défectueuse</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifier la programmation</li>
                                                <li>Tester avec la fonction diagnostic</li>
                                                <li>Redémarrer le clavier</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Écran LCD illisible</td>
                                        <td>
                                            <ul>
                                                <li>Contraste mal réglé</li>
                                                <li>Problème d'initialisation</li>
                                                <li>Défaut hardware</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Ajuster le contraste (potentiomètre arrière)</li>
                                                <li>Redémarrer l'alimentation</li>
                                                <li>Restaurer les paramètres d'usine</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <h5 class="mt-4">Réinitialisation d'usine</h5>
                            <ol>
                                <li>Coupez l'alimentation du clavier</li>
                                <li>Positionnez le commutateur DIP 7 sur ON</li>
                                <li>Maintenez enfoncées les touches 1, 3 et 5 simultanément</li>
                                <li>Remettez l'alimentation tout en maintenant ces touches</li>
                                <li>Relâchez lorsque le message "Factory Reset" apparaît</li>
                                <li>Attendez la fin de la réinitialisation</li>
                                <li>Remettez le commutateur DIP 7 sur OFF</li>
                                <li>Redémarrez le clavier</li>
                            </ol>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> La réinitialisation d'usine efface toute la programmation. Réalisez une sauvegarde préalable si possible.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous maîtrisez maintenant l'installation et la programmation du clavier 4G.
            </div>
            <p>Pour plus d'informations sur les fonctionnalités avancées ou les mises à jour firmware, consultez la documentation technique complète.</p>
            <a href="#" class="btn btn-secondary mt-3"><i class="fas fa-download"></i> Télécharger la fiche technique du clavier 4G</a>
        </div>
    `;
}

