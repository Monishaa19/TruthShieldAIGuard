// background.js

// Listen for a message from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "get_tweet_text") {
      // Send a request to your Node.js server (replace with your actual server URL)
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweetText: request.tweetText })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Response from Node.js server:', data);
        sendResponse({ status: "success", data: data });
      })
      .catch(error => {
        console.error('Error sending to Node.js server:', error);
        sendResponse({ status: "error", message: error.message });
      });
  
      // Keep the message channel open for async response
      return true;
    }
  });
  