const express = require('express');
const http_proxy = require('http-proxy');

const app = express();
const port = 52023;

const proxHost = 'http://127.0.0.1';
const proxPort = 49420;


const proxy = http_proxy.createProxyServer({
    host: proxHost,
    port: proxPort
});

const config = require('./static/config.json');
app.use('/api/abp/application-configuration', function (req, res) {
  res.json(config);
});
app.use('', express.static('static'));

app.use('/', function(req, res, next) {
    proxy.web(req, res, {
        target: proxHost+':'+proxPort
    }, next);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
