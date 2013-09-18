=====
code-lab-0
=====
Install Node.JS
NOTE: instructions on a mac, for other os reer to link in BIB 


STEP 0 -  You need homebrew . More info http://brew.sh
< Terminal >
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
<enter> 

STEP 1 - install node
< Terminal >
brew install node <enter>

STEP 2 - Play around the node REPL shell
**Terminal**
node <enter>
'hello world!' <enter>
a = 10*10 <enter>
function fib(n){if(n<2){return 1;}else{ return fib(n-2)+fib(n-2);}} <enter>
fib(0) <enter>
fib(2) <enter>
fib(5) <enter>
fib(10) <enter>

STEP 3 - Exit Node shell
<ctrl+c> <ctrl+c>

STEP 4 - Running Server-side JS with Node.JS
-Run 'Hello world' from a js file
-Run fib code from a js file
**Terminal**
node hello.js <enter>
node fib.js <enter>

====
BiB
====
http://howtonode.org/how-to-install-nodejs
