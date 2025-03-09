// background.js

// Listen for a message from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "get_tweet_text") {
    // Instead of sending data to a server, we now simply return the tweet text.
    console.log('Received request to get tweet text:', request.tweetText);

    // Respond to the content script with the tweet text
    sendResponse({ status: "success", tweetText: request.tweetText });
  }
});
