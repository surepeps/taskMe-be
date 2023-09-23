require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const db = require('./config/database');

app.use(bodyParser.json());


app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
