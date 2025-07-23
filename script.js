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

    // Nahhh button
    nahhBtn.addEventListener("click", () => {
        nahhModal.classList.remove("hidden");
    });

    closeNahhModal.addEventListener("click", () => {
        nahhModal.classList.add("hidden");
    });

    // Yes button
    yesBtn.addEventListener("click", () => {
        document.getElementById("letterLoading").innerHTML = `
    <h2 style="color: black;">Opening your surprise...</h2>
    <img src="images/gifs/load.gif" alt="Loading hearts" style="width: 150px; height: auto; margin-bottom: 80px;" />
`;

        setTimeout(() => {
            letterSection.classList.add("hidden");
            letterModal.classList.remove("hidden");
        }, 2000);
    });

    // Arrow click to show video
    if (arrowBtn) {
        arrowBtn.addEventListener("click", () => {
            // Step 1: Fade out the letter modal
            letterModal.classList.add("fade-out");

            // Step 2: After fade, hide letter modal and show video section
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

            }, 600); // Wait for fade-out to finish
        });

    }

    // Typing Effect for Letter Modal
    const typedLetter = document.getElementById("typedLetter");
    const arrow = document.getElementById("showVideoSection");

    const message = `For this special day, I just want to remind you how much you mean to me.\n\n\
I made this little page, this tiny surprise because I wanted to do something a little extra for your birthday.\n\n\
So embrace yourself, because this page is filled with our memories and all the love I have for you.`;

    let i = 0;

    function typeLetter() {
        if (i < message.length) {
            typedLetter.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
            i++;
            setTimeout(typeLetter, 40);
        } else {
            arrow.style.display = "block"; // show arrow after typing
        }
    }

    // Observe when letter modal becomes visible
    const observer = new MutationObserver(() => {
        if (!document.getElementById("letterModal").classList.contains("hidden")) {
            typedLetter.innerHTML = "";
            i = 0;
            arrow.style.display = "none";
            typeLetter();
        }
    });

    observer.observe(document.getElementById("letterModal"), {
        attributes: true,
        attributeFilter: ['class']
    });

});
