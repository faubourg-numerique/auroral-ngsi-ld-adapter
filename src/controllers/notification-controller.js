const dotenv = require("dotenv");

const { triggerEvent } = require("../managers/event-manager.js");

dotenv.config();

async function handleNotification(request, response) {
    const { eid } = request.params;

    const oid = request.body?.data?.[0]?.[process.env.CONTEXT_BROKER_ENTITY_PROPERTY_OID]?.value;
    if (!oid) {
        return response.sendStatus(400);
    }

    triggerEvent(`${oid}/${eid}`);
    return response.sendStatus(204);
}

module.exports = { handleNotification };
