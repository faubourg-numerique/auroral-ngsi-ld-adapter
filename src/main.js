const dotenv = require("dotenv");

const appHttpServer = require("./http-servers/app-http-server.js");
const notificationHttpServer = require("./http-servers/notification-http-server.js");

dotenv.config();

appHttpServer.listen(parseInt(process.env.ADAPTER_HTTP_SERVER_PORT), () => {
    console.log(`Adapter http server running on http://0.0.0.0:${process.env.ADAPTER_HTTP_SERVER_PORT}`)
});

notificationHttpServer.listen(parseInt(process.env.NOTIFICATION_HTTP_SERVER_PORT), () => {
    console.log(`Notification http server running on http://0.0.0.0:${process.env.NOTIFICATION_HTTP_SERVER_PORT}`)
});
