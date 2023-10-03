const express = require('express');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));