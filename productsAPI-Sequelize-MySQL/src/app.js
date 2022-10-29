const express = require('express');
const routes = require('./routes/index');

const app = express();
{
    app.use(express.json());
    app.use('/api/v1',routes);
}

app.listen(3000, () => console.log('Example app listening on port 3000'));


