// public/app.js

// Arrays of sample images and greetings
const images = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3"
  ];


const greetings = [
    'Good Morning!',
    'Hello there!',
    'Hope you have a great day!',
    'Wishing you a wonderful day ahead!',
    'Stay awesome!',
];

// Function to generate random content
function generateRandomContent() {
    return new Promise((resolve, reject) => {
        // Simulate asynchronous fetching of image and greeting
        setTimeout(() => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            
            resolve({ image: randomImage, greeting: randomGreeting });
        }, 1000); // 1-second delay
    });
}

// Event listener for button click
document.getElementById('generateBtn').addEventListener('click', () => {
    const imageContainer = document.getElementById('image-container');
    const greetingContainer = document.getElementById('greeting');

    generateRandomContent()
        .then((content) => {
            // Display the random image and greeting
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
