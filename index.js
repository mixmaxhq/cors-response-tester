/* jshint esnext: true */
const express = require('express');
const app = express();

const cors = require('cors')({
  // jQuery chosen just because it has a permissive CSP, so that the XHR snippet from the README
  // can be run in the console.
  origin: ['http://localhost:9999', 'http://jquery.com'],
  mismatchContinue: true // The default.
});

app.post('/something-expensive', cors, (req, res) => {
  console.log('running');
  res.send('foo');
});

app.get('/view', (req, res) => {
  res.send(`
    <button style="font-size: 14px;">Click to test same-origin request</button>
    <script>
      document.querySelector('button').addEventListener('click', () => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/something-expensive', true);
        xhr.addEventListener('error', () => console.error('error'));
        xhr.addEventListener('load', () => console.log('response:', xhr.responseText));
        xhr.send();
      });
    </script>
  `);
});

app.listen(9999);
