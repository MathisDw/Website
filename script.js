function updateDateTime() {
    // Haal de huidige datum en tijd op
    const now = new Date();
    
    // Formatteer de datum naar de Nederlandse stijl
    // Voorbeeld: "dinsdag 2 oktober 2024"
    const date = now.toLocaleDateString('nl-NL', {
        weekday: 'long', // Weergave van de dag van de week (bijv. "dinsdag")
        year: 'numeric', // Weergave van het jaar (bijv. "2024")
        month: 'long',   // Weergave van de maand (bijv. "oktober")
        day: 'numeric'   // Weergave van de dag van de maand (bijv. "2")
    });
    
    // Formatteer de tijd naar de Nederlandse stijl
    // Voorbeeld: "14:30:15"
    const time = now.toLocaleTimeString('nl-NL');
    
    // Plaats de geformatteerde datum en tijd in het HTML element met id 'currentDateTime'
    document.getElementById('datetime').innerHTML = `${date}, ${time}`;
}

// Roep de updateDateTime functie aan zodra de pagina geladen is
updateDateTime();

// Blijf de datum en tijd elke seconde bijwerken
setInterval(updateDateTime, 1000);

// Spin animation for the clicked element
function toggleSpin(element) {
    element.classList.toggle('spin'); // Toggle the 'spin' class on the clicked element
}

// Shake animation
function toggleShake() {
    const textElement = document.querySelector('.shakeable');
    textElement.classList.add('shake');
    setTimeout(() => {
        textElement.classList.remove('shake');
    }, 500); // Remove shake after 0.5 seconds
}
