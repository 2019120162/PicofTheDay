// Function to fetch a random image from an API
function fetchRandomImage() {
    return fetch('https://picsum.photos/200')  // API for random image
        .then((response) => response.url)  // Return the image URL from the API
        .catch((error) => {
            console.error('Error fetching image:', error);
            throw error;
        });
}

// Function to fetch a random quote from API Ninjas API
function fetchRandomQuote() {
    const apiKey = 'OpDPC5DfsPorJFTp6DZLGw==yFFtyII7iqrVWlVe'; // Your API key
    return fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey // Add the API key in the request headers
        }
    })
        .then((response) => response.json())  // Parse the JSON response
        .then((data) => {
            return data[0].quote;  // Extract the quote from the API response
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
            throw error;
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
