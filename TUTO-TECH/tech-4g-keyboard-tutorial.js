function loadKeyboard4GTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Programmation du clavier TER-4G</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/4G.png" alt="Clavier 4G" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>Le clavier TER-4G est un périphérique d'entrée robuste et polyvalent compatible avec le système TIS. Il dispose de 4 touches rétroéclairées.</p>
                    <p>Ce tutoriel détaille l'installation, la configuration et la programmation avancée du clavier TER-4G.</p>
                    
                    <h4>Caractéristiques techniques</h4>
                    <ul>
                        <li>4 touches programmables avec rétroéclairage</li>
                        <li>Connexion TIS BUS standard (4 fils)</li>
                        <li>Alimentation: 12-32V DC via TIS BUS</li>
                        <li>Consommation: <20mA / 24V DC</li>
                        <li>Montage: en saillie ou encastré</li>
                        <li>Indice de protection: IP50 (intérieur)</li>
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
                                        <li>Utilisez les 2 points de fixation</li>
                                    </ul>
                                </li>
                                <li>Connectez les fils du TIS BUS en respectant les couleurs:
                                    <ul>
                                        <li><span class="color-dot brown"></span>Marron: +12V</li>
                                        <li><span class="color-dot Orange"></span>Orange: GND</li>
                                        <li><span class="color-dot Blue"></span>Bleu: DATA -</li>
                                        <li><span class="color-dot green"></span>Vert: DATA +</li>
                                    </ul>
                                <li>Configurez l'adresse du module via les commutateurs DIP à l'arrière</li>
                                <li>Fixez le clavier sur son support et verrouillez-le</li>
                            </ol>
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
                                            </ul>
                                        </li>
                                        <li>Définissez le comportement des pressions:
                                            <ul>
                                                <li>Appui court</li>
                                                <li>Appui long (maintenu)</li>
                                                <li>Double-clic</li>
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
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Fonctions de sécurité</h4>
                        </div>
                                <div class="card-body">
                                    <h5>Paramètres de sécurité</h5>
                                    <ul>
                                        <li><strong>Protection contre l'inversion de polarité</strong> : empêche les dommages en cas de mauvais câblage.</li>
                                        <li><strong>Protection contre les décharges électrostatiques (ESD)</strong> : sécurise l'appareil contre les surtensions électrostatiques.</li>
                                        <li><strong>Connexion sécurisée via TIS-BUS</strong> : assure une communication fiable avec le système domotique.</li>
                                        <li><strong>Mise à jour via RS485</strong> : permet d'améliorer les fonctionnalités et la sécurité via des mises à jour.</li>
                                    </ul>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Ces protections permettent d'assurer la fiabilité et la sécurité du clavier TER-4G.
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
                                                <li>Scénarios "Départ" et "Arrivée"</li>
                                                <li>Contrôle éclairage d'entrée</li>
                                                <li>Contrôle de volet roulant d'entrée</li>
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
                                                <li>Accès aux fonctions multimedia</li>
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
                                </tbody>
                            </table>
    
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> En cas de problème ou de doute sur la procédure, consultez le manuel officiel avant d’effectuer cette opération.
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
            <button class="btn btn-secondary mt-2" onclick="showModuleVideo('relais')"><i class="fas fa-play-circle"></i> Voir vidéo
            </button>
        </div>
    `;
}

