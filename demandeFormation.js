const scriptURL = 'https://script.google.com/macros/s/AKfycbzo8YeFgMouHswM1VSm6hEtwZ9l2c8wHhlHo_uh5lGk9D8k9cernQ-1npiUEuUGTzml/exec';
const form = document.forms['training-form'];

form.addEventListener('submit', e => {
  e.preventDefault() // empêche le rechargement ou la redirection

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Votre demande est envoyée !" ))
   form.reset() // Réinitialise le formulaire après l'envoi
  .catch(error => console.error('Error!', error.message))
})
