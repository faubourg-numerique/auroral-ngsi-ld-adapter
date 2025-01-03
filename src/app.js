const express = require("express");

const { getProperty } = require("./controllers/property-controller.js");
const { subscribeEvent } = require("./controllers/event-controller.js");

const app = express();

app.get("/api/property/:oid/:pid", getProperty);
app.get("/api/event/:oid/:eid", subscribeEvent);

module.exports = app;
