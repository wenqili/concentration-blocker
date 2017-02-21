//variables
var toggle = false;

console.log("this is the background scripts");

//Question 1: Even I do following code, my doodle script can't use both of the libs

/*
chrome.browserAction.onClicked.addListener(function(tab){
  console.log(tab.url);
  chrome.tabs.executeScript(null,{file:'jquery.js'},function(){
    chrome.tabs.executeScript(null,{file:'p5.js'});
  });
})
*/

//Question 2: I used this to prevent the situation that background.js only run once and set the toggle always true.
//But it's just a temperory solution, not really what I need: Every time I refresh the tab or load other page, set the toggle to false.

chrome.tabs.onUpdated.addListener(function(){
  toggle = false;
  console.log("set the toggle to false.")
})

function callback(details) {
  // var method = details.method;
  var type = details.type;
  var url = details.url;

  if (type === 'script'&& toggle == false) {
    var doodle = chrome.extension.getURL('doodle.js');
    toggle = true;
    return { redirectUrl: doodle };
  }
}

var filter = {
  // urls: ['<all_urls>']
  // only for google, who suspended my account...
  urls:["*://*.google.com/*","*://*.chrome.com/*"]
};

var extraInfo = ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(
  callback, filter, extraInfo);
