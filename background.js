// background.js

// Store legitimate websites in local storage with a limit for free users
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ savedSites: [], siteLimit: 10 });
  });
  
  // Helper function to add a legitimate site
  function addSite(url) {
    chrome.storage.local.get(["savedSites", "siteLimit"], (data) => {
      let { savedSites, siteLimit } = data;
  
      if (savedSites.length < siteLimit || siteLimit === 100) {
        savedSites.push(url);
        chrome.storage.local.set({ savedSites });
      } else {
        alert("Upgrade to save more websites!");
      }
    });
  }
  
  // Function to flag a site if it's detected as mirrored
  function flagSite(url) {
    chrome.storage.local.get(["savedSites"], (data) => {
      let { savedSites } = data;
  
      if (!savedSites.includes(url)) {
        alert("This site may not be legitimate.");
      }
    });
  }
  
  // Listen for messages from popup or content script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "addSite") {
      addSite(request.url);
    } else if (request.action === "flagSite") {
      flagSite(request.url);
    }
    sendResponse({ status: "done" });
  });
  