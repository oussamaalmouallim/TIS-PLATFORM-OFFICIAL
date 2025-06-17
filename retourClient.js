const scriptURL = 'https://script.google.com/macros/s/AKfycbwGUYTANCvWBl3nCWwJWXKkeoGVIKewxdm4N_XeGAKg_FT5RTAAzD6OcCUz8aq0mP1K/exec';
const form = document.forms['feedback-form'];

form.addEventListener('submit', e => {
  e.preventDefault() // empêche le rechargement ou la redirection

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Merci pour votre retour !" ))
   form.reset() // Réinitialise le formulaire après l'envoi
  .catch(error => console.error('Error!', error.message))
})
