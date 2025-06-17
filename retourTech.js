const scriptURL = 'https://script.google.com/macros/s/AKfycbz_dtHiqFggqFGMRNYoub9Crj9TS7I-J_Q-aOrRDe6JEcM8sbn0d7oH-cxomnFs6gH4Kg/exec';
const form = document.forms['tech-feedback-form'];

form.addEventListener('submit', e => {
  e.preventDefault() // empêche le rechargement ou la redirection

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Merci pour votre retour !" ))
   form.reset() // Réinitialise le formulaire après l'envoi
  .catch(error => console.error('Error!', error.message))
})
