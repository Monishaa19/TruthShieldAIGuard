// content.js

// Function to get the text typed in the Twitter post input box
function getTwitterPostText() {
    // Twitter's tweet text area selector might change, but here's a common one:
    console.log(document.querySelector('span[data-text="true"]').innerText);

    const prompt = 'What is the capital of France?';

    // Gemini API call
    const apiKey = 'AIzaSyBxsNgKI-TQbKVi8qZyij9RICZJCqgOpbw';  // Replace with your Gemini API key
    const apiEndpoint = 'https://api.gemini.com/v1/your-api-endpoint'; // Replace with actual Gemini endpoint

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,  // Include your API key if required
        },
        body: JSON.stringify({
            prompt: prompt
        })
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        console.log('Gemini API Response:', data);
        alert('Response: ' + JSON.stringify(data));  // Display the API response
    })
    .catch(error => {
        console.error('Error calling Gemini API:', error);
        alert('Error: ' + error.message);  // Show error if it occurs
    });







    const tweetTextArea = document.querySelector('span[data-text="true"]').innerText;
    
    // Check if the tweetTextArea is available and return its content
    if (tweetTextArea) {
      return tweetTextArea.innerText;
    } else {
      console.error("Tweet text area not found.");
      return null;
    }
  }
  
  // Send the text to the background script when the extension is triggered
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "get_tweet_text") {
      const tweetText = getTwitterPostText();
      sendResponse({ tweetText: tweetText });
    }
  });
  // content.js


