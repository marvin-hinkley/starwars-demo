var express = require('express'),
    app     = express(),
    path    = require('path');

app.use(express.static('dist'));
app.use('/node_modules', express.static('node_modules'));

app.listen(3000, function () {
  console.log('Star Wars Demo listening on port 3000!');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
