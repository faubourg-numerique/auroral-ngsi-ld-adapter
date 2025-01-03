const defaultAgent = require("../agents/default-agent.js");

async function getOidByAdapterId(adapterId) {
    const response = await defaultAgent.get(`/api/registration/oid/${adapterId}`);
    return response.data.message;
}

async function getRegistration(oid) {
    const response = await defaultAgent.get(`/api/registration/${oid}`);
    return response.data.message;
}

module.exports = { getOidByAdapterId, getRegistration };
