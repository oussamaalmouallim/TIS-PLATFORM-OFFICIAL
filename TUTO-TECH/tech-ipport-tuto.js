// Fonction pour charger le tutoriel de câblage du module IP Port
function loadIPPortWiringTutorial() {
    const container = document.getElementById('tutorial-container');
    container.innerHTML = `
        <div class="tutorial-section">
            <h3>Câblage du module IP Port</h3>
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <img src="images/IP-PORT.png" alt="Schéma de câblage IP Port" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p>Le module IP Port est la passerelle entre le réseau TIS Bus et votre réseau IP local. Il permet le contrôle du système via réseau Ethernet, l'application mobile et la tablette.</p>
                    <p>Ce tutoriel détaille le câblage et la configuration matérielle du module IP Port.</p>
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
                                <li>Alimentation: 12V DC via TIS Bus ou connecteur dédié</li>
                                <li>Consommation: 120mA (typique), 200mA (max)</li>
                                <li>Interface réseau: Ethernet 10/100 Mbps (RJ45)</li>
                                <li>Protocoles supportés: TCP/IP, UDP, HTTP, HTTPS</li>
                                <li>Sécurité: TLS 1.2, authentification par clé</li>
                                <li>Montage sur rail DIN (3 modules)</li>
                                <li>Connexion TIS Bus: bornier débrochable</li>
                                <li>Mémoire tampon intégrée</li>
                                <li>Processeur: 32-bit ARM Cortex M4</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5>Fonctionnalités principales</h5>
                            <ul>
                                <li>Passerelle TIS Bus vers réseau IP</li>
                                <li>Serveur web intégré pour configuration</li>
                                <li>Support API pour intégrations tierces</li>
                                <li>Mise à jour firmware à distance</li>
                                <li>Connexion à TIS Cloud pour accès distant</li>
                                <li>Journalisation des événements système</li>
                                <li>Diagnostic du réseau TIS Bus</li>
                                <li>Plusieurs modes de fonctionnement (maître/esclave)</li>
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
                            <h4 class="mb-0">Étapes de câblage</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Connexion au TIS Bus</h5>
                                    <ol>
                                        <li>Coupez l'alimentation générale du système</li>
                                        <li>Localisez le bornier TIS Bus sur le module</li>
                                        <li>Connectez les 4 fils du TIS Bus en respectant le code couleur:
                                            <ul>
                                                <li><span class="color-dot red"></span> Rouge: +12V</li>
                                                <li><span class="color-dot black"></span> Noir: GND (masse)</li>
                                                <li><span class="color-dot yellow"></span> Jaune: DATA A</li>
                                                <li><span class="color-dot green"></span> Vert: DATA B</li>
                                            </ul>
                                        </li>
                                        <li>Pour les grandes installations, utilisez l'entrée d'alimentation dédiée:
                                            <ul>
                                                <li>Connectez un bloc d'alimentation 12V DC (500mA min.)</li>
                                                <li>Respectez la polarité (+/-)</li>
                                            </ul>
                                        </li>
                                        <li>Si ce module est en fin de ligne, activez la résistance de terminaison</li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Connexion au réseau Ethernet</h5>
                                    <ol>
                                        <li>Localisez le port Ethernet RJ45 sur le module</li>
                                        <li>Connectez un câble Ethernet Cat5e ou supérieur</li>
                                        <li>Reliez l'autre extrémité à un switch/routeur de votre réseau local</li>
                                        <li>Pour une connexion PoE (si supportée):
                                            <ul>
                                                <li>Utilisez un switch PoE ou injecteur compatible</li>
                                                <li>Configurez le commutateur pour désactiver l'alimentation TIS Bus</li>
                                            </ul>
                                        </li>
                                        <li>Vérifiez les voyants d'activité sur le port Ethernet:
                                            <ul>
                                                <li>LED verte fixe: connexion établie</li>
                                                <li>LED jaune clignotante: trafic de données</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-info mt-3">
                                <i class="fas fa-lightbulb"></i> <strong>Conseil:</strong> Positionnez le module IP Port le plus près possible du routeur/switch réseau pour minimiser la longueur du câble Ethernet et éviter les interférences.
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
                                                <th>Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1-6</td>
                                                <td>Adresse TIS Bus</td>
                                                <td>Configuration binaire (ON=1, OFF=0)</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Résistance terminaison</td>
                                                <td>ON: activée (si fin de ligne)</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Mode de réinitialisation</td>
                                                <td>ON: permet reset usine avec bouton RESET</td>
                                            </tr>
                                            <tr>
                                                <td>9 (si présent)</td>
                                                <td>Mode DHCP</td>
                                                <td>ON: DHCP activé, OFF: IP statique</td>
                                            </tr>
                                            <tr>
                                                <td>10 (si présent)</td>
                                                <td>Mode maître/esclave</td>
                                                <td>ON: maître, OFF: esclave</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <h5>Indicateurs LED</h5>
                                    <ul>
                                        <li><strong>POWER</strong>: Alimentation correcte</li>
                                        <li><strong>BUS</strong>: Activité sur le TIS Bus</li>
                                        <li><strong>LAN</strong>: Connexion réseau établie</li>
                                        <li><strong>ACT</strong>: Activité réseau</li>
                                        <li><strong>STATUS</strong>: État du module
                                            <ul>
                                                <li>Fixe: fonctionnement normal</li>
                                                <li>Clignotement lent: initialisation</li>
                                                <li>Clignotement rapide: erreur</li>
                                            </ul>
                                        </li>
                                        <li><strong>CLOUD</strong>: Connexion au service TIS Cloud (si équipé)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h5>Boutons de contrôle</h5>
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Bouton</th>
                                                <th>Action brève</th>
                                                <th>Action maintenue (5+ sec)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>RESET</td>
                                                <td>Redémarrage du module</td>
                                                <td>Réinitialisation aux paramètres d'usine (si DIP8=ON)</td>
                                            </tr>
                                            <tr>
                                                <td>LAN RESET (si présent)</td>
                                                <td>Réinitialisation des paramètres réseau</td>
                                                <td>Retour à DHCP</td>
                                            </tr>
                                            <tr>
                                                <td>PAIR (si présent)</td>
                                                <td>Mode appairage pour TIS Cloud</td>
                                                <td>Suppression des appairages existants</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Configuration réseau initiale</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Configuration DHCP (recommandée pour débuter)</h5>
                                    <ol>
                                        <li>Positionnez le commutateur DHCP sur ON (si présent)</li>
                                        <li>Redémarrez le module avec le bouton RESET</li>
                                        <li>Le module obtient automatiquement une adresse IP</li>
                                        <li>Utilisez l'application TIS DEVsearch pour détecter le module:
                                            <ul>
                                                <li>Lancez DEVsearch sur un ordinateur du même réseau</li>
                                                <li>Allez dans "Découverte réseau"</li>
                                                <li>Le module apparaît avec son adresse IP</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div class="col-md-6">
                                    <h5>Configuration IP statique</h5>
                                    <ol>
                                        <li>Avec DHCP d'abord:
                                            <ul>
                                                <li>Connectez-vous à l'interface web du module</li>
                                                <li>Configurez une IP statique dans les paramètres</li>
                                                <li>Appliquez et redémarrez</li>
                                            </ul>
                                        </li>
                                        <li>Sans DHCP (configuration directe):
                                            <ul>
                                                <li>Positionnez le commutateur DHCP sur OFF (si présent)</li>
                                                <li>Connectez un câble réseau directement entre l'ordinateur et le module</li>
                                                <li>Configurez l'ordinateur sur IP 192.168.1.100</li>
                                                <li>Accédez au module sur 192.168.1.250 (IP par défaut)</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="alert alert-warning mt-3">
                                <i class="fas fa-exclamation-triangle"></i> <strong>Important:</strong> Pour le déploiement final, il est fortement recommandé d'attribuer une adresse IP statique au module, soit par réservation DHCP dans le routeur, soit par configuration directe dans le module.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tutorial-section mt-5">
            <h3>Considérations de sécurité</h3>
            
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Sécurité locale</h5>
                                    <ul>
                                        <li>Changez le mot de passe par défaut</li>
                                        <li>Créez des comptes utilisateurs distincts avec privilèges adaptés</li>
                                        <li>Utilisez HTTPS pour l'interface d'administration</li>
                                        <li>Limitez l'accès au module depuis le réseau:
                                            <ul>
                                                <li>Utilisez un VLAN dédié pour la domotique (recommandé)</li>
                                                <li>Configurez un filtrage IP dans le module</li>
                                                <li>Configurez le pare-feu du routeur</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h5>Accès à distance</h5>
                                    <ul>
                                        <li>Privilégiez la connexion via TIS Cloud (sécurisée):
                                            <ul>
                                                <li>Tunnel chiffré end-to-end</li>
                                                <li>Authentification forte</li>
                                                <li>Pas d'ouverture de port sur le routeur</li>
                                            </ul>
                                        </li>
                                        <li>Si vous configurez un accès direct:
                                            <ul>
                                                <li>Utilisez un VPN plutôt qu'une redirection de port</li>
                                                <li>Activez l'authentification à deux facteurs</li>
                                                <li>Limitez le nombre de tentatives de connexion</li>
                                                <li>Configurez la journalisation des connexions</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Vous maîtrisez maintenant le câblage et la configuration du module IP Port !
            </div>
            <p>Ce module est la clé de votre système domotique connecté. Une configuration minutieuse garantira un fonctionnement fiable et sécurisé.</p>
            <a href="https://www.tiscontrol.com/Uploads/manual/En/IP-COM-PORT.pdf" class="btn btn-secondary mt-3"><i class="fas fa-external-link-alt"></i> Télécharger le schéma complet en PDF</a>
        </div>
    `;
}