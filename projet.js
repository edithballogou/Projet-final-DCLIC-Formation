// Fonction pour valider le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Récupérer les champs du formulaire
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value;

    // Vérifier si tous les champs sont remplis
    if (nom === "" || email === "" || sujet === "" || message === "") {
        alert("Tous les champs doivent être remplis.");
        event.preventDefault(); // Empêche l'envoi du formulaire
    } else {
        alert("Merci de nous avoir contactés !");
    }
});

// Ajout d'un effet de survol pour les cartes de projets
var projets = document.querySelectorAll('.projet');

projets.forEach(function(projet) {
    projet.addEventListener('mouseenter', function() {
        projet.style.backgroundColor = '#f1c40f'; // Change la couleur de fond au survol
    });

    projet.addEventListener('mouseleave', function() {
        projet.style.backgroundColor = 'white'; // Rétablit la couleur de fond d'origine
    });
});
