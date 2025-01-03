const { triggerEvent } = require("../managers/event-manager.js");

async function handleNotification(request, response) {
    const { eid } = request.params;

    const oid = request.body?.data?.[0]?.oid?.value;
    if (!oid) {
        return response.sendStatus(400);
    }

    triggerEvent(`${oid}/${eid}`);
    return response.sendStatus(204);
}

module.exports = { handleNotification };
