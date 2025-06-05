document.getElementById("feedback-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitTogooglesheet");
  submitBtn.innerText = "Envoi en cours...";
  submitBtn.classList.add('active');

  let formData = new FormData(feedbackform);

  fetch("https://script.google.com/macros/s/AKfycbwslJzwnb1OZA2VahPAafUrqr7_xah-xh-CUp88pzuSGm8KMUQu_1TReL1yhKYOmqn5iw/exec", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert("Données envoyées avec succès !");
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.376 12.416L8.777 19.482c-.7.046-.137.078-.217.078-.133 0-.262-.053-.353-.146-.157-.148-.194-.368-.094-.558l3.53-6.39H5c-.202 0-.373-.116-.443-.3-.074-.181-.026-.385.116-.504l10.62-7.303c.094-.063.209-.095.323-.095.183 0 .341.084.437.232.094.147.105.333.026.49l-3.53 6.562h6.37c.204 0 .38.127.448.306.068.18.015.38-.12.495z"/>
        </svg>
        Send to Google Sheet
      `;
      setTimeout(() => submitBtn.classList.remove('active'), 2000);
    })
    .catch(error => {
      alert("Erreur lors de l'envoi des données.");
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.376 12.416L8.777 19.482c-.7.046-.137.078-.217.078-.133 0-.262-.053-.353-.146-.157-.148-.194-.368-.094-.558l3.53-6.39H5c-.202 0-.373-.116-.443-.3-.074-.181-.026-.385.116-.504l10.62-7.303c.094-.063.209-.095.323-.095.183 0 .341.084.437.232.094.147.105.333.026.49l-3.53 6.562h6.37c.204 0 .38.127.448.306.068.18.015.38-.12.495z"/>
        </svg>
        Try again
      `;
      submitBtn.classList.remove('active');
    });

});