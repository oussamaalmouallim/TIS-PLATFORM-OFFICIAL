document.addEventListener('DOMContentLoaded', () => {
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGUYTANCvWBl3nCWwJWXKkeoGVIKewxdm4N_XeGAKg_FT5RTAAzD6OcCUz8aq0mP1K/exec';
const form = document.getElementById('feedback-form');

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

