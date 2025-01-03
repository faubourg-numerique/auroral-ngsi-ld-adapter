const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const defaultContextBroker = axios.create({
    baseURL: process.env.CONTEXT_BROKER_URL,
    headers: {
        Link: process.env.CONTEXT_BROKER_CONTEXT_URL ? `<${process.env.CONTEXT_BROKER_CONTEXT_URL}>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"` : undefined
    }
});

module.exports = defaultContextBroker;
