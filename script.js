
// ===== GET HTML ELEMENTS =====

const countdown = document.getElementById("countdown");
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const birthdayVideo = document.getElementById("birthdayVideo");

// ===== BIRTHDAY COUNTDOWN: OCTOBER 28 =====

function updateCountdown() {
    const now = new Date();

    // October is month 9 in JavaScript
    let birthday = new Date(now.getFullYear(), 9, 28);

    // If this year's birthday has passed, use next year
    if (now >= birthday) {
        birthday = new Date(now.getFullYear() + 1, 9, 28);
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.textContent =
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds 💗`;
}

// Start countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== OPEN YOUR SURPRISE 🎁 =====

surpriseBtn.addEventListener("click", function () {

    // Show or hide the surprise message and video
    surpriseMessage.hidden = !surpriseMessage.hidden;

    if (surpriseMessage.hidden) {

        // When hiding, stop and reset the video
        birthdayVideo.pause();
        birthdayVideo.currentTime = 0;

        surpriseBtn.textContent = "Open Your Surprise 🎁";

    } else {

        surpriseBtn.textContent = "Hide Surprise 💗";

    }

});