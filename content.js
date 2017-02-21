var p5 = document.createElement('script');
p5.src = chrome.extension.getURL('p5.js');
(document.head || document.documentElement).appendChild(p5);

var jqry = document.createElement('script');
jqry.src = chrome.extension.getURL('jquery.js');
(document.head || document.documentElement).appendChild(jqry);

//Question 3: I find that my doodle.js can't use chrome API, so I used content js to pass the imgURL like this
var mouse = document.createElement('img');
mouse.src = chrome.extension.getURL("mouse.png");
mouse.id = 'mouse';
//hide the bridge for passing the imgURL
mouse.style = "display: none";
(document.body || document.documentElement).appendChild(mouse);



//Question 4: Why this doesn't work? At last, I inject css using manifest content css
// $("canvas").css("position","fixed");
// $("canvas").css("top","0px");
// $("canvas").css("bottom","0px");
// $("canvas").css("right","0px");
// $("canvas").css("left","0px");
// $("canvas").css("width","100%");
// $("canvas").css("height","100%");
// $("canvas").css("margin","0");
// $("canvas").css("padding","0");
// $("canvas").css("overflow","hidden");
// $("canvas").css("z-index","-99");
