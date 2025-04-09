// public/app.js

// Function to fetch a random image from an API
function fetchRandomImage() {
    return fetch('https://picsum.photos/200')  // API for random image
        .then((response) => response.url)  // Return the image URL from the API
        .catch((error) => {
            console.error('Error fetching image:', error);
            throw error;  // Rethrow the error so it can be handled later
        });
}

// Function to fetch a random quote from an API
function fetchRandomQuote() {
    return fetch('https://quotes.rest/qod?language=en')  // API for random quote
        .then((response) => response.json())  // Parse the JSON response
        .then((data) => data.data[0].quote)  // Extract the quote from the response data
        .catch((error) => {
            console.error('Error fetching quote:', error);
            throw error;  // Rethrow the error so it can be handled later
        });
}

// Function to generate random content (image and quote)
function generateRandomContent() {
    return new Promise((resolve, reject) => {
        // Fetch both a random image and a random quote
        Promise.all([fetchRandomImage(), fetchRandomQuote()])
            .then(([image, quote]) => {
                resolve({ image, quote });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Event listener for button click
document.getElementById('generateBtn').addEventListener('click', () => {
    const imageContainer = document.getElementById('image-container');
    const quoteContainer = document.getElementById('quote');

    generateRandomContent()
        .then((content) => {
            // Display the random image and quote
            const img = document.createElement('img');
            img.src = content.image;
            imageContainer.innerHTML = ''; // Clear previous image
            imageContainer.appendChild(img);

            quoteContainer.textContent = content.quote;
        })
        .catch((error) => {
            console.error('Error generating content:', error);
        });
});
