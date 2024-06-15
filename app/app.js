const express = require('express');
const { urlencoded } = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router');
const cors = require('cors');
const { validateUser } = require('./middleware');

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
