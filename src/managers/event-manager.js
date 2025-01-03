const triggeredEvents = [];

function triggerEvent(event) {
    triggeredEvents.push(event);
}

async function waitForEventTrigger(event) {
    while(!triggeredEvents.includes(event)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    removeTriggeredEvent(event);
}

function removeTriggeredEvent(event) {
    triggeredEvents.splice(0, triggeredEvents.length, ...triggeredEvents.filter((triggeredEvent) => triggeredEvent !== event));
}

module.exports = { triggerEvent, waitForEventTrigger };
