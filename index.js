/* jshint esnext: true */
const express = require('express');
const app = express();
const cors = require('cors');

// jQuery chosen just because it has a permissive CSP, so that the XHR snippet from the README
// can be run in the console.
const jqueryCors = cors({ origin: 'http://jquery.com' });

app.get('/something-expensive', jqueryCors, (req, res) => {
  console.log('running');
  res.send('foo');
});

app.listen(9999);
