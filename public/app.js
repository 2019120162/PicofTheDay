// public/app.js

// Arrays of sample images and greetings
const images = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3"
  ];


  const greetings = [
    'Wishing you a day filled with joy and endless possibilities.',
    'May today bring you peace, love, and happiness.',
    'Here\'s to a beautiful day, full of hope and inspiration.',
    'Let today be the beginning of something extraordinary.',
    'May your day be as bright and lovely as you are.',
    'Embrace this new day with a heart full of gratitude and joy.',
    'A fresh new day awaits you—may it be full of promise.',
    'Here\'s to another day of new opportunities and endless smiles.',
    'Rise and shine, for today holds infinite possibilities.',
    'Wishing you a peaceful heart and a productive day.',
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
