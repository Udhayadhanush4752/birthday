
const birthdayDate = new Date("2026-10-27T00:00:00+05:30").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const timerNote = document.getElementById("timer-note");

// Update the countdown every second.
function updateCountdown() {
    const now = Date.now();
    const difference = birthdayDate - now;

    if (difference <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        timerNote.textContent =
            "🎉 It's their birthday! Let the celebration begin! 🎂";

        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);

// Create a starry cinematic background.
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = 2 + Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}

// Reveal the birthday surprise.
const surpriseButton = document.getElementById("surprise-btn");
const surpriseMessage = document.getElementById("surprise-message");

surpriseButton.addEventListener("click", () => {
    surpriseMessage.hidden = false;
    surpriseButton.textContent = "💛 Your surprise is waiting above";

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    surpriseButton.disabled = true;
    surpriseButton.style.opacity = "0.7";
});
