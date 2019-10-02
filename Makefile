compile:
	cat katex.js auto-render.js glue.js > content.js

clean:
	rm content.js
