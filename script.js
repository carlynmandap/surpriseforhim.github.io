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

// Add event listeners after DOM loads
window.addEventListener('DOMContentLoaded', () => {
    const nahhBtn = document.getElementById("noBtn");
    const nahhModal = document.getElementById("nahhModal");
    const closeNahhModal = document.getElementById("closeNahhModal");

    nahhBtn.addEventListener("click", () => {
        nahhModal.classList.remove("hidden");
    });

    closeNahhModal.addEventListener("click", () => {
        nahhModal.classList.add("hidden");
    });
});

document.getElementById("yesBtn").addEventListener("click", () => {
    // Show animation or message
    const letterSection = document.getElementById("letterSection");
    letterSection.innerHTML = `
        <h2>Opening your surprise...</h2>
        <img src="images/load.gif" alt="Loading hearts" style="width: 150px; height: auto;" />
    `;

    // Wait 2 seconds then redirect
    setTimeout(() => {
        window.location.href = "surprise.html";
    }, 2000);
});

