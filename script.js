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

         function copyCode(button) {
            const code = button.parentElement.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
              button.innerText = "Copied!";
              setTimeout(() => button.innerText = "Copy", 2000);
            });
          }

        typeEffect();

        const pages = [
            { title: "Home", url: "index.html" },
            { title: "Blogs", url: "blogs.html" },
            { title: "Tutorials", url: "tutorials.html" },
            { title: "Choosing your first programming language", url: "choosingyourfirstprogramminglanguage.html" },
            { title: "Where should i begin", url: "whereshouldibegin.html" },
            { title: "The most effective way to start coding", url: "themosteffectivewaytostartcoding.html" },
            { title: "C intro", url: "cintro.html" },
            { title: "Why learn C", url: "whylearnc.html" },
            { title: "Difference Between C and C++", url: "differencebetweencandc++.html" }
            // Add more here
          ];
        
          function searchSite() {
            const query = document.getElementById("searchInput").value.trim().toLowerCase();
        
            if (!query) {
              alert("Please enter a search term.");
              return;
            }
        
            const match = pages.find(page =>
              page.title.toLowerCase().includes(query)
            );
        
            if (match) {
              window.location.href = match.url;
            } else {
              alert("No matching page found.");
            }
          }
