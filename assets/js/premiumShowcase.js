(() => {
    const slides = document.querySelectorAll('.premium-slide');
    const btnPrev = document.getElementById('premiumPrev');
    const btnNext = document.getElementById('premiumNext');

    if (!slides.length) return;

    let index = 0;

    function render() {
        slides.forEach(s =>
            s.classList.remove('is-active', 'is-prev', 'is-next')
        );

        const prev = (index - 1 + slides.length) % slides.length;
        const next = (index + 1) % slides.length;

        slides[index].classList.add('is-active');
        slides[prev].classList.add('is-prev');
        slides[next].classList.add('is-next');
    }

    btnPrev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        render();
    });

    btnNext.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        render();
    });

    // Init
    render();

    // Auto rotate
    setInterval(() => {
        index = (index + 1) % slides.length;
        render();
    }, 5000);
})();
