function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "/apps/main.html"
   });
}

browser.browserAction.onClicked.addListener(openMyPage);