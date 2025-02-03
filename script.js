document.getElementById('jokeButton').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/blagues/random');

    // Si aucune blague n'est trouvée
    if (!response.ok) {
        document.getElementById('errorMessage').style.display = 'block';  // Afficher le message d'erreur
        document.getElementById('jokeText').innerHTML = "Désolé, nous n'avons pas trouvé de blague.";
    } else {
        document.getElementById('errorMessage').style.display = 'none';  // Cacher le message d'erreur
        const joke = await response.json();
        document.getElementById('jokeText').innerHTML = `<strong>${joke.question}</strong><br>${joke.answer}`;
    }
});
