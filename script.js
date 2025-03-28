const words = ["Coding", "Debugging", "Tutorials", "Blogs", "More"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 200;  // Slower typing
        const deletingSpeed = 100; // Faster deleting
        const pauseAfterTyping = 1500; // Pause after full word

        function typeEffect() {
            const element = document.getElementById("typewriter");
            const currentWord = words[wordIndex];

            if (isDeleting) {
                element.textContent = currentWord.substring(0, charIndex--);
            } else {
                element.textContent = currentWord.substring(0, charIndex++);
            }

            let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentWord.length + 1) {
                isDeleting = true;
                nextSpeed = pauseAfterTyping;  // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, nextSpeed);
        }

        typeEffect();