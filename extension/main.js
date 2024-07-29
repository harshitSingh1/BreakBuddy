// Redirect to the BreakBuddy website
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.update(tabs[0].id, { url: "https://harshitsingh1.github.io/BreakBuddy/" });
});
