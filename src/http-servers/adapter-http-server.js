const http = require("http");

const adapterApp = require("../apps/adapter-app.js");

const adapterHttpServer = http.createServer(adapterApp);

module.exports = adapterHttpServer;
