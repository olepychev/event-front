//Server.js, don't forget to add express & ejs to packages
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();
app.use(express.static(`${__dirname}`)); // set the static files location for the static html
app.engine('.html', require('ejs').renderFile);
app.set('views', `${__dirname}/dist`);
router.get('/*', (req, res, next) => {
    res.sendFile(`${__dirname}/index.html`)
});
app.use('/', router);
app.listen(port);
console.log('App running on port', port);

