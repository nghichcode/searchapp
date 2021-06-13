const express = require('express');
const http_proxy = require('http-proxy');

const app = express();
const port = 52023;


const proxy = http_proxy.createProxyServer({
    host: 'http://10.10.1.28',
    port: 52023
});

const config = require('./static/config.json');
app.use('/api/abp/application-configuration', function (req, res) {
  res.json(config);
});
app.use('', express.static('static'));

app.use('/', function(req, res, next) {
    proxy.web(req, res, {
        target: 'http://10.10.1.28:52023'
    }, next);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
