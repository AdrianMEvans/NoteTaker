const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const htmlRouter = require('./routes/html-routes');
const apiRouter = require('./routes/api-routes');

app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRouter(app);
apiRouter(app);

app.listen(PORT, function () {
    console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });