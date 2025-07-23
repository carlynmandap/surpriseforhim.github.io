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
        letterSection.innerHTML = `
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

                // Scroll into view
                videoSection.scrollIntoView({ behavior: "smooth" });

                // Play the video
                const video = videoSection.querySelector("video");
                if (video) {
                    video.play();
                }
            }, 600); // Wait for fade-out to finish
        });

    }
});
