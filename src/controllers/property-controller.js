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

    if (!entities?.[0]?.[pid]) {
        return response.sendStatus(500);
    }

    return response.send(String(entities[0][pid]));
}

async function updateProperty(request, response) {
    const { oid, pid } = request.params;

    if(!request.body.value) {
        return response.send(400);
    }

    const params = {
        type: process.env.CONTEXT_BROKER_ENTITY_TYPE,
        q: `${process.env.CONTEXT_BROKER_ENTITY_PROPERTY_OID}=="${oid}"`,
        attrs: [pid, process.env.CONTEXT_BROKER_ENTITY_PROPERTY_OID].join(","),
        limit: 1,
        options: "keyValues"
    };
    const { data: entities } = await defaultContextBroker.get("/ngsi-ld/v1/entities", { params });

    if (!entities?.[0]?.[pid]) {
        return response.sendStatus(500);
    }

    const entity = entities[0];

    const data = {
        type: "Property",
        value: request.body.value
    };
    await defaultContextBroker.patch(`/ngsi-ld/v1/entities/${entity.id}/attrs/${pid}`, data);

    return response.send(String(request.body.value));
}

module.exports = { getProperty, updateProperty };
