// This is from glue.js

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


// Include the katex css file
var style = document.createElement("link");
style.type = 'text/css';
style.href = 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css';
style.rel = 'stylesheet';

document.head.appendChild(style);

// There is some leak somewhere that I cannot track down.
// Instead of resolving it, we make sure not to call on KaTeX too often.
var LaTeXmessages = function(){
	 for(var j = 0; j < classesToRender.length; j++)
	 {
		  var messages = document.getElementsByClassName(classesToRender[j]);
		  for(var i = 0; i < messages.length; i++)
		  {
				if( messages.item(i).triedlatex != true)
				{
					 renderMathInElement(messages.item(i));
					 messages.item(i).triedlatex = true
				}
		  }
	 }
}

window.setInterval(function(){
	 LaTeXmessages();
}, 400);


// Beyond here are the contents of auto-render.js and katex.js
