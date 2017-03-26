# cors-response-tester

Testing whether the cors module runs request handlers when the origin doesn't match.

# Installation

```sh
npm install
```

# Running

Run `npm start` in the terminal. Then run the following in the console of http://jquery.com (to get
a successful response) and http://underscorejs.org/ (to get an error):

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:9999/something-expensive', true);
xhr.addEventListener('error', () => console.error('error'));
xhr.addEventListener('load', () => console.log('response:', xhr.responseText));
xhr.send();
```

But note that the terminal logged "running" *twice*, i.e. the cors module still called `next` even
though it did not set the response headers to allow the browser to read the response.
