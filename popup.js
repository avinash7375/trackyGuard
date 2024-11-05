// popup.js

document.getElementById("saveSiteBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      chrome.runtime.sendMessage({ action: "addSite", url }, (response) => {
        document.getElementById("status").textContent = "Site saved!";
      });
    });
  });
  
  document.getElementById("checkSiteBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      chrome.runtime.sendMessage({ action: "flagSite", url }, (response) => {
        document.getElementById("status").textContent = "Site checked!";
      });
    });
  });
  