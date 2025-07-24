function playAudio() {
    const audio = document.getElementById("bgMusic");
    const modalOne = document.getElementById("modalOne");
    const letterSection = document.getElementById("letterSection");

    audio.play();
    modalOne.classList.add("fade-out");

    setTimeout(() => {
        modalOne.style.display = "none";
        letterSection.classList.remove("hidden");
        letterSection.classList.add("show-letter");
    }, 600);
}

window.addEventListener('DOMContentLoaded', () => {
    const nahhBtn = document.getElementById("noBtn");
    const nahhModal = document.getElementById("nahhModal");
    const closeNahhModal = document.getElementById("closeNahhModal");
    const yesBtn = document.getElementById("yesBtn");
    const letterModal = document.getElementById("letterModal");
    const letterSection = document.getElementById("letterSection");
    const videoSection = document.getElementById("videoSection");
    const arrowBtn = document.getElementById("showVideoSection");
    const typedLetter = document.getElementById("typedLetter");

    // Nahhh button
    nahhBtn.addEventListener("click", () => {
        nahhModal.classList.remove("hidden");
    });

    closeNahhModal.addEventListener("click", () => {
        nahhModal.classList.add("hidden");
    });

    // Yes button
    yesBtn.addEventListener("click", () => {
        letterSection.classList.add("hidden");
        letterModal.classList.remove("hidden");
    });

    // Arrow click to show video
    if (arrowBtn) {
        arrowBtn.addEventListener("click", () => {
            setTimeout(() => {
                letterModal.classList.add("hidden");
                letterModal.classList.remove("fade-out");

                letterSection.classList.add("hidden");
                letterSection.innerHTML = ""; // Clear loading GIF/text

                // Step 3: Show video section with slide-up effect
                videoSection.classList.remove("hidden");
                videoSection.classList.add("slide-up");

                const video = document.getElementById("memoryVideo");
                if (video) {
                    video.play().catch((err) => {
                        console.log("Autoplay may be blocked until user interacts.");
                    });
                }

            }, 600);
        });

    }

    const message = `For this special day, I just want to remind you how much you mean to me.\n\n\
I made this little page, this tiny surprise because I wanted to do something a little extra for your birthday.\n\n\
So embrace yourself, because this page is filled with our memories and all the love I have for you.`;

    let i = 0;

    function typeLetter() {
        if (i < message.length) {
            typedLetter.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
            i++;
            setTimeout(typeLetter, 1);
        } else {
            arrowBtn.style.display = "block"; // show arrow after typing
        }
    }

    // Observe when letter modal becomes visible
    const observer = new MutationObserver(() => {
        if (!document.getElementById("letterModal").classList.contains("hidden")) {
            typedLetter.innerHTML = "";
            i = 0;
            arrowBtn.style.display = "none";
            typeLetter();
        }
    });

    observer.observe(document.getElementById("letterModal"), {
        attributes: true,
        attributeFilter: ['class']
    });

});
