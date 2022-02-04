const express = require('express');
const cors = require('cors');
const {argv} = require('yargs');

const {initRoutes} = require("./routes");

const {port = 3000} = argv;

const app = express();

app.use(cors());

initRoutes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
