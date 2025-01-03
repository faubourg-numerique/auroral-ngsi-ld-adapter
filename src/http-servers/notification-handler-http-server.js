const http = require("http");

const notificationHandlerApp = require("../apps/notification-handler-app.js");

const notificationHandlerHttpServer = http.createServer(notificationHandlerApp);

module.exports = notificationHandlerHttpServer;
