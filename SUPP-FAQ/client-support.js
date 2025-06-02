// Fonctions de support pour le client
function submitFeedback() {
    // Simuler l'envoi du formulaire
    showConfirmation("Votre retour a été envoyé avec succès !");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
    modal.hide();
}

function submitTrainingRequest() {
    // Simuler l'envoi de la demande de formation
    showConfirmation("Votre demande de formation a été envoyée. Nous vous contacterons très bientôt !");
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('trainingModal'));
    modal.hide();
}

