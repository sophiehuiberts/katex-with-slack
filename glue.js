

var style = document.createElement("link");
style.type = 'text/css';
style.href = 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css';
style.rel = 'stylesheet';

document.head.appendChild(style);

/*
var script = document.createElement("script");
script.defer = 'defer';
script.src = 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js';

document.head.appendChild(script);
*/

/*var autorender = document.createElement("script");
autorender.defer = 'defer';
autorender.src = 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js';

document.head.appendChild(autorender);
*/

renderMathInElement(document.body);

window.setInterval(function(){
  /// call your function here
renderMathInElement(document.body);
}, 1000);
