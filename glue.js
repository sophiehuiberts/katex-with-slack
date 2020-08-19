// This is from glue.js

// Include the katex css file
var style = document.createElement("link");
style.type = 'text/css';
style.href = 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css';
style.rel = 'stylesheet';

document.head.appendChild(style);

// There is some leak somewhere that I cannot track down.
// Instead of resolving it, we make sure not to call on KaTeX too often.
var LaTeXmessages = function(){
    var messages = document.getElementsByTagName("div");
    for(var i = 0; i < messages.length; i++)
    {
        if( messages.item(i).triedlatex != true && messages.item(i).className.match("messageContent") != null)
        {
            renderMathInElement(messages.item(i));
            messages.item(i).triedlatex = true
        }
    }
}

window.setInterval(function(){
	 LaTeXmessages();
    console.log('bleh');
}, 400);


// Beyond here are the contents of auto-render.js and katex.js
