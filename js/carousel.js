class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelector('.carousel-slides');
        this.images = container.querySelectorAll('img');
        this.total = this.images.length;
        this.current = 0;

        container.querySelector('.next').addEventListener('click', () => this.next());
        container.querySelector('.prev').addEventListener('click', () => this.prev());
    }

    update() {
        const offset = -this.current * 100;
        this.slides.style.transform = `translateX(${offset}%)`;
    }

    next() {
        this.current = (this.current + 1) % this.total;
        this.update();
    }

    prev() {
        this.current = (this.current - 1 + this.total) % this.total;
        this.update();
    }
}


document.querySelectorAll('.kronk-carousel').forEach(c => {
    const slides = c.querySelector('.carousel-slides');
    const images = c.querySelectorAll('img');
    let current = 0;
    const total = images.length;

    const lever = c.querySelector('.carousel-lever');
    lever.addEventListener('click', () => {
        current = (current + 1) % total;
        slides.style.transform = `translateX(${-current * 100}%)`;
    });
});

// Initialize all carousels
document.querySelectorAll('.carousel').forEach(c => new Carousel(c));