const express = require("express");

const { handleNotification } = require("../controllers/notification-controller.js");

const notificationHandlerApp = express();

notificationHandlerApp.use(express.json())

notificationHandlerApp.post("/notify/:eid", handleNotification);

module.exports = notificationHandlerApp;
