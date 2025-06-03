function loadUploadDownloadGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = `
            <div class="guide-section">
                <h3>Configuration des volets roulants</h3>
                
                <div class="alert alert-primary mb-4">
                    <i class="fas fa-info-circle"></i> Les volets roulants automatisés offrent confort, sécurité et efficacité énergétique. Apprenez à les configurer efficacement dans votre système TIS.
                </div>
                
                <div class="row align-items-center mb-4">
                    <div class="col-md-6">
                        <img src="images/VR.jpg" alt="Schéma volet roulant" class="img-fluid rounded shadow">
                    </div>
                    <div class="col-md-6">
                        <h4>Principes fondamentaux</h4>
                        <p>Dans un système domotique TIS, les volets roulants peuvent être contrôlés de plusieurs façons :</p>
                        <ul>
                            <li>Montée/descente simple</li>
                            <li>Positionnement précis (0-100%)</li>
                            <li>Programmation horaire</li>
                            <li>En fonction de la luminosité extérieure</li>
                            <li>En fonction de la température</li>
                            <li>Dans le cadre de scénarios</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card mb-5">
                    <div class="card-header bg-primary text-white">
                        <h4 class="mb-0">Types de volets compatibles</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5><i class="fas fa-plug text-primary"></i> Volets filaires standard</h5>
                                        <p>Moteurs 230V AC avec montée/descente</p>
                                        <ul>
                                            <li>Connexion via module relais TIS</li>
                                            <li>Contrôle simple montée/descente</li>
                                            <li>Possibilité d'utiliser les interrupteurs existants</li>
                                            <li>Installation simple en rénovation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5><i class="fas fa-sliders-h text-primary"></i> Volets avec positionnement</h5>
                                        <p>Moteurs avancés avec retour de position</p>
                                        <ul>
                                            <li>Positionnement précis (0-100%)</li>
                                            <li>Moteurs avec fins de course électroniques</li>
                                            <li>Possibilité d'arrêt à des positions intermédiaires</li>
                                            <li>Compatible avec module volet TIS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5><i class="fas fa-wifi text-primary"></i> Volets radio/connectés</h5>
                                        <p>Technologies sans fil intégrables</p>
                                        <ul>
                                            <li>Moteurs radio (RTS, IO, Z-Wave)</li>
                                            <li>Intégration via interface TIS spécifique</li>
                                            <li>Retour d'état selon technologie</li>
                                            <li>Idéal en rénovation sans nouveau câblage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="guide-section mt-5">
                <h3>Configuration des modules pour volets</h3>
                
                <div class="row mb-4">
                    <div class="col-md-12">
                        <h4>Configuration avec module relais standard</h4>
                        <ol>
                            <li>Dans votre projet, accédez à la section "Équipements" puis "Modules"</li>
                            <li>Sélectionnez le module relais que vous souhaitez configurer</li>
                            <li>Pour chaque volet (nécessite 2 relais) :
                                <ul>
                                    <li>Sélectionnez deux sorties consécutives</li>
                                    <li>Configurez le type en "Volet roulant"</li>
                                    <li>Définissez quelle sortie contrôle la montée et la descente</li>
                                    <li>Configurez le temps de course total (montée et descente)</li>
                                    <li>Activez l'option "Sécurité" pour éviter les commandes simultanées</li>
                                </ul>
                            </li>
                            <li>Associez le volet à une pièce et un emplacement</li>
                            <li>Configurez les entrées associées (interrupteurs physiques)</li>
                            <li>Appliquez les changements</li>
                        </ol>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h4 class="mb-0">Configuration module volet spécifique</h4>
                            </div>
                            <div class="card-body">
                                <ol>
                                    <li>Accédez à la configuration du module volet dédié</li>
                                    <li>Pour chaque canal :
                                        <ul>
                                            <li>Nommez le volet (ex: "Volet salon est")</li>
                                            <li>Sélectionnez le type de moteur (standard, avec positionnement, radio)</li>
                                            <li>Configurez les paramètres spécifiques :
                                                <ul>
                                                    <li>Temps de course total (secondes)</li>
                                                    <li>Temps supplémentaire pour fin de course</li>
                                                    <li>Inversion du sens si nécessaire</li>
                                                    <li>Positions favorites prédéfinies (0-100%)</li>
                                                </ul>
                                            </li>
                                            <li>Programmez le comportement des entrées :
                                                <ul>
                                                    <li>Appui court : montée/descente complète</li>
                                                    <li>Appui long : ajustement manuel (arrêt au relâchement)</li>
                                                    <li>Double-clic : position favorite</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Configurez les protections et sécurités :
                                        <ul>
                                            <li>Blocage sur obstacle (si moteur compatible)</li>
                                            <li>Protection thermique</li>
                                            <li>Délai minimal entre inversions de sens</li>
                                        </ul>
                                    </li>
                                    <li>Testez le fonctionnement avec la fonction "Test"</li>
                                    <li>Calibrez les positions (si nécessaire)</li>
                                    <li>Sauvegardez la configuration</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="guide-section mt-5">
                <h3>Automatisation intelligente des volets</h3>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h4>Programmation horaire</h4>
                        <p>La programmation la plus simple et la plus utilisée :</p>
                        <ol>
                            <li>Accédez à "Scénarios" puis "Programmation horaire"</li>
                            <li>Créez une nouvelle programmation pour vos volets</li>
                            <li>Options de programmation :
                                <ul>
                                    <li><strong>Heures fixes</strong> : Ex. ouverture à 7h30, fermeture à 20h30</li>
                                    <li><strong>Heures variables</strong> : En fonction du lever/coucher du soleil</li>
                                    <li><strong>Offset</strong> : Ex. 30 minutes avant le coucher du soleil</li>
                                    <li><strong>Jours spécifiques</strong> : Configuration différente semaine/weekend</li>
                                </ul>
                            </li>
                            <li>Sélectionnez les volets concernés par cette programmation</li>
                            <li>Spécifiez les positions à atteindre (100% ouvert, 0% fermé, ou positions intermédiaires)</li>
                            <li>Activez la programmation</li>
                        </ol>
                    </div>
                    <div class="col-md-6">
                        <h4>Automatisation conditionnelle</h4>
                        <p>Des scénarios avancés basés sur des conditions :</p>
                        <ul>
                            <li><strong>En fonction de la température</strong> :
                                <ul>
                                    <li>Fermeture automatique si température extérieure > 25°C et pièce exposée au soleil</li>
                                    <li>Fermeture en hiver à la tombée de la nuit pour conserver la chaleur</li>
                                </ul>
                            </li>
                            <li><strong>En fonction de la luminosité</strong> :
                                <ul>
                                    <li>Fermeture si forte luminosité directe (protection contre l'éblouissement)</li>
                                    <li>Réglage automatique pour optimiser la lumière naturelle</li>
                                </ul>
                            </li>
                            <li><strong>En fonction de la présence</strong> :
                                <ul>
                                    <li>Fermeture automatique en mode absence prolongée</li>
                                    <li>Ouverture partielle en cas de détection d'occupation de la pièce</li>
                                </ul>
                            </li>
                            <li><strong>En fonction de la météo</strong> :
                                <ul>
                                    <li>Fermeture en cas de vent fort, pluie ou orage (avec station météo connectée)</li>
                                    <li>Protection préventive selon prévisions météo</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h4 class="mb-0">Scénarios intelligents</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <h5><i class="fas fa-moon text-primary"></i> Scénario "Bonne nuit"</h5>
                                        <p>Fermeture progressive des volets en séquence :</p>
                                        <ol>
                                            <li>Fermeture des volets des pièces de vie</li>
                                            <li>Délai de 2 minutes</li>
                                            <li>Fermeture des volets des chambres</li>
                                            <li>Réduction de l'éclairage général</li>
                                        </ol>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <h5><i class="fas fa-sun text-warning"></i> Scénario "Réveil progressif"</h5>
                                        <p>Ouverture douce pour un réveil naturel :</p>
                                        <ol>
                                            <li>Ouverture partielle (20%) des volets de chambre</li>
                                            <li>Attente de 10 minutes</li>
                                            <li>Ouverture à 50%</li>
                                            <li>Activation progressive de l'éclairage si luminosité insuffisante</li>
                                        </ol>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <h5><i class="fas fa-shield-alt text-primary"></i> Scénario "Simulation de présence"</h5>
                                        <p>Sécurité pendant vos absences :</p>
                                        <ol>
                                            <li>Ouvertures/fermetures à heures variables</li>
                                            <li>Activation aléatoire dans différentes pièces</li>
                                            <li>Couplage avec l'éclairage</li>
                                            <li>Pattern différent chaque jour</li>
                                        </ol>
                                    </div>
                                </div>
                                
                                <div class="alert alert-info mt-3">
                                    <i class="fas fa-lightbulb"></i> <strong>Conseil :</strong> Combinez la gestion des volets avec celle de l'éclairage et du chauffage pour optimiser le confort et les économies d'énergie. Par exemple, en hiver, un scénario peut fermer les volets et augmenter légèrement le chauffage à la tombée de la nuit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="guide-section mt-5">
                <h3>Gestion avancée et dépannage</h3>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h4>Calibration précise</h4>
                        <p>Pour les volets avec positionnement :</p>
                        <ol>
                            <li>Accédez au menu "Calibration" du module</li>
                            <li>Lancez la procédure de calibration automatique :
                                <ul>
                                    <li>Montée complète jusqu'en butée</li>
                                    <li>Descente complète jusqu'en butée</li>
                                    <li>Mesure du temps exact de course</li>
                                </ul>
                            </li>
                            <li>Ajustez manuellement si nécessaire :
                                <ul>
                                    <li>Position fermée (0%)</li>
                                    <li>Position ouverte (100%)</li>
                                    <li>Positions intermédiaires favorites</li>
                                </ul>
                            </li>
                            <li>Testez le positionnement à différentes valeurs</li>
                            <li>Sauvegardez la calibration</li>
                        </ol>
                    </div>
                    <div class="col-md-6">
                        <h4>Problèmes courants et solutions</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Problème</th>
                                    <th>Cause possible</th>
                                    <th>Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Le volet s'arrête avant la position finale</td>
                                    <td>Temps de course mal configuré</td>
                                    <td>Recalibrer le temps de course total</td>
                                </tr>
                                <tr>
                                    <td>Sens de rotation inversé</td>
                                    <td>Câblage moteur inversé</td>
                                    <td>Activer l'option "inverser le sens" dans la configuration</td>
                                </tr>
                                <tr>
                                    <td>Positionnement imprécis</td>
                                    <td>Glissement ou calibration inexacte</td>
                                    <td>Relancer la calibration complète</td>
                                </tr>
                                <tr>
                                    <td>Le volet ne répond pas</td>
                                    <td>Protection thermique active</td>
                                    <td>Laisser refroidir le moteur et vérifier s'il n'y a pas de blocage mécanique</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div class="alert alert-warning mt-3">
                            <i class="fas fa-exclamation-triangle"></i> <strong>Attention :</strong> En cas de coupure de courant, certains moteurs peuvent perdre leur position. Une recalibration automatique s'effectuera au prochain cycle complet.
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h4><i class="fas fa-film text-primary"></i> Vidéo tutoriel</h4>
                            <p>Organisation optimale des pièces</p>
                            <button class="btn btn-outline-primary mt-2" onclick="showModuleVideo('VR')"><i class="fas fa-play-circle"></i> Voir vidéo</button>
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
                    <i class="fas fa-check-circle"></i> Félicitations ! Vous savez maintenant comment configurer et automatiser vos volets roulants avec le système TIS.
                </div>
                <p>L'automatisation des volets est un excellent moyen d'améliorer le confort et l'efficacité énergétique de votre maison.</p>
            </div>
    `;
}

