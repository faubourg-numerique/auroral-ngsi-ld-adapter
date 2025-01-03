const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const defaultAgent = axios.create({
    baseURL: process.env.AGENT_URL
});

module.exports = defaultAgent;
