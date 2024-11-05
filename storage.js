// storage.js

function canAddMoreSites() {
    return new Promise((resolve) => {
      chrome.storage.local.get(["savedSites", "siteLimit"], (data) => {
        resolve(data.savedSites.length < data.siteLimit);
      });
    });
  }
  
  function upgradeToPremium() {
    chrome.storage.local.set({ siteLimit: 100 });
  }
  