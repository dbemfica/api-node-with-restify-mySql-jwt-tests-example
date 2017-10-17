require('dotenv').config();
const server = require('./server/index');
server.listen(process.env.SERVER_PORT);