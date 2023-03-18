//our first rest api
const express = require('express');
const PORT=4000;
const app = express();
const cors =require('cors');
const mongoose = require('mongoose');
const {MONGOBD_URL} =require('./config');

mongoose.connect(MONGOBD_URL);

mongoose.connection.on('connected', () => {
    console.log("DB Connected");
})
mongoose.connection.on('error', (error) => {
    console.log("Some error while connecting to DB");
})

require('./models/user_model');
require('./models/post_model');

app.use(cors());
app.use(express.json());

app.use(require('./routes/user_route'));
app.use(require('./routes/post_route'));
app.use(require('./routes/file_route'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
