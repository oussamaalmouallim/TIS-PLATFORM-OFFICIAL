document.addEventListener('DOMContentLoaded', () => {
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_dtHiqFggqFGMRNYoub9Crj9TS7I-J_Q-aOrRDe6JEcM8sbn0d7oH-cxomnFs6gH4Kg/exec';
const form = document.getElementById('tech-feedback-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault(); // Empêche le rechargement de la page

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      alert("Merci pour votre retour  !");
      form.reset(); // Réinitialise le formulaire après l'envoi réussi
    })
    .catch(error => {
      console.error('Erreur !', error.message);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    });
  });
}
});

