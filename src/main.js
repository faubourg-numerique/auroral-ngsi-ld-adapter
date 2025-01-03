const dotenv = require("dotenv");

const adapterHttpServer = require("./http-servers/adapter-http-server.js");
const notificationHandlerHttpServer = require("./http-servers/notification-handler-http-server.js");

dotenv.config();

adapterHttpServer.listen(parseInt(process.env.ADAPTER_HTTP_SERVER_PORT), () => {
    console.log(`Adapter http server running on http://0.0.0.0:${process.env.ADAPTER_HTTP_SERVER_PORT}`)
});

notificationHandlerHttpServer.listen(parseInt(process.env.NOTIFICATION_HANDLER_HTTP_SERVER_PORT), () => {
    console.log(`Notification handler http server running on http://0.0.0.0:${process.env.NOTIFICATION_HANDLER_HTTP_SERVER_PORT}`)
});
