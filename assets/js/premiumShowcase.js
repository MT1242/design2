(() => {
    const slides = document.querySelectorAll('.premium5-slide');
    const prevBtn = document.getElementById('p5Prev');
    const nextBtn = document.getElementById('p5Next');

    if (slides.length === 0) return;

    let index = 0;
    const len = slides.length;

    function clear() {
        slides.forEach(s =>
            s.classList.remove(
                'is-active',
                'is-prev',
                'is-next',
                'is-far-prev',
                'is-far-next'
            )
        );
    }

    function render() {
        clear();

        // Active luôn có
        slides[index].classList.add('is-active');

        // Prev / Next nếu >= 2
        if (len >= 2) {
            slides[(index - 1 + len) % len].classList.add('is-prev');
            slides[(index + 1) % len].classList.add('is-next');
        }

        // Far Prev / Far Next nếu >= 5
        if (len >= 5) {
            slides[(index - 2 + len) % len].classList.add('is-far-prev');
            slides[(index + 2) % len].classList.add('is-far-next');
        }

        // Trường hợp 4 ảnh (chỉ 1 far cho cân)
        if (len === 4) {
            slides[(index + 2) % len].classList.add('is-far-next');
        }
    }

    prevBtn.onclick = () => {
        index = (index - 1 + len) % len;
        render();
    };

    nextBtn.onclick = () => {
        index = (index + 1) % len;
        render();
    };

    render();

    setInterval(() => {
        index = (index + 1) % len;
        render();
    }, 5000);
})();
