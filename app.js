const express = require('express');
const app = express();
const cors = require('cors')
const corsOptions = require('./config/corsOptions');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));

const { port } = require('./config.js');
const router = require('./routes');

app.use('/', router);
app.listen(port, () => console.log(`SERVER UP AND RUNNING IN PORT ${port}`));