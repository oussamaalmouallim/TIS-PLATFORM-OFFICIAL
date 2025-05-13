function loadCablageTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Principes fondamentaux du câblage domotique</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="schema_interface.png" alt="Schéma d'interface" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le câblage est l'élément fondamental de toute installation domotique TIS. Un câblage bien réalisé garantit la fiabilité et les performances du système.</p>
                    <p>Ce tutoriel vous guidera à travers les bonnes pratiques et les techniques essentielles pour réaliser un câblage professionnel.</p>
                </div>
            </div>
            
            <div class="card mb-5">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Topologies de câblage</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-minus fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie bus</h5>
                                    <p>Tous les modules sont connectés en série sur une ligne principale</p>
                                    <p class="small text-muted">Avantages: Simple, économique en câble</p>
                                    <p class="small text-muted">Limites: Une rupture peut affecter tous les modules en aval</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-star fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie étoile</h5>
                                    <p>Tous les modules sont reliés directement à un point central</p>
                                    <p class="small text-muted">Avantages: Isolation des défauts, maintenance simplifiée</p>
                                    <p class="small text-muted">Limites: Consommation importante de câble</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body text-center">
                                    <h5><i class="fas fa-project-diagram fa-2x mb-3 text-primary"></i></h5>
                                    <h5>Topologie hybride</h5>
                                    <p>Combinaison de bus et d'étoiles pour optimiser l'installation</p>
                                    <p class="small text-muted">Avantages: Flexibilité, compromis optimal</p>
                                    <p class="small text-muted">Limites: Nécessite une planification plus rigoureuse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Le TIS BUS - Caractéristiques et câblage</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Spécifications du TIS BUS</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Caractéristiques techniques</h5>
                                    <ul>
                                        <li>Type de bus: RS-485 modifié</li>
                                        <li>Vitesse: 115200 bauds</li>
                                        <li>Distance maximale totale: 1000m</li>
                                        <li>Nombre maximum de périphériques: 255</li>
                                        <li>Tension d'alimentation: 12V DC</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Câble recommandé</h5>
                                    <ul>
                                        <li>Type: Câble 4 conducteurs torsadés</li>
                                        <li>Section: 0,75mm² minimum</li>
                                        <li>Blindage: Recommandé, surtout en environnement perturbé</li>
                                        <li>Résistance maximale par conducteur: 30 Ohms/km</li>
                                        <li>Capacité entre conducteurs: < 100pF/m</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Code couleur standard TIS BUS</h5>
                            <div class="row">
                                <div class="col-md-8">
                                    <ol>
                                        <li>Installez une résistance de 120 Ohms entre DATA A et DATA B (jaune et vert)</li>
                                        <li>Placez ces résistances uniquement aux deux extrémités physiques du bus</li>
                                        <li>Pour la topologie en étoile:
                                            <ul>
                                                <li>Installez des résistances à chaque extrémité de branche</li>
                                                <li>Utilisez un répéteur/hub pour les installations complexes</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-4">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> L'absence ou le mauvais placement des résistances de terminaison peut causer des erreurs de communication intermittentes difficiles à diagnostiquer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Techniques de câblage professionnelles</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexions aux modules</h5>
                                    <ol>
                                        <li>Dénudez le câble sur environ 6mm</li>
                                        <li>Insérez entièrement le conducteur dans le bornier</li>
                                        <li>Serrez fermement la vis du bornier sans excès</li>
                                        <li>Vérifiez que le conducteur ne peut pas être retiré en tirant légèrement</li>
                                        <li>Laissez une petite boucle de marge pour chaque conducteur</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Système de repérage</h5>
                                    <ol>
                                        <li>Étiquetez chaque extrémité du câble</li>
                                        <li>Indiquez l'origine et la destination</li>
                                        <li>Utilisez un système cohérent de numérotation</li>
                                        <li>Documentez le câblage dans le dossier technique</li>
                                        <li>Photographiez les installations complexes</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <h4>Installation des résistances de terminaison</h4>
                    
                    <div class="card">
                        <div class="card-body">
                            <p>Les résistances de terminaison sont essentielles pour éviter les réflexions de signal sur le TIS BUS:</p>
                            
                            <div class="row">
                                <div class="col-md-8">
                                    <ol>
                                        <li>Installez une résistance de 120 Ohms entre DATA A et DATA B (jaune et vert)</li>
                                        <li>Placez ces résistances uniquement aux deux extrémités physiques du bus</li>
                                        <li>Pour la topologie en étoile:
                                            <ul>
                                                <li>Installez des résistances à chaque extrémité de branche</li>
                                                <li>Utilisez un répéteur/hub pour les installations complexes</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-4">
                                    <div class="alert alert-warning">
                                        <i class="fas fa-exclamation-triangle"></i> L'absence ou le mauvais placement des résistances de terminaison peut causer des erreurs de communication intermittentes difficiles à diagnostiquer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Installation des modules spécifiques</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Modules d'alimentation</h4>
                        </div>
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <img src="schema_alim.png" alt="Schéma d'alimentation" class="img-fluid rounded shadow">
                                </div>
                                <div class="col-md-6">
                                    <h5>Points clés d'installation:</h5>
                                    <ul>
                                        <li>Placez les alimentations à proximité des charges importantes</li>
                                        <li>Calculez la consommation totale et prévoyez 30% de marge</li>
                                        <li>Vérifiez la tension aux points les plus éloignés (min. 11V)</li>
                                        <li>Pour les longues distances, utilisez plusieurs alimentations</li>
                                        <li>Connectez toujours les masses (GND) entre les différentes alimentations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-primary text-white">
                                    <h4 class="mb-0">Modules relais</h4>
                                </div>
                                <div class="card-body">
                                    <img src="schema_relais.png" alt="Schéma relais" class="img-fluid rounded mb-3 shadow">
                                    <h5>Recommandations:</h5>
                                    <ul>
                                        <li>Respectez la charge maximale supportée par canal</li>
                                        <li>Utilisez des contacteurs externes pour les charges inductives importantes</li>
                                        <li>Séparez les circuits de puissance et les circuits de commande</li>
                                        <li>Utilisez des sections de câble adaptées à l'intensité</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-primary text-white">
                                    <h4 class="mb-0">Modules variateurs</h4>
                                </div>
                                <div class="card-body">
                                    <img src="schema_variateur.png" alt="Schéma variateur" class="img-fluid rounded mb-3 shadow">
                                    <h5>Points d'attention:</h5>
                                    <ul>
                                        <li>Vérifiez la compatibilité avec le type d'éclairage</li>
                                        <li>Respectez la charge minimale et maximale</li>
                                        <li>Installez à distance des sources de chaleur</li>
                                        <li>Assurez une ventilation suffisante</li>
                                        <li>Pour les LED, utilisez uniquement des modèles dimmables compatibles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Dépannage et diagnostic</h3>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Problèmes courants et solutions</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Problèmes de communication</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Symptôme</th>
                                                <th>Causes possibles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Communication intermittente</td>
                                                <td>
                                                    <ul>
                                                        <li>Résistances de terminaison manquantes</li>
                                                        <li>Câble trop long ou de mauvaise qualité</li>
                                                        <li>Interférences électromagnétiques</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Aucune communication</td>
                                                <td>
                                                    <ul>
                                                        <li>Câble coupé ou déconnecté</li>
                                                        <li>Polarité inversée</li>
                                                        <li>Module défectueux ou mal adressé</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h5>Problèmes d'alimentation</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Symptôme</th>
                                                <th>Causes possibles</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Redémarrages aléatoires</td>
                                                <td>
                                                    <ul>
                                                        <li>Chute de tension sur le bus</li>
                                                        <li>Alimentation sous-dimensionnée</li>
                                                        <li>Section de câble insuffisante</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Module non alimenté</td>
                                                <td>
                                                    <ul>
                                                        <li>Problème d'alimentation</li>
                                                        <li>Disjoncteur déclenché</li>
                                                        <li>Connexion défectueuse</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <h5 class="mt-4">Outils de diagnostic</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul>
                                        <li><strong>Multimètre</strong>: Vérification des tensions et continuités</li>
                                        <li><strong>Testeur de bus</strong>: Analyse de la qualité de signal</li>
                                        <li><strong>DEVsearch</strong>: Monitoring et diagnostic logiciel</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <div class="alert alert-info">
                                        <i class="fas fa-lightbulb"></i> Astuce: Documentez systématiquement vos mesures et observations pour faciliter l'analyse des problèmes récurrents.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Félicitations ! Vous connaissez maintenant les principes fondamentaux du câblage domotique TIS.
            </div>
            <p>Pour approfondir vos connaissances, consultez les schémas détaillés de chaque module et participez à nos formations pratiques.</p>
            <a href="https://youtu.be/TBdjJbHCa3Y?si=RJ-RJpRrhTkYQKYC" target="_blank" class="btn btn-outline-primary btn-lg">
                <i class="fas fa-external-link-alt"></i> Voir un tutorial vidéo sur le câblage
            </a>
        </div>
    `;
}