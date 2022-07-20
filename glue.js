// List of classes in which to parse messages
// There is plenty of duplication, for the sake of
// being robust against changes in Slack.
var classesToRender = [
	 "p-rich_text_block",
	 "c-message__message_blocks",
	 "c-message__message_blocks--rich_text",
	 "c-message__body",
	 "c-message",
	 "c-message__content",
	 "c-message__content--feature_sonic_inputs"
];

var delimitersA = [
    {left: "$$$", right: "$$$", display: true},
    {left: "$$",  right: "$$",  display: false},
    {left: "\\(", right: "\\)", display: false},
    {left: "\\[", right: "\\]", display: true}
];
var delimitersB = [
    {left: "$$$", right: "$$$", display: true},
    {left: "$$",  right: "$$",  display: true},
    {left: "$",   right: "$",   display: false},
    {left: "\\(", right: "\\)", display: false},
    {left: "\\[", right: "\\]", display: true}
];

var LaTeXmessages = function(delimiterstyle){
    // use delimiterstyle to prepare correct options for auto-render's renderMathInElement
    var options = {};
    if(delimiterstyle === 'A') {
        options.delimiters = delimitersA;
    } else if(delimiterstyle === 'B') {
        options.delimiters = delimitersB;
    }

    // cycle through the DOM and call renderMathInElement on every item where applicable
    for(var j = 0; j < classesToRender.length; j++) {
        var messages = document.getElementsByClassName(classesToRender[j]);
        for(var i = 0; i < messages.length; i++) {
            // don't keep rerunning KaTeX on the same DOM element over and over again
            if( messages.item(i).triedlatex != true) {
                renderMathInElement(messages.item(i), options, delimiterstyle);
                messages.item(i).triedlatex = true;
            }
        }
    }
}

// repeat every 400ms as new messages come in over time
window.setInterval(function(){
    chrome.storage.sync.get({
            // 'A' is the default style of delimiters
            delimiterstyle: 'A'
        }, function(items) {
            LaTeXmessages(items.delimiterstyle);
    });
}, 400);
