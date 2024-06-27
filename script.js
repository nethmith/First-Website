document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animated-text');
    const planets = document.querySelectorAll('.planet');
    
    // Animate the header text
    setTimeout(() => {
        animatedText.classList.add('visible');
    }, 500);

    // Animate planets on scroll
    function animatePlanets() {
        planets.forEach(planet => {
            const planetPosition = planet.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (planetPosition < screenPosition) {
                planet.classList.add('visible');
            }
        });
    }

    // Initial check for visible planets
    animatePlanets();

    // Check for visible planets on scroll
    window.addEventListener('scroll', animatePlanets);
});