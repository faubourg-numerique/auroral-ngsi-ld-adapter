const http = require("http");

const app = require("../app.js");

const appHttpServer = http.createServer(app);

module.exports = appHttpServer;
