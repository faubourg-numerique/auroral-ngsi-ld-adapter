# Auroral NGSI-LD adapter

## Prerequisites

- [Node.js](https://nodejs.org/en) (tested with 18) + [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Auroral agent](https://github.com/AuroralH2020/auroral-node)
- NGSI-LD context broker (tested with [Orion-LD](https://github.com/FIWARE/context.Orion-LD))

## Installation

The following commands are for a Linux environment.

1. Clone this repository

    ```bash
    git clone https://github.com/faubourg-numerique/auroral-ngsi-ld-adapter.git
    ```

1. Access the cloned repository

    ```bash
    cd auroral-ngsi-ld-adapter
    ```

1. Create the environment file

    ```bash
    cp .env.example .env
    ```

1. Edit the environment file with correct values

1. Install the dependencies

    ```bash
    npm install
    ```

1. Run the agent

    ```bash
    node src/main.js
    ```

## Usage

### Properties

For the property to be found in the context broker, an entity must exist with the type defined in `CONTEXT_BROKER_ENTITY_TYPE`. That entity must have an attribute of type "Property" with a name defined in `CONTEXT_BROKER_ENTITY_PROPERTY_OID` and a value that matches the object's OID.

### Events

For an event to be triggered, a subscription must first be created in the context broker as follows:

| Name                      | Value                              | Description                                                                                                 |
|---------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------|
| entities                  | [{"type": "DeviceMeasurement"}]    | An array containing an object with a `type` key matching the value defined in `CONTEXT_BROKER_ENTITY_TYPE`. |
| notification.attributes   | ["oid"]                            | An array containing the name of the property defined in `CONTEXT_BROKER_ENTITY_PROPERTY_OID`.               |
| notification.endpoint.uri | http://localhost:8080/notify/{eid} | Edit the URL to match where the adapter is available. Replace {eid} with the name of the event.             |
