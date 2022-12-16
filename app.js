const express = require('express');
const app = express();

const { port } = require('./config.js');
const router = require('./routes');

app.use('/', router);
app.listen(port, () => console.log(`SERVER UP AND RUNNING IN PORT ${port}`));