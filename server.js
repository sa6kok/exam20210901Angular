const express = require('express');

const app = express();

app.use(express.static('./dist/localBnB'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/localBnB/'}
);
});

app.listen(process.env.PORT || 4221);
