const scriptURL = 'https://script.google.com/macros/s/AKfycbxbqGG0L8H31jfpvG4QvtOn1H_Lthgmk6chFh-jrW-bhDQC9njdrCKfJ-bqKXNu30vl/exec';
const form = document.forms['tech-support-form'];

form.addEventListener('submit', e => {
  e.preventDefault() // empêche le rechargement ou la redirection

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Votre demande est envoyée !" ))
   form.reset() // Réinitialise le formulaire après l'envoi
  .catch(error => console.error('Error!', error.message))
})
