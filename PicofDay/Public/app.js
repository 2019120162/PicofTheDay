// public/app.js

// Arrays with sample images and greetings
const images = [
    'https://via.placeholder.com/300x200.png?text=Image+1',
    'https://via.placeholder.com/300x200.png?text=Image+2',
    'https://via.placeholder.com/300x200.png?text=Image+3',
    'https://via.placeholder.com/300x200.png?text=Image+4',
];

const greetings = [
    'Good Morning!',
    'Hello there!',
    'Hope you have a great day!',
    'Wishing you a wonderful day ahead!',
    'Stay awesome!',
];

// Function to generate random image and greeting
function generateRandomContent() {
    return new Promise((resolve, reject) => {
        // Simulate a delay (like loading an image)
        setTimeout(() => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            
            resolve({ image: randomImage, greeting: randomGreeting });
        }, 1000);
    });
}

// Event listener for button click
document.getElementById('generateBtn').addEventListener('click', () => {
    const imageContainer = document.getElementById('image-container');
    const greetingContainer = document.getElementById('greeting');

    generateRandomContent()
        .then((content) => {
            // Set the image and greeting
            const img = document.createElement('img');
            img.src = content.image;
            imageContainer.innerHTML = ''; // Clear previous image
            imageContainer.appendChild(img);

            greetingContainer.textContent = content.greeting;
        })
        .catch((error) => {
            console.error('Error generating content:', error);
        });
});
