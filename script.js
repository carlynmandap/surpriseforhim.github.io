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

function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
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
    let surpriseTimeoutId;

    nahhBtn.addEventListener("click", () => {
        nahhModal.classList.remove("hidden");
    });

    closeNahhModal.addEventListener("click", () => {
        nahhModal.classList.add("hidden");
    });

    yesBtn.addEventListener("click", () => {
        letterSection.classList.remove("hidden");
        letterModal.classList.remove("hidden");
    });

    if (arrowBtn) {
        arrowBtn.addEventListener("click", () => {
            letterModal.classList.add("hidden");
            letterSection.classList.add("hidden");

            if (surpriseTimeoutId) {
                clearTimeout(surpriseTimeoutId);
            }

            surpriseTimeoutId = setTimeout(() => {
                videoSection.classList.remove("hidden");
                videoSection.classList.add("slide-up");

                const video = document.getElementById("memoryVideo");
                if (video) {
                    video.play().catch(() => {
                        console.log("Autoplay blocked.");
                    });
                }
            }, 3000);
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
            setTimeout(typeLetter, 40);
        } else {
            arrowBtn.style.display = "block";
        }
    }

    const observer = new MutationObserver(() => {
        if (!letterModal.classList.contains("hidden")) {
            typedLetter.innerHTML = "";
            i = 0;
            arrowBtn.style.display = "none";
            typeLetter();
        }
    });

    observer.observe(letterModal, {
        attributes: true,
        attributeFilter: ['class']
    });

    const imageHolder = document.getElementById('imageHolder');
    const captionBox = document.getElementById('captionBox');

    document.querySelectorAll('.timeline-list li').forEach(item => {
        item.addEventListener('mouseenter', function () {
            const images = this.getAttribute('data-images').split(',');
            const captions = this.getAttribute('data-captions').split(',');

            // Clear previous images only
            imageHolder.innerHTML = '';
            captionBox.textContent = "Click an image to see the caption";

            images.forEach((imgSrc, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc.trim();
                imgElement.classList.add('visible');
                imgElement.setAttribute('data-caption', captions[index]?.trim() || 'No caption');

                // When image is clicked, update caption
                imgElement.addEventListener('click', function () {
                    const caption = this.getAttribute('data-caption');
                    captionBox.textContent = caption;
                });

                imageHolder.appendChild(imgElement);
            });
        });
    });


    const paginationLinks = document.querySelectorAll('.pagination a');
    const sections = {
        1: document.getElementById('videoSection'),
        2: document.getElementById('photoSection'),
        3: document.getElementById('bdayLetter'),
        4: document.getElementById('lastSection')
    };

    function updatePagination(page) {
        document.querySelectorAll('.pagination a').forEach(link => {
            link.classList.remove('active');
        });

        document.querySelectorAll(`.pagination a[data-page="${page}"]`).forEach(link => {
            link.classList.add('active');
        });
    }


    document.addEventListener('click', function (e) {
        if (e.target.matches('.pagination a')) {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            Object.values(sections).forEach(sec => {
                if (sec) sec.classList.add('hidden');
            });

            if (surpriseTimeoutId) {
                clearTimeout(surpriseTimeoutId);
            }

            if (sections[page]) {
                sections[page].classList.remove('hidden');
            }

            updatePagination(page);
        }

        if (e.target.id === 'showVideoSection') {
            e.preventDefault();

            Object.values(sections).forEach(sec => {
                if (sec) sec.classList.add('hidden');
            });

            sections[1].classList.remove('hidden');

            if (surpriseTimeoutId) {
                clearTimeout(surpriseTimeoutId);
            }

            updatePagination(1);
        }
    });

    const giftEmoji = document.getElementById('giftEmoji');
    const giftModal = document.getElementById('gift-modal');
    const closeModal = document.getElementById('close-modal');

    if (giftEmoji) {
        giftEmoji.addEventListener('click', () => {
            giftModal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            giftModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            giftModal.style.display = 'none';
        }
    });


});
