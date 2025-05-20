// Fonction pour charger le tutoriel de câblage du module Relais
function loadRelaisWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module Relais</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/RCU20.png" alt="Schéma de câblage Relais" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module Relais est un composant essentiel pour le contrôle des circuits d'éclairage, des prises commandées et d'autres appareils électriques dans l'installation domotique TIS.</p>
                    <p>Ce tutoriel explique en détail le câblage du module Relais et sa configuration matérielle.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-secondary text-white">
                    <h4 class="mb-0">Caractéristiques techniques</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5>Spécifications</h5>
                            <ul>
                                <li>Alimentation: 12V DC via TIS Bus</li>
                                <li>Consommation: 30mA (repos), 150mA (tous relais actifs)</li>
                                <li>Nombre de sorties: 4 ou 8 selon modèle</li>
                                <li>Capacité de commutation: 16A par sortie (charge résistive)</li>
                                <li>Tension de commutation max: 250V AC</li>
                                <li>Montage sur rail DIN (4 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Types de charges supportées</h5>
                            <ul>
                                <li>Charges résistives: éclairage incandescent, chauffage (16A max)</li>
                                <li>Charges inductives: moteurs, transformateurs (10A max)</li>
                                <li>Charges capacitives: éclairage LED, fluo compact (6A max)</li>
                                <li>Charges spéciales: prévoir relais intermédiaire</li>
                            </ul>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> Pour les charges inductives importantes (moteurs, transformateurs), utilisez un relais intermédiaire ou un contacteur adapté.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Procédure de câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h4 class="mb-0">Étapes de câblage</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexion au TIS Bus</h5>
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module (généralement en haut)</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez que les fils sont bien serrés dans les borniers</li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion des sorties</h5>
                                    <ol>
                                        <li>Chaque sortie possède 3 bornes:
                                            <ul>
                                                <li>C: Commun</li>
                                                <li>NO: Normalement Ouvert</li>
                                                <li>NC: Normalement Fermé</li>
                                            </ul>
                                        </li>
                                        <li>Pour un éclairage standard:
                                            <ul>
                                                <li>Connectez la phase d'alimentation à la borne C</li>
                                                <li>Connectez la charge (lampe) à la borne NO</li>
                                                <li>Connectez le neutre directement à la charge</li>
                                            </ul>
                                        </li>
                                        <li>Pour un contrôle de volet roulant:
                                            <ul>
                                                <li>Utilisez deux sorties consécutives (montée/descente)</li>
                                                <li>Installez un verrouillage mécanique ou logiciel</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Utilisez des étiquettes pour identifier clairement chaque sortie. Documentez précisément l'affectation des sorties dans le schéma électrique.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration matérielle</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration des commutateurs DIP</h5>
                                    <ol>
                                        <li>Commutateurs 1 à 6 définissent l'adresse du module sur le TIS Bus:
                                            <ul>
                                                <li>Position ON = 1</li>
                                                <li>Position OFF = 0</li>
                                                <li>L'interrupteur 1 est le bit de poids faible</li>
                                            </ul>
                                        </li>
                                        <li>Le commutateur 7 active/désactive la résistance de terminaison (ON si module en fin de ligne)</li>
                                        <li>Le commutateur 8 est réservé pour usage futur (laisser sur OFF)</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>LED d'état et diagnostics</h5>
                                    <ul>
                                        <li><strong>LED POWER (verte)</strong>: Alimentation correcte</li>
                                        <li><strong>LED BUS (orange)</strong>: Clignote lors de communication sur le bus</li>
                                        <li><strong>LED ERROR (rouge)</strong>: Indique une erreur si allumée</li>
                                        <li><strong>LED des sorties</strong>: Indiquent l'état de chaque relais (ON/OFF)</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">Bouton de reset</h5>
                                    <p>Le bouton RESET permet de:</p>
                                    <ul>
                                        <li>Appui court: Redémarrer le module</li>
                                        <li>Appui 5 secondes: Réinitialisation des communications</li>
                                        <li>Appui 10 secondes + DIP8 ON: Réinitialisation d'usine</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Exemples de câblage courants</h3>
            
            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Éclairage simple ON/OFF</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez la phase au bornier C du relais</li>
                                <li>Connectez la borne NO à la lampe</li>
                                <li>Connectez le neutre directement à la lampe</li>
                                <li>Pour conserver l'interrupteur manuel:
                                    <ul>
                                        <li>Utilisez une entrée du module</li>
                                        <li>Connectez l'interrupteur entre +12V et l'entrée</li>
                                        <li>Utilisez DEVsearch pour associer l'entrée au relais</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Commande de prise électrique</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Connectez la phase au bornier C du relais</li>
                                <li>Connectez la borne NO à la phase de la prise</li>
                                <li>Connectez le neutre directement à la prise</li>
                                <li>Précautions importantes:
                                    <ul>
                                        <li>Vérifiez la capacité du relais (16A max)</li>
                                        <li>Utilisez un relais intermédiaire pour charges importantes</li>
                                        <li>Assurez-vous que la prise est bien identifiée comme "commandée"</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Volets roulants (2 relais)</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Utilisez 2 relais consécutifs (ex: 1 et 2)</li>
                                <li>Relais 1 (montée):
                                    <ul>
                                        <li>Borne C: Phase</li>
                                        <li>Borne NO: Fil de montée du moteur</li>
                                    </ul>
                                </li>
                                <li>Relais 2 (descente):
                                    <ul>
                                        <li>Borne C: Phase</li>
                                        <li>Borne NO: Fil de descente du moteur</li>
                                    </ul>
                                </li>
                                <li>Connectez le neutre directement au moteur</li>
                                <li>Activez le verrouillage dans DEVsearch pour empêcher l'activation simultanée</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>Commutation de circuits</h5>
                        </div>
                        <div class="card-body">
                            <ol>
                                <li>Utilisation des contacts NO et NC pour commutation:
                                    <ul>
                                        <li>Borne C: Signal source</li>
                                        <li>Borne NO: Sortie quand relais activé</li>
                                        <li>Borne NC: Sortie quand relais désactivé</li>
                                    </ul>
                                </li>
                                <li>Application: commutation d'antenne, sélection de source audio, etc.</li>
                                <li>Pour commutation sécuritaire:
                                    <ul>
                                        <li>Configurez le comportement par défaut (au démarrage)</li>
                                        <li>Définissez l'état en cas de perte de communication</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage du module Relais TIS !
            </div>
            <p>N'oubliez pas de documenter précisément l'emplacement et l'utilisation de chaque sortie dans le dossier technique de l'installation.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/RCU-24R20Z.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}