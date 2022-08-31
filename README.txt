Renders LaTeX math formulas in Slack.
Similar to the Chrome extension math-with-slackb, except this plugin uses
the KaTeX library instead of MathJax for better compatibility with the
latest version of Slack.


Usage instructions:
Mostly works like standard LaTeX.

Default delimiters are as follows (this avoids issues with dollar signs being used for other purposes):

Inline math:
\( .. \)
$$ .. $$

Display math:
\[ .. \]
$$$ .. $$$

Alternatively, in the options of the extension one can also choose to work with the usual LaTeX delimiters:

Inline math:
\( .. \)
$ .. $

Display math:
\[ .. \]
$$ .. $$
$$$ .. $$$



Newlines in formulas can be inserted with \newline. Double backslash \\ is ignored.

Blackboard bold letter shorthands:
\N is short for \mathbb{N}
\R is short for \mathbb{R}
\Z is short for \mathbb{Z}
for more built-in shorthands, see
https://github.com/KaTeX/KaTeX/blob/main/src/macros.js


Downloads:
Firefox: https://addons.mozilla.org/nl/firefox/addon/latex-in-slack/
Chrome: https://chrome.google.com/webstore/detail/latex-in-slack/pfcfelfnpbnboelkjedecjipaibpnfja


Troubleshooting:
1.
Slack uses _ for _italics_ and * for *boldface*. This can interfere with your LaTeX formatting if your message
has multiple underscores or asterisks in it.
The developers of Slack are not big on having a consistent way to escape these special characters, but you can try:
a) escaping using two backslashes: $$\bar\chi^{\\*}\\_W$$
A single backslash is interpreted by the LaTeX rendering library as part of a command, but two of them will be ignored.
b) putting spaces around it: $$\bar\chi^ *  _ W$$

2.
Sometimes Slack does something funny to double space "  " making the plugin unable to recognize a piece of LaTeX
that contains it, like $$\R  $$.


Plugin by Sophie Huiberts and Bento Natura (2019-2022).
Option to choose $/$$/$$$ delimiters added by Nicolas Boumal (2020).

Licenced under the MIT licence.


katex.js, katex.css and auto-render.js and the contents of the fonts directory
are taken straight from the KaTeX project, from the v0.16.2 tarbal available at
https://github.com/KaTeX/KaTeX/releases

This plugin is not associated with the KaTeX project
nor with Slack or Slack Technologies, Inc.
