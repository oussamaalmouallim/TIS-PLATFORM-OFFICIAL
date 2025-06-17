document.addEventListener('DOMContentLoaded', () => {
const scriptURL = 'https://script.google.com/macros/s/AKfycbxbqGG0L8H31jfpvG4QvtOn1H_Lthgmk6chFh-jrW-bhDQC9njdrCKfJ-bqKXNu30vl/exec';
const form = document.getElementById('tech-support-form');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault(); // Empêche le rechargement de la page

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      alert("Votre demande est envoyée !  !");
      form.reset(); // Réinitialise le formulaire après l'envoi réussi
    })
    .catch(error => {
      console.error('Erreur !', error.message);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    });
  });
}
});


