// Fonction pour charger le tutoriel de câblage du module 4 Zones
function load4ZonesWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module 4 Zones</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/4zones.png" alt="Schéma de câblage 4 Zones" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module 4 Zones est un contrôleur multifonction permettant de gérer jusqu'à 4 zones distinctes d'une installation domotique. Il offre des entrées et sorties multiples pour une gestion complète par zone.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle de ce module polyvalent.</p>
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
                                <li>Consommation: 50mA (repos), 180mA (toutes zones actives)</li>
                                <li>Nombre de zones: 4 indépendantes</li>
                                <li>Par zone:
                                    <ul>
                                        <li>2 sorties relais (contact sec 10A)</li>
                                        <li>1 sortie variable 0-10V</li>
                                        <li>4 entrées numériques</li>
                                        <li>1 entrée analogique</li>
                                    </ul>
                                </li>
                                <li>Montage sur rail DIN (6 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Protection contre les courts-circuits</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Applications principales</h5>
                            <ul>
                                <li><strong>Contrôle d'éclairage multi-zones</strong>:
                                    <ul>
                                        <li>Commutation ON/OFF via relais</li>
                                        <li>Variation avec sortie 0-10V</li>
                                        <li>Contrôle via boutons et capteurs</li>
                                    </ul>
                                </li>
                                <li><strong>Gestion climatique</strong>:
                                    <ul>
                                        <li>Chauffage/climatisation par zone</li>
                                        <li>Contrôle de ventilation</li>
                                        <li>Gestion de volets/stores</li>
                                    </ul>
                                </li>
                                <li><strong>Automatisation spécialisée</strong>:
                                    <ul>
                                        <li>Irrigation multizone</li>
                                        <li>Contrôle d'accès</li>
                                        <li>Supervision d'équipements techniques</li>
                                    </ul>
                                </li>
                            </ul>
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
                            <h4 class="mb-0">Connexion au TIS Bus</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
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
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Dans les installations étendues, une alimentation auxiliaire peut être nécessaire. Utilisez le bornier d'alimentation dédié (généralement marqué PWR) avec une alimentation 12V DC régulée (minimum 500mA).
                                    </div>
                                    
                                    <div class="alert alert-info mt-3">
                                        <i class="fas fa-info-circle"></i> <strong>Conseil:</strong> Pour garantir une communication fiable, limitez la longueur totale du TIS Bus à 1000m. Pour les distances supérieures, utilisez des répéteurs ou des extendeurs IP.
                                    </div>
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
                            <h4 class="mb-0">Câblage des zones</h4>
                        </div>
                        <div class="card-body">
                            <p>Chaque zone dispose de ses propres connexions regroupées dans un bloc de borniers. Le module est organisé en 4 blocs identiques (Zone 1 à 4).</p>
                            
                            <h5 class="mt-3">Borniers de sortie</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Sorties relais (par zone)</h6>
                                    <ul>
                                        <li><strong>Relais 1</strong>: 3 bornes (C, NO, NC)
                                            <ul>
                                                <li>C: Commun</li>
                                                <li>NO: Normalement Ouvert</li>
                                                <li>NC: Normalement Fermé</li>
                                                <li>Capacité: 10A résistif, 5A inductif</li>
                                            </ul>
                                        </li>
                                        <li><strong>Relais 2</strong>: 3 bornes (C, NO, NC)
                                            <ul>
                                                <li>Mêmes caractéristiques que Relais 1</li>
                                                <li>Peut être configuré en pair avec Relais 1 pour contrôle de moteur</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6>Sortie analogique 0-10V (par zone)</h6>
                                    <ul>
                                        <li><strong>AO</strong>: Sortie 0-10V
                                            <ul>
                                                <li>Pour variateurs, vannes proportionnelles, etc.</li>
                                                <li>Capacité: 20mA max</li>
                                                <li>Précision: ±0.1V</li>
                                            </ul>
                                        </li>
                                        <li><strong>GND</strong>: Référence pour la sortie analogique</li>
                                        <li><strong>+12V</strong>: Alimentation auxiliaire (100mA max par zone)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Borniers d'entrée</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Entrées numériques (par zone)</h6>
                                    <ul>
                                        <li><strong>IN1 à IN4</strong>: Entrées numériques
                                            <ul>
                                                <li>Pour boutons poussoirs, interrupteurs, contacts secs</li>
                                                <li>Fonctionnent avec contacts secs ou signaux 12V</li>
                                                <li>Temps d'acquisition: 20ms</li>
                                                <li>Protection contre les rebonds intégrée</li>
                                            </ul>
                                        </li>
                                        <li><strong>COM</strong>: Commun pour entrées numériques</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6>Entrée analogique (par zone)</h6>
                                    <ul>
                                        <li><strong>AI</strong>: Entrée analogique
                                            <ul>
                                                <li>Pour capteurs, potentiomètres, etc.</li>
                                                <li>Plage d'entrée: 0-10V ou 4-20mA (configurable)</li>
                                                <li>Résolution: 10 bits</li>
                                                <li>Impédance d'entrée: 10kΩ</li>
                                            </ul>
                                        </li>
                                        <li><strong>GND</strong>: Référence pour l'entrée analogique</li>
                                        <li><strong>+12V</strong>: Alimentation pour capteurs (100mA max par zone)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Exemples de câblage par application</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Contrôle d'éclairage zonal</h5>
                                    <ol>
                                        <li><strong>Éclairage ON/OFF</strong>:
                                            <ul>
                                                <li>Relais 1 (C-NO): connexion à la phase d'éclairage</li>
                                                <li>Entrées IN1-IN2: boutons poussoirs connectés entre COM et IN</li>
                                            </ul>
                                        </li>
                                        <li><strong>Variation d'intensité (0-10V)</strong>:
                                            <ul>
                                                <li>Sortie AO: connexion à l'entrée de contrôle du variateur</li>
                                                <li>GND: référence du variateur</li>
                                                <li>Relais 1: alimentation du variateur (optionnel)</li>
                                                <li>Entrées IN3-IN4: boutons pour variation haut/bas</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Gestion climatique par zone</h5>
                                    <ol>
                                        <li><strong>Chauffage/Climatisation</strong>:
                                            <ul>
                                                <li>Relais 1: activer chauffage</li>
                                                <li>Relais 2: activer climatisation</li>
                                                <li>Entrée AI: sonde de température (configurer en 4-20mA ou 0-10V)</li>
                                                <li>Entrées IN1-IN2: ajustement manuel température</li>
                                            </ul>
                                        </li>
                                        <li><strong>Contrôle de vanne proportionnelle</strong>:
                                            <ul>
                                                <li>Sortie AO: commande de la vanne proportionnelle</li>
                                                <li>+12V/GND: alimentation de la vanne (si compatible)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <h5>Contrôle de volets roulants</h5>
                                    <ol>
                                        <li>Relais 1 (montée): C connecté à la phase, NO au fil de montée du moteur</li>
                                        <li>Relais 2 (descente): C connecté à la phase, NO au fil de descente du moteur</li>
                                        <li>Entrée IN1: bouton montée connecté entre COM et IN1</li>
                                        <li>Entrée IN2: bouton descente connecté entre COM et IN2</li>
                                        <li>Entrée AI (optionnelle): capteur de position</li>
                                        <li>Configurez l'interverrouillage des relais dans DEVsearch</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Système d'irrigation</h5>
                                    <ol>
                                        <li>Relais 1: électrovanne principale</li>
                                        <li>Relais 2: pompe</li>
                                        <li>Sortie AO: contrôle de pression (si applicable)</li>
                                        <li>Entrée AI: capteur d'humidité du sol</li>
                                        <li>Entrée IN1: démarrage manuel</li>
                                        <li>Entrée IN2: arrêt forcé</li>
                                        <li>Entrées IN3-IN4: sélection de programme</li>
                                    </ol>
                                </div>
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
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Commutateur</th>
                                                <th>Fonction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1-6</td>
                                                <td>Adresse du module sur le TIS Bus (binaire)</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Résistance de terminaison (ON si en fin de ligne)</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Mode de configuration (OFF: normal, ON: programmation)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <h5 class="mt-4">Commutateurs de configuration des zones (si présents)</h5>
                                    <p>Certains modèles possèdent des commutateurs supplémentaires:</p>
                                    <ul>
                                        <li>Sélection du type d'entrée analogique (0-10V/4-20mA)</li>
                                        <li>Configuration des relais (indépendants/appariés)</li>
                                        <li>Mode d'entrée numérique (contact sec/niveau)</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Voyants LED</h5>
                                    <ul>
                                        <li><strong>PWR</strong>: Alimentation du module</li>
                                        <li><strong>BUS</strong>: Communication TIS Bus active</li>
                                        <li><strong>ERR</strong>: Erreur système</li>
                                        <li><strong>Z1-Z4</strong>: État des zones (une LED par zone)
                                            <ul>
                                                <li>Éteinte: zone inactive</li>
                                                <li>Allumée: zone active</li>
                                                <li>Clignotante: zone en erreur</li>
                                            </ul>
                                        </li>
                                        <li><strong>LEDs relais</strong>: État de chaque relais</li>
                                        <li><strong>LEDs entrées</strong>: État des entrées numériques</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">Boutons de contrôle</h5>
                                    <ul>
                                        <li><strong>RESET</strong>: Redémarrage du module</li>
                                        <li><strong>TEST</strong>: Mode test des sorties</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage</h3>
            
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
                                        <td>Module non détecté sur le TIS Bus</td>
                                        <td>
                                            <ul>
                                                <li>Adressage incorrect</li>
                                                <li>Câblage TIS Bus défectueux</li>
                                                <li>Alimentation insuffisante</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez les commutateurs d'adresse</li>
                                                <li>Contrôlez la continuité et la polarité du TIS Bus</li>
                                                <li>Mesurez la tension d'alimentation (12V±5%)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Une zone ne répond pas</td>
                                        <td>
                                            <ul>
                                                <li>Configuration logicielle incorrecte</li>
                                                <li>Surcharge sur les sorties</li>
                                                <li>Protection thermique active</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez la configuration dans DEVsearch</li>
                                                <li>Contrôlez les charges connectées</li>
                                                <li>Laissez refroidir le module si surchauffe</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Entrées non réactives</td>
                                        <td>
                                            <ul>
                                                <li>Mauvaise connexion</li>
                                                <li>Tension d'entrée incorrecte</li>
                                                <li>Configuration d'entrée erronée</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez les connexions aux borniers</li>
                                                <li>Testez les entrées avec le mode diagnostic</li>
                                                <li>Vérifiez la configuration du type d'entrée</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module 4 Zones !
            </div>
            <p>Ce module polyvalent est idéal pour contrôler des systèmes complexes de manière structurée et modulaire.</p>
            <a href="https://www.tiscontrol.com/Uploads/datasheet/En/TIS-4DL-IN.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}