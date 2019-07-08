const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
