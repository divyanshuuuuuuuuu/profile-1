// ===== SHATTER TEXT ANIMATION =====
// This file creates the text shatter effect using vanilla JavaScript

class ShatterText {
    constructor(element, options = {}) {
        this.element = element;
        this.text = element.textContent;
        this.options = {
            duration: options.duration || 800,
            stagger: options.stagger || 30,
            ...options
        };

        this.init();
    }

    init() {
        // Clear the element
        this.element.textContent = '';
        this.element.style.overflow = 'visible';

        // Split text into words
        const words = this.text.split(' ');
        let globalIndex = 0;

        words.forEach((word, wordIndex) => {
            // Create word span
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '1rem';

            // Split word into letters
            word.split('').forEach((letter, letterIndex) => {
                // Create letter span
                const letterSpan = document.createElement('span');
                letterSpan.textContent = letter;
                letterSpan.style.display = 'inline-block';
                letterSpan.style.position = 'relative';

                // Generate random initial position
                const randomX = (Math.random() - 0.5) * 1000;
                const randomY = (Math.random() - 0.5) * 1000;
                const randomRotate = Math.random() * 720 - 360;

                // Set initial state
                letterSpan.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(0)`;
                letterSpan.style.opacity = '0';
                letterSpan.style.transition = `all ${this.options.duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
                letterSpan.style.transitionDelay = `${globalIndex * this.options.stagger}ms`;

                wordSpan.appendChild(letterSpan);
                globalIndex++;
            });

            this.element.appendChild(wordSpan);

            // Add space after word (except last word)
            if (wordIndex < words.length - 1) {
                const space = document.createTextNode(' ');
                this.element.appendChild(space);
            }
        });

        // Trigger animation on next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.animate();
            });
        });
    }

    animate() {
        const letters = this.element.querySelectorAll('span span');
        letters.forEach(letter => {
            letter.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            letter.style.opacity = '1';
        });
    }
}

// Initialize shatter text elements
export function initShatterText() {
    const shatterElements = document.querySelectorAll('[data-shatter-text]');
    shatterElements.forEach(element => {
        new ShatterText(element, {
            duration: 800,
            stagger: 30
        });
    });
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShatterText);
} else {
    initShatterText();
}
