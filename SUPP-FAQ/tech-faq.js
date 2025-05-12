const techFAQs = [
    {
        question: "Comment programmer un clavier Luna ?",
        answer: "Pour programmer un clavier Luna, connectez-vous d'abord au module avec DevSearch. Ensuite, accédez à l'onglet 'Programmation > Claviers'. Sélectionnez le modèle Luna et suivez l'assistant de configuration pour définir les fonctions des touches et les scénarios associés."
    },
    {
        question: "Comment configurer une passerelle IP ?",
        answer: "Pour configurer une passerelle IP, assurez-vous qu'elle est connectée au réseau TIS Bus. Dans DevSearch, allez dans 'Découverte de périphériques', localisez la passerelle, puis cliquez sur 'Configurer'. Définissez ensuite l'adresse IP (fixe ou DHCP) et les paramètres de port."
    },
    {
        question: "Comment calculer l'alimentation nécessaire pour une installation ?",
        answer: "Pour calculer l'alimentation, additionnez la consommation de tous les modules en mA. Prévoyez une marge de sécurité de 20%. Pour les grandes installations, répartissez l'alimentation avec plusieurs modules d'alimentation placés stratégiquement pour éviter les chutes de tension sur le bus."
    },
    {
        question: "Comment mettre à jour le firmware des modules ?",
        answer: "Utilisez DevSearch pour mettre à jour le firmware. Connectez-vous au système, allez dans 'Maintenance > Mises à jour firmware', sélectionnez les modules à mettre à jour et suivez les instructions. Ne débranchez pas l'alimentation pendant la mise à jour."
    },
    {
        question: "Comment diagnostiquer les problèmes de communication sur le TIS BUS ?",
        answer: "En cas de problèmes sur le TIS BUS, vérifiez d'abord le câblage (polarité, continuité), puis la présence des résistances de terminaison (120Ω) aux extrémités du bus. Utilisez l'outil de diagnostic dans DevSearch pour analyser le trafic et identifier les collisions ou les périphériques défectueux."
    },
    {
        question: "Comment configurer un variateur pour des LED ?",
        answer: "Pour configurer un variateur LED, accédez au module via DevSearch, puis dans 'Configuration > Variateurs'. Sélectionnez le type de charge 'LED compatible', réglez la courbe de gradation (généralement logarithmique pour les LED), le niveau minimum (pour éviter les scintillements) et maximum."
    },
    {
        question: "Quelle est la longueur maximale recommandée pour le TIS BUS ?",
        answer: "La longueur maximale recommandée est de 1000m pour l'ensemble du réseau. Au-delà, ou pour des installations complexes, utilisez des répéteurs de bus ou des extendeurs IP pour segmenter l'installation."
    }
];