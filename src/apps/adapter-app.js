const express = require("express");

const { getProperty } = require("../controllers/property-controller.js");
const { subscribeEvent } = require("../controllers/event-controller.js");

const adapterApp = express();

adapterApp.use(express.json())

adapterApp.get("/api/property/:oid/:pid", getProperty);
adapterApp.get("/api/event/:oid/:eid", subscribeEvent);

module.exports = adapterApp;
