// popup.js

// When the popup is clicked, send a message to the content script to get tweet text
document.getElementById('getTweetButton').addEventListener('click', () => {
    // Send message to content script to get tweet text
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'get_tweet_text' }, (response) => {
        if (response && response.tweetText) {
          console.log('Tweet text from Twitter:', response.tweetText);
          // Do something with the tweetText here, e.g., display it or send to the server
        } else {
          console.log('No tweet text found.');
        }
      });
    });
  });
  