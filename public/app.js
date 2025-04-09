// Wait for the DOM to fully load before executing the code
document.addEventListener('DOMContentLoaded', function () {
    // Check if the script is loaded
    console.log('Script is loaded and DOM is ready!');

    const generateButton = document.getElementById('generateBtn');
    const imageContainer = document.getElementById('image-container');
    const quoteContainer = document.getElementById('quote');

    // Event listener for button click
    generateButton.addEventListener('click', function() {
        console.log("Button clicked!"); // Debugging line to ensure button click is detected

        // Call the function to generate random content
        generateRandomContent()
            .then((content) => {
                console.log('Generated Content:', content);  // Check what we got
                // Display the random image and the random quote
                const img = document.createElement('img');
                img.src = content.image;
                imageContainer.innerHTML = ''; // Clear any previous content
                imageContainer.appendChild(img);

                quoteContainer.textContent = content.quote; // Display the fetched quote
            })
            .catch((error) => {
                console.error('Error generating content:', error);
            });
    });
});

// Function to fetch a random image from an API
function fetchRandomImage() {
    return fetch('https://picsum.photos/200')  // API for random image
        .then((response) => response.url)  // Return the image URL from the API
        .catch((error) => {
            console.error('Error fetching image:', error);
            throw error;  // Rethrow the error for further handling
        });
}

// Function to fetch a random quote from QuoteGarden API
function fetchRandomQuote() {
    return fetch('https://api.api-ninjas.com/v1/quotes')  // QuoteGarden API for random quote
        .then((response) => response.json())  // Parse the JSON response
        .then((data) => {
            return data.data[0].quote;  // Extract the quote from the API response
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
            throw error;  // Rethrow the error for further handling
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
