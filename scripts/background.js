chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({ 'url': 'https://tungcode.com/lazy-eop' }, function (tab) {
        // chrome.storage.local.set({ lastVisit: new Date() });
    });
});