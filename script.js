document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const totalSlides = slideImages.length;
    let currentSlide = 0;

    /**
     * Fungsi untuk memindahkan slider ke gambar berikutnya.
     */
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    /**
     * Fungsi untuk mengupdate properti CSS transform.
     */
    function updateSlider() {
        // Hitung jarak pergeseran (0% untuk slide 1, -33.33% untuk slide 2, -66.66% untuk slide 3)
        const offset = -currentSlide * (100 / totalSlides);
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Set interval untuk animasi slide otomatis (misalnya, setiap 3 detik)
    const slideInterval = setInterval(nextSlide, 3000); 

    // Opsional: Hentikan animasi saat mouse/sentuhan di atas slider (untuk pengalaman desktop)
    const bannerSlider = document.querySelector('.banner-slider');
    
    bannerSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    bannerSlider.addEventListener('mouseleave', () => {
        // slideInterval = setInterval(nextSlide, 3000); // Harus dideklarasikan dengan 'let' jika ingin diakses
    });
});