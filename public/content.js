// content.js

// Function to get the text typed in the Twitter post input box
function getTwitterPostText() {
    // Twitter's tweet text area selector might change, but here's a common one:
    const tweetTextArea = document.querySelector('div[aria-label="Tweet text"]');
    
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
  