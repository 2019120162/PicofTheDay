const greetings = [
    "Embrace the beauty of today!",
    "Seize the day with a smile!",
    "Every sunrise is a new beginning.",
    "Today's possibilities are endless. Go for them!",
    "Start fresh, start strong, and make today yours.",
    "The world is waiting for you. Let’s shine today!",
    "Let today be the start of something amazing.",
    "Make today count, it's your day to shine!",
    "Good vibes only. Let’s make it happen today!",
    "Every moment is a chance to do something extraordinary."
];

const imageURL = "https://picsum.photos/800/500";  // Placeholder image API

const greetingElement = document.getElementById("greeting");
const imageElement = document.getElementById("daily-image");
const button = document.getElementById("generate-button");

button.addEventListener("click", () => {
    // Get a random greeting
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Display the random greeting
    greetingElement.textContent = randomGreeting;

    // Set the daily image
    imageElement.src = imageURL + "?random=" + Math.random();
});
