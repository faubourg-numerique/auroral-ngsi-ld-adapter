const express = require("express");

const { getProperty, updateProperty } = require("../controllers/property-controller.js");
const { subscribeEvent } = require("../controllers/event-controller.js");

const adapterApp = express();

adapterApp.use(express.json())

adapterApp.get("/api/property/:oid/:pid", getProperty);
adapterApp.put("/api/property/:oid/:pid", updateProperty);
adapterApp.get("/api/event/:oid/:eid", subscribeEvent);

module.exports = adapterApp;
