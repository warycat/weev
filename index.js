'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
const PORT = process.env.PORT || 3000;
server.connection({ port: PORT });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
