const express = require('express')
const experssConfig = require('./config/express')
const databaseConfig = require('./config/database')
const routesConfig = require('./config/routes')

start()

async function start() {
    const app = express();

    experssConfig(app);
    await databaseConfig(app);
    routesConfig(app);
    app.listen(3000, () => console.log('Server listening on port 3000'))
}
