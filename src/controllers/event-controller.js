const { waitForEventTrigger } = require("../managers/event-manager.js");

async function subscribeEvent(request, response) {
    const { oid, eid } = request.params;

    await waitForEventTrigger(`${oid}/${eid}`);

    return response.sendStatus(204);
}

module.exports = { subscribeEvent };
