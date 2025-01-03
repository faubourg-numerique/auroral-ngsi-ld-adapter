const dotenv = require("dotenv");

const defaultContextBroker = require("../context-brokers/default-context-broker.js");

dotenv.config();

async function getProperty(request, response) {
    const { oid, pid } = request.params;

    const params = {
        type: process.env.CONTEXT_BROKER_ENTITY_TYPE,
        q: `${process.env.CONTEXT_BROKER_ENTITY_PROPERTY_OID}=="${oid}"`,
        attrs: pid,
        limit: 1,
        options: "keyValues"
    };
    const { data: entities } = await defaultContextBroker.get("/ngsi-ld/v1/entities", { params });

    if (!(entities?.[0]?.[pid])) {
        return response.sendStatus(500);
    }

    response.send(String(entities[0][pid]));
}

module.exports = { getProperty };
