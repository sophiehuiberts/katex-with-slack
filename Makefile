compile:
	cat glue.js auto-render.js katex.js > content.js

clean:
	rm content.js
