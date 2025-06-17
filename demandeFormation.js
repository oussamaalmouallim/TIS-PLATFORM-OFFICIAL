document.addEventListener('DOMContentLoaded', () => {
const scriptURL = 'https://script.google.com/macros/s/AKfycbzo8YeFgMouHswM1VSm6hEtwZ9l2c8wHhlHo_uh5lGk9D8k9cernQ-1npiUEuUGTzml/exec';
const form = document.getElementById('training-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault(); // Empêche le rechargement de la page

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      alert("Votre demande est envoyée !");
      form.reset(); // Réinitialise le formulaire après l'envoi réussi
    })
    .catch(error => {
      console.error('Erreur !', error.message);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    });
  });
}
});