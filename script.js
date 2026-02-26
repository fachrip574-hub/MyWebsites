// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Kecepatan animasi (ms)
    once: false,    // Animasi akan berulang setiap di scroll
    mirror: true
});

// Efek interaksi sederhana saat card diklik
const cards = document.querySelectorAll('.nav-card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        console.log("Navigating to section...");
    });
});