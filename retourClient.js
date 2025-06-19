
document.addEventListener('DOMContentLoaded', () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwGUYTANCvWBl3nCWwJWXKkeoGVIKewxdm4N_XeGAKg_FT5RTAAzD6OcCUz8aq0mP1K/exec';
  const form = document.getElementById('feedback-form');
  const submitBtn = document.getElementById('submit-btn'); // Récupère le bouton

  if (form && submitBtn) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Désactive le bouton et change le texte
      submitBtn.disabled = true;
      submitBtn.value = "Envoi en cours...";

      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        alert("Merci pour votre retour  !");
        form.reset();
      })
      .catch(error => {
        console.error('Erreur !', error.message);
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      })
      .finally(() => {
        // Réactive le bouton et remet le texte original
        submitBtn.disabled = false;
        submitBtn.value = "Submit";
      });
    });
  }
});
