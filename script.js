document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Nenita linda, te tengo una sorpresita",
        "Pero primero tienes que leer unos mensajitos...",
        "Que fuí pensando durante estos días\nque no te tuve a mi lado....",
        "Que están numerados hasta el 1000\n por cierto, juas juas",
        "1. Mi felicidad tiene un nombre (Adri)\n desde que te conocí...",
        "2. No sé que has hecho en mí que siempre\n estoy deseando verte...",
        "3. Te amo más que ayer, pero menos que mañana...",
        "4. Con tal de ir contigo, el destino es lo de menos...",
        "5. Despierto pensando en ti y cuando duermo\n sueño contigo...",
        "6. Si volviera a nacer,\n intentaría buscarte mucho antes...",
        "7. No quiero que me hagas feliz,\n quiero ser feliz contigo...",
        "8. Eres la persona correcta,\n en el momento perfecto y en el corazón adecuado...",
        "9. Te elijo hoy y por el resto de mi vida...",
        "10. Eres increíble y super hermosa\n (solo quería recordartelo)...",
        "11. Me gusta tu perfume, huele como\n al amor de mi vida...",
        "12. ¿Y si nos damos un tiempo? \nTú me das tu presente y yo mi futuro...",
        "13. El café de tus ojos es el único\n que necesito por las mañanas...",
        "14. Por un lado me gustas y por el otro también...",
        "15. En pocas palabras, ¡Me encantas!\n En muchas también...",
        "16. Nena te amo demasiado\nSe que tengo muchos defectos\nQue a veces puedes sentirte frustrada\nPero créeme que te amo demasiado\nQue todo lo hago de corazón \ny que no quiero a nadie más que tú",
        "Solo te pido que abras uno más y ya se acabó"

    ];

    const delay = 70; 
    const lyricsElement = document.getElementById("lyrics");

    function startConfetti() {
        const emojiShape = confetti.shapeFromText({
            text: "❤️",
          });

        // Lanza confeti desde el lado izquierdo
        confetti({
            particleCount: 70,
            angle: 60,
            spread: 80,
            origin: { x: 0, y: 0.8},
            shapes: [emojiShape], // Usa formas de corazón
            scalar: 3,
            colors: ['#bb0000', '#ff0000']
        });
        // Lanza confeti desde el lado derecho
        confetti({
            particleCount: 70,
            angle: 120,
            spread: 80,
            origin: { x: 1, y: 0.8},
            shapes: [emojiShape], // Usa formas de corazón
            scalar: 3,
            colors: ['#bb0000', '#ff0000']
        });
    }

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            await new Promise((resolve) => setTimeout(resolve, delay * 20));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 5));
        }
        startConfetti();
    }

    displayLyrics();
    
});


