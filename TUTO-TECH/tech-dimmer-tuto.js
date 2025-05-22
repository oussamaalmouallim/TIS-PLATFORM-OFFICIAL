// Fonction pour charger le tutoriel de câblage du module Variateur
function loadVariateurWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module Variateur</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/DIM.png" alt="Schéma de câblage Variateur" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module Variateur TIS permet le contrôle d'intensité des éclairages compatibles. Il prend en charge différents types de charges et offre un contrôle précis de la gradation.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle du module Variateur.</p>
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
                                <li>Consommation: 40mA (repos), 80mA (tous canaux actifs)</li>
                                <li>Nombre de canaux: 2 ou 4 selon modèle</li>
                                <li>Puissance par canal: 300W max (charge résistive)</li>
                                <li>Tension de sortie: 230V AC</li>
                                <li>Montage sur rail DIN (4 ou 6 modules selon modèle)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Protection thermique intégrée</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Types de charges supportées</h5>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Type de charge</th>
                                        <th>Compatibilité</th>
                                        <th>Puissance max</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Incandescente / Halogène 230V</td>
                                        <td>Excellente</td>
                                        <td>300W</td>
                                    </tr>
                                    <tr>
                                        <td>Halogène TBT avec transfo électronique</td>
                                        <td>Bonne</td>
                                        <td>250W</td>
                                    </tr>
                                    <tr>
                                        <td>Halogène TBT avec transfo ferromagnétique</td>
                                        <td>Moyenne</td>
                                        <td>200W</td>
                                    </tr>
                                    <tr>
                                        <td>LED dimmable (compatible)</td>
                                        <td>Bonne*</td>
                                        <td>150W</td>
                                    </tr>
                                    <tr>
                                        <td>Fluorescent compact dimmable</td>
                                        <td>Limitée*</td>
                                        <td>100W</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="small">* Vérifiez la compatibilité avec la technologie de gradation du module</p>
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
                                                <li><span class="color-dot brown"></span> Marron: +12V</li>
                                                <li><span class="color-dot Orange"></span> Orange: GND (masse)</li>
                                                <li><span class="color-dot Blue"></span> Bleu: DATA -</li>
                                                <li><span class="color-dot green"></span> Vert: DATA +</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez que les fils sont bien serrés dans les borniers</li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion des sorties</h5>
                                    <ol>
                                        <li>Chaque sortie possède 2 bornes:
                                            <ul>
                                                <li>L: Phase d'entrée</li>
                                                <li>↓: Phase modulée vers la charge</li>
                                            </ul>
                                        </li>
                                        <li>Pour un éclairage dimmable:
                                            <ul>
                                                <li>Connectez la phase d'alimentation à la borne L</li>
                                                <li>Connectez la borne ↓ à la charge (lampe)</li>
                                                <li>Connectez le neutre directement à la charge</li>
                                            </ul>
                                        </li>
                                        <li>Respectez la charge minimale par canal (généralement 20W)</li>
                                        <li>Pour les charges inférieures, utilisez un module d'interface adapté</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Attention:</strong> Les modules variateurs peuvent chauffer en fonctionnement, prévoyez un espace suffisant autour du module et assurez une ventilation adéquate du tableau électrique.
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
                                    <h5>Configuration des commutateurs</h5>
                                    <ol>
                                        <li>Commutateurs d'adresse (1-6):
                                            <ul>
                                                <li>Définissent l'adresse du module sur le TIS Bus</li>
                                                <li>Configuration binaire (ON=1, OFF=0)</li>
                                            </ul>
                                        </li>
                                        <li>Commutateur de terminaison (7):
                                            <ul>
                                                <li>ON: activée (si fin de ligne)</li>
                                            </ul>
                                        </li>
                                        <li>Commutateurs de sélection du mode de gradation (sur le côté ou en façade):
                                            <ul>
                                                <li>Position LE/TR: Leading Edge (adapté aux charges résistives)</li>
                                                <li>Position TE/RC: Trailing Edge (adapté aux LED et transfo électroniques)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Potentiomètres de réglage (si présents)</h5>
                                    <ul>
                                        <li><strong>MIN</strong>: Niveau minimum de gradation (ajustez pour éviter les scintillements)</li>
                                        <li><strong>MAX</strong>: Niveau maximum de gradation</li>
                                        <li><strong>FADE</strong>: Vitesse de variation (transition douce)</li>
                                    </ul>
                                    
                                    <h5 class="mt-4">LED d'état</h5>
                                    <ul>
                                        <li><strong>LED POWER</strong>: Indique l'alimentation du module</li>
                                        <li><strong>LED BUS</strong>: Clignote lors des communications</li>
                                        <li><strong>LED ERROR</strong>: Indique une erreur (surcharge, surchauffe)</li>
                                        <li><strong>LED par canal</strong>: Indique le niveau d'intensité (luminosité variable)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configurations spécifiques par type de charge</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Éclairage incandescent / halogène 230V</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur LE/TR (Leading Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à 5-10% pour un démarrage fluide</li>
                                        <li>Laissez le potentiomètre MAX à 100%</li>
                                        <li>Charge minimale: 20W par canal</li>
                                        <li>Charge maximale: 300W par canal</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>LED dimmables</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur TE/RC (Trailing Edge)</li>
                                        <li>Ajustez soigneusement le potentiomètre MIN (généralement 15-20%)</li>
                                        <li>Testez pour éliminer tout scintillement au niveau bas</li>
                                        <li>Charge minimale: vérifiez les spécifications des LED</li>
                                        <li>Charge maximale: 150W par canal</li>
                                        <li>Utilisez uniquement des LED certifiées dimmables</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <h5>Transformateurs électroniques</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur TE/RC (Trailing Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à environ 10-15%</li>
                                        <li>Charge minimale: selon spécifications du transformateur</li>
                                        <li>Charge maximale: 250W par canal</li>
                                        <li>Vérifiez la compatibilité du transformateur avec la gradation</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Transformateurs ferromagnétiques</h5>
                                    <ol>
                                        <li>Positionnez le sélecteur de mode sur LE/TR (Leading Edge)</li>
                                        <li>Ajustez le potentiomètre MIN à environ 15-20%</li>
                                        <li>Charge minimale: 40W par canal</li>
                                        <li>Charge maximale: 200W par canal</li>
                                        <li>Ces transformateurs peuvent générer du bruit à certains niveaux</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-4">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Pour les installations complexes ou les charges mixtes, utilisez un canal séparé pour chaque type de charge et configurez chacun de façon optimale.
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
                                        <td>Scintillement des LED</td>
                                        <td>
                                            <ul>
                                                <li>Niveau minimum trop bas</li>
                                                <li>Mode de gradation incorrect</li>
                                                <li>LED non compatible</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Augmentez le niveau minimum (potentiomètre MIN)</li>
                                                <li>Passez en mode TE/RC (Trailing Edge)</li>
                                                <li>Vérifiez la compatibilité des LED</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pas de gradation, juste ON/OFF</td>
                                        <td>
                                            <ul>
                                                <li>Charge non compatible</li>
                                                <li>Plage de gradation trop étroite</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Vérifiez que la charge est dimmable</li>
                                                <li>Ajustez les potentiomètres MIN et MAX</li>
                                                <li>Vérifiez la charge minimale (>20W généralement)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Surchauffe du module</td>
                                        <td>
                                            <ul>
                                                <li>Surcharge</li>
                                                <li>Ventilation insuffisante</li>
                                                <li>Température ambiante élevée</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Réduisez la charge sur les canaux</li>
                                                <li>Améliorez la ventilation du tableau</li>
                                                <li>Espacez les modules générant de la chaleur</li>
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
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module Variateur TIS !
            </div>
            <p>Pour un fonctionnement optimal, n'oubliez pas de finaliser la configuration logicielle dans DEVsearch après le câblage.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/DIM-6CH-2A.pdf" target="_blank" class="btn btn-primary mt-3">
                <i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF
            </a>
            </div>
    `;
}